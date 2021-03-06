import { Base } from 'src/base/entities/base';
import { DetallePedido } from 'src/modulo-pedido/detalle-pedido/detalle-pedido.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import { ArticuloManufacturadoDetalle } from '../articulo-manufacturado-detalle/articulo-manufacturado-detalle.entity';
import { RubroGeneral } from '../rubro-general/rubro-general.entity';

@Entity('ArticuloManufacturado')
export class ArticuloManufacturado extends Base {
  @Column({ type: 'varchar', length: 100 })
  denominacion: string;

  @Column({ type: 'int' })
  tiempo_estimado_cocina: number;

  @Column({ type: 'double' })
  precio_venta: number;

  @OneToMany(
    (type) => DetallePedido,
    (detalle_catalogo) => detalle_catalogo.manufacturado,
  )
  detalles_pedido: DetallePedido[];

  @OneToMany(
    (type) => ArticuloManufacturadoDetalle,
    (detalle_manufacturado) => detalle_manufacturado.manufacturado,
    { eager: true, cascade: ['insert'] },
  )// esto es la receta del manufacturado/producto
  detalles_manufacturado: ArticuloManufacturadoDetalle[];

  @ManyToOne((type) => RubroGeneral, (catagoria) => catagoria.manufacturados)
  @JoinColumn({ name: 'rubro_id' })
  rubro: RubroGeneral;

  @DeleteDateColumn()
  deletedAt: Date;
}
