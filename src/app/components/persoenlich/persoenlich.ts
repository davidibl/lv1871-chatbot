import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { IVertragsauskunft } from '../../model/vertragsauskunft';
@Component({
    moduleId: module.id,
    selector: 'lv-persoenlich',
    templateUrl: 'persoenlich.html',
})
export class PersoenlichComponent implements OnInit {

    public vertragsauskunft: IVertragsauskunft;

    public constructor(private _dataService: DataService) { }

    public ngOnInit() {
        this._dataService.getData().subscribe(data => this.vertragsauskunft = data);
    }

}
