import { IBeitrag } from './beitrag';
import { IUmfang } from './umfang';

export interface IVertrag {
    versicherungsnummer: number;
    tarif: string;
    beitrag: IBeitrag;
    umfang: IUmfang;
    renteMonatlich?: number;
    versicherungssumme?: number;
}
