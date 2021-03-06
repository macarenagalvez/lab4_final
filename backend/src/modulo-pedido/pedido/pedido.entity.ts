import { Base } from 'src/base/entities/base';
import { Cliente } from 'src/modulo-acceso/cliente/cliente.entity';
import {
  Entity,
  Column,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
  DeleteDateColumn,
} from 'typeorm';
import { DetallePedido } from '../detalle-pedido/detalle-pedido.entity';
import { Factura } from '../factura/factura.entity';

// entidad composicion con pedido y factura
@Entity('Pedido')
export class Pedido extends Base {
  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'int' })
  numero: number;

  // 0: retiro por local, 1: delivery
  @Column({ type: 'int' })
  tipo_envio: number;

  // 0: PENDIENTE, 1: APROBADO, 2: TERMINADO, 3: FACTURADO, 4: EN DELIVERY
  @Column({ default: 0 })
  estado: number;

  @Column({ type: 'datetime' })
  hora_estimada: Date;

  @OneToMany((type) => DetallePedido, (DetallePedido) => DetallePedido.pedido, {
    cascade: ['update', 'insert'],  eager: true,
  })
  detalles_pedido: DetallePedido[];

  @OneToOne((type) => Factura, (Factura) => Factura.pedido, {
    eager: true,
    cascade: ['insert'],
  })
  factura: Factura;

  @ManyToOne((type) => Cliente, (Cliente) => Cliente.pedidos)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  @DeleteDateColumn()
  deletedAt: Date;
}
