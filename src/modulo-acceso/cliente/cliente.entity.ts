import { Base } from 'src/base/entities/base';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
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

  @OneToOne(() => Domicilio, (domicilio) => domicilio.cliente, {
    eager: true,
    cascade: ['insert'],
  })
  domicilio: Domicilio;

  // @OneToMany((type) => Pedido, (pedido) => pedido.cliente_, { eager: true })
  // pedidos: Pedido[];
}
