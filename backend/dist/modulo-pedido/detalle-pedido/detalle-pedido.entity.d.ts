import { Base } from 'src/base/entities/base';
import { ArticuloInsumo } from 'src/modulo-stock/articulo-insumo/articulo-insumo.entity';
import { ArticuloManufacturado } from 'src/modulo-stock/articulo-manufacturado/articulo-manufacturado.entity';
import { Factura } from '../factura/factura.entity';
import { Pedido } from '../pedido/pedido.entity';
export declare class DetallePedido extends Base {
    cantidad: number;
    precio_subtotal: number;
    pedido: Pedido;
    factura: Factura;
    insumo: ArticuloInsumo;
    manufacturado: ArticuloManufacturado;
}
