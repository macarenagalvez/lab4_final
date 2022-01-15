import { Base } from 'src/base/entities/base';
import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ArticuloInsumo } from '../articulo-insumo/articulo-insumo.entity';

@Entity('RubroArticulo')
export class RubroArticulo extends Base {
  @Column({ length: 50, type: 'varchar' })
  denominacion: string;

  @ManyToOne((type) => RubroArticulo, (catagoria) => catagoria.hijos)
  @JoinColumn({ name: 'rubro_padre_id' })
  padre: RubroArticulo;

  @OneToMany((type) => RubroArticulo, (categoria) => categoria.padre)
  hijos: RubroArticulo[];

  @OneToMany((type) => ArticuloInsumo, (insumo) => insumo.rubro_insumo)
  insumos: ArticuloInsumo[];
}
