import { Base } from 'src/base/entities/base';
import { Entity, Column, ManyToOne } from 'typeorm';

//entidad composicion con pedido
@Entity('DetallePedido')
export class DetallePedido extends Base {
  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'double' })
  precio_subtotal: number;

  //   @ManyToOne((type) => Pedido, (pedido) => pedido.detalles_pedido, {
  //     onDelete: 'CASCADE',
  //     cascade: ['update', 'insert'],
  //   })
  //   pedido: Pedido;

  //   @ManyToOne((type) => Factura, (factura) => factura.detalles_pedido, {
  //     onDelete: 'CASCADE',
  //     cascade: ['update', 'insert'],
  //   })
  //   factura: Factura;
}
