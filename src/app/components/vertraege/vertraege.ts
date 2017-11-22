import { Component, OnInit } from '@angular/core';
import { IVertragsauskunft } from '../../model/vertragsauskunft';
import { DataService } from '../../services/dataService';
@Component({
    moduleId: module.id,
    selector: 'lv-vertraege',
    templateUrl: 'vertraege.html',
    styleUrls: ['vertraege.scss'],
})
export class VertraegeComponent implements OnInit {

    public vertragsauskunft: IVertragsauskunft;

    public constructor(private _dataService: DataService) { }

    public ngOnInit() {
        this._dataService.getData().subscribe(data => this.vertragsauskunft = data);
    }
}
