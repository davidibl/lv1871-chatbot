import { KundennummerService } from './kundennummerService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/elementAt';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

@Injectable()
export class ChatService {

    private _answers = [
        'Uiuiuiuiui',
        'Sowas aber auch :-O',
        'Was geht alter?',
    ];

    public constructor(private _kundennummerservice: KundennummerService) {}

    public answer(message: string) {
        return this._kundennummerservice
            .getKundennummer()
            .switchMap(knr => this.getRandomMessage(knr));
    }

    private getRandomMessage(kundennummer: number) {
        return Observable
            .from(this._answers)
            .elementAt(Math.floor((Math.random() * 3)))
            .map(message => `Hallo Kunde ${kundennummer} ` + message);
    }
}
