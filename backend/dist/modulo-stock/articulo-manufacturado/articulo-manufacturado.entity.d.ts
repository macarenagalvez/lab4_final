import { Base } from 'src/base/entities/base';
import { DetallePedido } from 'src/modulo-pedido/detalle-pedido/detalle-pedido.entity';
import { ArticuloManufacturadoDetalle } from '../articulo-manufacturado-detalle/articulo-manufacturado-detalle.entity';
import { RubroGeneral } from '../rubro-general/rubro-general.entity';
export declare class ArticuloManufacturado extends Base {
    denominacion: string;
    tiempo_estimado_cocina: number;
    precio_venta: number;
    detalles_pedido: DetallePedido[];
    detalles_manufacturado: ArticuloManufacturadoDetalle[];
    rubro: RubroGeneral;
}
