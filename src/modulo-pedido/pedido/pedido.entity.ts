import { Base } from 'src/base/entities/base';
import { Entity, Column, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { DetallePedido } from '../detalle-pedido/detalle-pedido.entity';
import { Factura } from '../factura/factura.entity';

// entidad composicion con pedido y factura
@Entity('Pedido')
export class Pedido extends Base {
  @Column()
  fecha: Date;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'int' })
  tipo_envio: number;

  @Column()
  estado: string;

  @Column({ type: 'datetime' })
  hora_estimada: Date;

  @OneToMany((type) => DetallePedido, (DetallePedido) => DetallePedido.pedido, {
    cascade: ['update', 'insert'],
  })
  detalles_pedido: DetallePedido;

  @OneToOne((type) => Factura, (Factura) => Factura.pedido, {
    eager: true,
    cascade: ['insert'],
  })
  factura: Factura;
}
