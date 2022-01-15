import { Base } from 'src/base/entities/base';
import { ArticuloManufacturado } from '../articulo-manufacturado/articulo-manufacturado.entity';
export declare class RubroGeneral extends Base {
    denominacion: string;
    manufacturados: ArticuloManufacturado[];
}
