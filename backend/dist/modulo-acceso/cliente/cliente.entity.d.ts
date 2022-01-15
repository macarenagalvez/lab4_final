import { Base } from 'src/base/entities/base';
import { Pedido } from 'src/modulo-pedido/pedido/pedido.entity';
import { Domicilio } from '../domicilio/domicilio.entity';
export declare class Cliente extends Base {
    nombre: string;
    apellido: string;
    telefono: number;
    email: string;
    domicilio: Domicilio;
    pedidos: Pedido[];
}
