import { Base } from 'src/base/entities/base';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('ArticuloInsumo')
export class ArticuloInsumo extends Base {
  @Column({ length: 50, type: 'varchar' })
  denominacion: string;

  @Column({ type: 'double' })
  precio_compra: number;

  @Column({ type: 'double' })
  precio_venta: number;

  @Column({ type: 'double' })
  stock_minimo: number;

  @Column({ type: 'double' })
  stock_actual: number;

  @Column()
  unidad_medida: string;

  @Column({ default: true })
  es_insumo: boolean;

  //   @OneToMany(
  //     type => DetalleSemielaborado,
  //     detalle_semielaborado => detalle_semielaborado.insumo_,
  //   )
  //   detalles_semielaborado: DetalleSemielaborado[];

  //   @OneToMany(
  //     type => DetalleCatalogo,
  //     detalle_catalogo => detalle_catalogo.insumo_,
  //   )
  //   detalles_catalogo: DetalleCatalogo[];

  //   @ManyToOne(
  //     type => CategoriaInsumo,
  //     categoria_insumo => categoria_insumo.insumo,
  //     { eager: true, onDelete: 'SET NULL' },
  //   )
  //   categoria_insumo_: CategoriaInsumo;
}
