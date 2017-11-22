import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class InitService {

    load(): Promise<any> {

        return Observable.create(observer => {
            setTimeout(() => observer.complete(), 2000);
        }).toPromise();
    }
}
