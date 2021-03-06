import { Base } from 'src/base/entities/base';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';

@Entity('Domicilio')
export class Domicilio extends Base {
  @Column()
  calle: string;
  @Column()
  numero: number;
  @Column()
  localidad: string;

  @OneToOne((type) => Cliente, (cliente) => cliente.domicilio)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  @DeleteDateColumn()
  deletedAt: Date;
}
