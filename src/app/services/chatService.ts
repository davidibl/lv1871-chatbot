import { IRemoteAnswerResult } from './../model/remoteAnswerResult';
import { IRemoteAnswer } from './../model/remoteAnswer';
import { MessageType } from './../model/chatMessageType';
import { ChatMessage } from './../model/chatMessage';
import { KundennummerService } from './kundennummerService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/elementAt';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChatService {

    private url = 'http://localhost:9001/api/answer';
    private urlTrain = 'http://localhost:9001/api/train';

    private _answers = [
        'Uiuiuiuiui',
        'Sowas aber auch :-O',
        'Was geht alter?',
        'ahh. Ich kann dich verstehen',
        'Leider habe ich überhaupt keine Ahnung davon was du hier redest',
        'Lass mich in Ruh!!!!',
    ];

    public answerStream = new ReplaySubject<ChatMessage>();

    public constructor(private _kundennummerservice: KundennummerService,
                       private _webClient: HttpClient) {}

    public answer(newMessage: string) {
        return this._kundennummerservice
            .getKundennummer()
            .switchMap(knr => this.getAnswer(knr, newMessage))
            .flatMap(message => message)
            .map(message => new ChatMessage(message.answer, MessageType.REMOTE, message.score, message.question));
    }

    public trainService(userMessage: string, messageChosen: ChatMessage) {
        this._kundennummerservice
            .getKundennummer()
            .switchMap(kundennummer => this.postTrainingData(kundennummer, userMessage, messageChosen))
            .subscribe();
    }

    private postTrainingData(kundennummer: number, userMessage: string, messageChosen: ChatMessage): Observable<Object> {
        return this._webClient
            .put(this.urlTrain, {
                feedbackRecords: [
                    {
                        kbAnswer: messageChosen.message,
                        kbQuestion: messageChosen.kbQuestion,
                        userId: kundennummer.toString(),
                        userQuestion: userMessage,
                    },
                ],
            });
    }

    private getAnswer(kundennummer: number, question: string) {
        return this.doRequest(question);
    }

    private doRequest(question: string): Observable<IRemoteAnswer[]> {

        return this._webClient
            .post<IRemoteAnswerResult>(this.url, { top: 3, question: question })
            .map(result => result.answers);
    }
}
