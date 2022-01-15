import { Base } from 'src/base/entities/base';
import { DetallePedido } from 'src/modulo-pedido/detalle-pedido/detalle-pedido.entity';
import { ArticuloManufacturadoDetalle } from '../articulo-manufacturado-detalle/articulo-manufacturado-detalle.entity';
import { RubroArticulo } from '../rubro-articulo/rubro-articulo.entity';
export declare class ArticuloInsumo extends Base {
    denominacion: string;
    precio_compra: number;
    precio_venta: number;
    stock_minimo: number;
    stock_actual: number;
    unidad_medida: string;
    es_insumo: boolean;
    detalles_pedido: DetallePedido[];
    detalles_manufacturado: ArticuloManufacturadoDetalle[];
    rubro_insumo: RubroArticulo;
}
