import { IAdresse } from './adresse';

export interface IKunde {
    name: string;
    vorname: string;
    geburtsdatum: string;
    geschlecht: string;
    anrede: string;
    title: string;
    adresse: IAdresse;
}
