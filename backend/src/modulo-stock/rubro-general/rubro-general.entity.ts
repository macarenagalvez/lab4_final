import { Base } from 'src/base/entities/base';
import { Entity, Column, OneToMany } from 'typeorm';
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
}
