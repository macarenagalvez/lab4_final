import { Base } from 'src/base/entities/base';
import { ArticuloInsumo } from 'src/modulo-stock/articulo-insumo/articulo-insumo.entity';
import { ArticuloManufacturado } from 'src/modulo-stock/articulo-manufacturado/articulo-manufacturado.entity';
import { RubroArticulo } from 'src/modulo-stock/rubro-articulo/rubro-articulo.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Factura } from '../factura/factura.entity';
import { Pedido } from '../pedido/pedido.entity';

// entidad composicion con pedido y factura
@Entity('DetallePedido')
export class DetallePedido extends Base {
  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'double' })
  precio_subtotal: number;

  @ManyToOne((type) => Pedido, (pedido) => pedido.detalles_pedido, {
    cascade: ['update', 'insert'],
  })
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedido;

  @ManyToOne((type) => Factura, (factura) => factura.detalles_pedido, {
    cascade: ['update'],
  })
  @JoinColumn({ name: 'factura_id' })
  factura: Factura;

  @ManyToOne((type) => ArticuloInsumo, (insumo) => insumo.detalles_pedido, {
    eager: true,
  })
  @JoinColumn({ name: 'insumo_id' })
  insumo: ArticuloInsumo;

  @ManyToOne(
    (type) => ArticuloManufacturado,
    (manufacturado) => manufacturado.detalles_pedido,
    { eager: true },
  )
  @JoinColumn({ name: 'manufacturado_id' })
  manufacturado: ArticuloManufacturado;

  @DeleteDateColumn()
  deletedAt: Date;
}
