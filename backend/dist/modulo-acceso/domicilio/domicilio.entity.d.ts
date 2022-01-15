import { Base } from 'src/base/entities/base';
import { Cliente } from '../cliente/cliente.entity';
export declare class Domicilio extends Base {
    calle: string;
    numero: number;
    localidad: string;
    cliente: Cliente;
}
