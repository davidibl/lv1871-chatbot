import { Component, Input } from '@angular/core';
import { IAdresse } from '../../model/adresse';
@Component({
    moduleId: module.id,
    selector: 'lv-adresse',
    templateUrl: 'adresse.html',
})
export class AdresseComponent {

    @Input()
    public adresse: IAdresse;
}
