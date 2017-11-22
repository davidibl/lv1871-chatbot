import { DataService } from './../../services/dataService';
import { KundennummerService } from './../../services/kundennummerService';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
    selector: 'lv-chat',
    templateUrl: 'chat.html',
    styleUrls: ['chat.scss'],
})
export class ChatComponent implements OnInit {

    public messageStream = new ReplaySubject<string>();

    public constructor(private _kundennummerService: KundennummerService,
                       private _dataService: DataService) {}

    ngOnInit(): void {
    }
}
