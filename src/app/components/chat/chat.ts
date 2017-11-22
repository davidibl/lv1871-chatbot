import { Observable } from 'rxjs/Observable';
import { DataService } from './../../services/dataService';
import { KundennummerService } from './../../services/kundennummerService';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/zip';

@Component({
    selector: 'lv-chat',
    templateUrl: 'chat.html',
    styleUrls: ['chat.scss'],
})
export class ChatComponent implements OnInit {

    public messageStream = new ReplaySubject<string>();
    public messages = new Array<string>();

    public constructor(private _kundennummerService: KundennummerService,
                       private _dataService: DataService) {}

    ngOnInit(): void {
        this.messageStream
            .delay(1000)
            .subscribe(message => this.messages.push(message));

        Observable
            .zip(
                this._kundennummerService.getKundennummer(),
                this._dataService.getData(),
            )
            .subscribe(args => {
                const auskunft = args[1];
                const kundennummer = args[0];
                this.messageStream.next(`Hallo Herr ${auskunft.kunde.name},` +
                    `wie geht es Ihnen? Übrigens, Ihre Kundennummer ist ${kundennummer}`);
            });
    }
}
