import { Base } from 'src/base/entities/base';
import { ArticuloInsumo } from '../articulo-insumo/articulo-insumo.entity';
import { ArticuloManufacturado } from '../articulo-manufacturado/articulo-manufacturado.entity';
export declare class ArticuloManufacturadoDetalle extends Base {
    cantidad: number;
    unidad_medida: string;
    insumo: ArticuloInsumo;
    manufacturado: ArticuloManufacturado;
}
