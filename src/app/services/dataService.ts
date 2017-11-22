import { Injectable } from '@angular/core';
import { IVertragsauskunft } from '../model/vertragsauskunft';
import { vertragsauskunft } from '../data/data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {

    public getData(): Observable<IVertragsauskunft> {
        return Observable.of(vertragsauskunft);
    }

}
