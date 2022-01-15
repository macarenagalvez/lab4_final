import { Base } from 'src/base/entities/base';
import { Cliente } from 'src/modulo-acceso/cliente/cliente.entity';
import { DetallePedido } from '../detalle-pedido/detalle-pedido.entity';
import { Factura } from '../factura/factura.entity';
export declare class Pedido extends Base {
    fecha: Date;
    numero: number;
    tipo_envio: number;
    estado: string;
    hora_estimada: Date;
    detalles_pedido: DetallePedido[];
    factura: Factura;
    cliente: Cliente;
}
