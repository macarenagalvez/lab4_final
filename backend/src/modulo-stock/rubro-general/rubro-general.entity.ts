import { Base } from 'src/base/entities/base';
import { Entity, Column, OneToMany, DeleteDateColumn } from 'typeorm';
import { ArticuloManufacturado } from '../articulo-manufacturado/articulo-manufacturado.entity';

@Entity('RubroGeneral')
export class RubroGeneral extends Base {
  @Column({ length: 50, type: 'varchar' })
  denominacion: string;

  @OneToMany(
    (type) => ArticuloManufacturado,
    (manufacturados) => manufacturados.rubro,
  )
  manufacturados: ArticuloManufacturado[];

  // con esto puedo hacer una baja logico y no fisica
  @DeleteDateColumn()
  deletedAt: Date;
}
