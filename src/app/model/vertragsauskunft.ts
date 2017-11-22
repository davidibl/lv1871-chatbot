import { IKunde } from './kunde';
import { IVertrag } from './vertrag';

export interface IVertragsauskunft {
    kunde: IKunde;
    vertraege: IVertrag[];
}
