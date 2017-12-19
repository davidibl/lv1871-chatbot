import { MessageType } from './../../model/chatMessageType';
import { ChatMessage } from './../../model/chatMessage';
import { Observable } from 'rxjs/Observable';
import { DataService } from './../../services/dataService';
import { KundennummerService } from './../../services/kundennummerService';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/zip';
import { ChatService } from '../../services/chatService';

@Component({
    selector: 'lv-chat',
    templateUrl: 'chat.html',
    styleUrls: ['chat.scss'],
})
export class ChatComponent implements OnInit {

    public messageStream = new ReplaySubject<ChatMessage>();
    public messages = new Array<ChatMessage>();
    public newMessage: string;

    private _indicatorMessage = new ChatMessage('...', MessageType.INDICATOR);

    public constructor(private _kundennummerService: KundennummerService,
        private _chatService: ChatService,
        private _dataService: DataService) { }

    ngOnInit(): void {
        this._chatService
            .answerStream
            .subscribe(answer => this.messageStream.next(answer));

        this.messageStream
            .delay(2000)
            .subscribe(message => this.messages.push(message));

        Observable
            .zip(
                this._kundennummerService.getKundennummer(),
                this._dataService.getData(),
            )
            .subscribe(args => {
                const auskunft = args[1];
                const kundennummer = args[0];
                this.messageStream.next(
                    new ChatMessage(
                        `Hallo Herr ${auskunft.kunde.name},` +
                        `wie geht es Ihnen? Übrigens, Ihre Kundennummer ist ${kundennummer}`,
                        MessageType.REMOTE)
                );
            });
    }

    public sendMessage() {
        if (!this.newMessage) {
            return;
        }

        this.messages = this.messages.filter(message => message.type !== MessageType.INDICATOR);

        Observable.of(this.newMessage)
            .do(message => this.messages.push(new ChatMessage(message, MessageType.USER)))
            .do(message => this.newMessage = null)
            .do(message => this.messageStream.next(this._indicatorMessage))
            .delay(500)
            .switchMap(message => this._chatService.answer(message))
            .do(newRemoteMessage => this.messageStream.next(newRemoteMessage))
            .delay(1000)
            .subscribe(newRemoteMessage => this.messages = this.messages.filter(msg => msg.type !== MessageType.INDICATOR));
    }
}
