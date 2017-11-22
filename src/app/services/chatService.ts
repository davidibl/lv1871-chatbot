import { KundennummerService } from './kundennummerService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/elementAt';

@Injectable()
export class ChatService {

    private _answers = [
        'Uiuiuiuiui',
        'Sowas aber auch :-O',
        'Was geht alter?',
    ];

    public constructor(private _kundennummerservice: KundennummerService) {}

    public answer(kundennummer: number, message: string) {

    }

    private getRandomMessage() {
        return Observable
            .of(this._answers)
            .elementAt(Math.floor((Math.random() * 3)));
    }
}
