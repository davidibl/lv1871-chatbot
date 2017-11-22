import { IVertragsauskunft } from '../model/vertragsauskunft';

export const vertragsauskunft: IVertragsauskunft = {
    kunde: {
        name: 'Ibl',
        vorname: 'David',
        adresse: {
            strasse: 'Behamstraße 32',
            plz: '80688',
            ort: 'München',
            land: 'DE',
        },
        geburtsdatum: '20.12.1982',
        geschlecht: 'm',
        anrede: 'Herr',
        title: 'Dr.'
    },
    vertraege: [
        {
            versicherungsnummer: 70543622,
            tarif: 'super BU 1',
            beitrag: {
                zahlweise: 'MONATLICH',
                summe: 102.45
            },
            umfang: {
                beginn: '12.12.1990',
                ende: '20.12.2098',
            },
            renteMonatlich: 3003.12,
        },
        {
            versicherungsnummer: 70543622,
            tarif: 'krasse Risikoleben',
            beitrag: {
                zahlweise: 'JAEHRLICH',
                summe: 3.99
            },
            umfang: {
                beginn: '12.12.1990',
                ende: '20.12.2024',
            },
            versicherungssumme: 120000000,
        }
    ]
};
