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

    private _url = 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/{knowledgebase-id}/generateAnswer';
    private _apikey = '{your-apikey}';

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
            .map(message => new ChatMessage(message.answer, MessageType.REMOTE, message.score));
    }

    private getAnswer(kundennummer: number, question: string) {
        return this.doRequest(question);
    }

    private doRequest(question: string): Observable<IRemoteAnswer[]> {
        const headers = new HttpHeaders({'Ocp-Apim-Subscription-Key': this._apikey });

        return this._webClient
            .patch<IRemoteAnswerResult>(this._url, { top: 3, question: question })
            .map(result => result.answers);
    }
}
