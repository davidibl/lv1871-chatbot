import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { IVertragsauskunft } from '../../model/vertragsauskunft';

@Component({
    moduleId: module.id,
    selector: 'lv-start',
    templateUrl: 'start.html',
    styleUrls: ['start.scss'],
})
export class StartComponent implements OnInit {

    public vertragsauskunft: IVertragsauskunft;

    public constructor(private _dataService: DataService) { }

    public ngOnInit(): void {
        this._dataService.getData().subscribe(vertragsauskunft => this.vertragsauskunft = vertragsauskunft);
    }
}
