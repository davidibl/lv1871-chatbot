import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

@Injectable()
export class KundennummerService {

    public getKundennummer(): Observable<number> {
        return Observable.of(123);
    }

}
