import { Base } from 'src/base/entities/base';
import { ArticuloInsumo } from '../articulo-insumo/articulo-insumo.entity';
export declare class RubroArticulo extends Base {
    denominacion: string;
    padre: RubroArticulo;
    hijos: RubroArticulo[];
    insumos: ArticuloInsumo[];
}
