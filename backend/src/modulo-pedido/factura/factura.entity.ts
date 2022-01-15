import { Base } from 'src/base/entities/base';
import {
  Entity,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { DetallePedido } from '../detalle-pedido/detalle-pedido.entity';
import { Pedido } from '../pedido/pedido.entity';

// entidad composicion con pedido y factura
@Entity('Factura')
export class Factura extends Base {
  @Column()
  fecha: Date;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'double' })
  monto_descuento: number;

  @Column({ type: 'double' })
  subtotal: number;

  @Column()
  forma_pago: string;

  @Column()
  nro_tarjeta: string;

  @OneToOne((type) => Pedido, (pedido) => pedido.factura)
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedido;

  @OneToMany(
    (type) => DetallePedido,
    (detalles_pedido) => detalles_pedido.factura,
    {
      cascade: ['update', 'insert'],
    },
  )
  detalles_pedido: DetallePedido[];

  @DeleteDateColumn()
  deletedAt: Date;
}
