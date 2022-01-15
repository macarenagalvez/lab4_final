import { Base } from 'src/base/entities/base';
import { DetallePedido } from '../detalle-pedido/detalle-pedido.entity';
import { Pedido } from '../pedido/pedido.entity';
export declare class Factura extends Base {
    fecha: Date;
    numero: number;
    monto_descuento: number;
    subtotal: number;
    forma_pago: string;
    nro_tarjeta: string;
    pedido: Pedido;
    detalles_pedido: DetallePedido[];
}
