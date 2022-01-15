import { Base } from 'src/base/entities/base';
import { Pedido } from 'src/modulo-pedido/pedido/pedido.entity';
import { Column, DeleteDateColumn, Entity, OneToMany, OneToOne } from 'typeorm';
import { Domicilio } from '../domicilio/domicilio.entity';

@Entity('Cliente')
export class Cliente extends Base {
  @Column()
  nombre: string;
  @Column()
  apellido: string;
  @Column()
  telefono: number;
  @Column()
  email: string;

  @OneToOne((type) => Domicilio, (domicilio) => domicilio.cliente, {
    eager: true,
    cascade: ['insert'],
  })
  domicilio: Domicilio;

  @OneToMany((type) => Pedido, (pedido) => pedido.cliente, { eager: true })
  pedidos: Pedido[];

  @DeleteDateColumn()
  deletedAt: Date;
}
