import { Base } from 'src/base/entities/base';
import { DetallePedido } from 'src/modulo-pedido/detalle-pedido/detalle-pedido.entity';
import { Entity, Column, ManyToOne, OneToMany, DeleteDateColumn } from 'typeorm';
import { ArticuloManufacturadoDetalle } from '../articulo-manufacturado-detalle/articulo-manufacturado-detalle.entity';
import { RubroArticulo } from '../rubro-articulo/rubro-articulo.entity';

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

  @OneToMany(
    (type) => DetallePedido,
    (detalle_catalogo) => detalle_catalogo.insumo,
  )
  detalles_pedido: DetallePedido[];

  @OneToMany(
    (type) => ArticuloManufacturadoDetalle,
    (detalle_semielaborado) => detalle_semielaborado.insumo,
  )
  detalles_manufacturado: ArticuloManufacturadoDetalle[];

  @ManyToOne((type) => RubroArticulo, (rubro_insumo) => rubro_insumo.insumos, {
    eager: true,
  })
  rubro_insumo: RubroArticulo;

  @DeleteDateColumn()
  deletedAt: Date;
}
