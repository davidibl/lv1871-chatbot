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

    private _answers = [
        'Uiuiuiuiui',
        'Sowas aber auch :-O',
        'Was geht alter?',
        'ahh. Ich kann dich verstehen',
        'Leider habe ich überhaupt keine Ahnung davon was du hier redest',
        'Lass mich in Ruh!!!!',
    ];

    public answerStream = new ReplaySubject<ChatMessage>();

    public constructor(private _kundennummerservice: KundennummerService) {}

    public answer(newMessage: string) {
        return this._kundennummerservice
            .getKundennummer()
            .switchMap(knr => this.getRandomMessage(knr))
            .map(message => new ChatMessage(message, MessageType.REMOTE));
    }

    private getRandomMessage(kundennummer: number) {
        return Observable
            .from(this._answers)
            .elementAt(Math.floor((Math.random() * 5)))
            .map(message => `Hallo Kunde ${kundennummer} ` + message);
    }
}
