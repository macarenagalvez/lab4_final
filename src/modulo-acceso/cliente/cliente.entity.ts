import { Base } from 'src/base/entities/base';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

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

  //   @OneToOne((type) => Domicilio, (domicilio) => domicilio.cliente_, {
  //     eager: true,
  //     cascade: ['insert'],
  //   })
  //   domicilio: Domicilio;

  //   @OneToMany((type) => Pedido, (pedido) => pedido.cliente_, { eager: true })
  //   pedidos: Pedido[];
}
