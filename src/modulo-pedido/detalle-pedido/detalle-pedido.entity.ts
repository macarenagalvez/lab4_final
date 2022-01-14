import { Base } from 'src/base/entities/base';
import { Entity, Column, ManyToOne } from 'typeorm';
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
  pedido: Pedido;

  @ManyToOne((type) => Factura, (factura) => factura.detalles_pedido, {
    cascade: ['update', 'insert'],
  })
  factura: Factura;
}
