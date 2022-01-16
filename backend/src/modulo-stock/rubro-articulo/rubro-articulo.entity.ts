import { Base } from 'src/base/entities/base';
import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { ArticuloInsumo } from '../articulo-insumo/articulo-insumo.entity';

@Entity('RubroArticulo')
export class RubroArticulo extends Base {
  @Column({ length: 50, type: 'varchar' })
  denominacion: string;

  @ManyToOne((type) => RubroArticulo, (catagoria) => catagoria.hijos, {
    eager: true,
  })
  @JoinColumn({ name: 'rubro_padre_id' })
  @TreeParent()
  padre: RubroArticulo;

  @OneToMany((type) => RubroArticulo, (categoria) => categoria.padre)
  @TreeChildren()
  hijos: RubroArticulo[];

  @OneToMany((type) => ArticuloInsumo, (insumo) => insumo.rubro_insumo)
  insumos: ArticuloInsumo[];

  // con esto puedo hacer una baja logico y no fisica
  @DeleteDateColumn()
  deletedAt: Date;
}
