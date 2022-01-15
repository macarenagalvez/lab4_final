import { Base } from 'src/base/entities/base';
import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ArticuloInsumo } from '../articulo-insumo/articulo-insumo.entity';
import { ArticuloManufacturado } from '../articulo-manufacturado/articulo-manufacturado.entity';

@Entity('ArticuloManufacturadoDetalle')
export class ArticuloManufacturadoDetalle extends Base {
  @Column({ type: 'double' })
  cantidad: number;

  @Column({ type: 'varchar', length: 10 })
  unidad_medida: string;

  @ManyToOne(
    (type) => ArticuloInsumo,
    (insumo) => insumo.detalles_manufacturado,
  )
  @JoinColumn({ name: 'insumo_id' })
  insumo: ArticuloInsumo;

  @ManyToOne(
    (type) => ArticuloManufacturado,
    (semielaborado) => semielaborado.detalles_manufacturado,
  )
  @JoinColumn({ name: 'manufacturado_id' })
  manufacturado: ArticuloManufacturado;
}
