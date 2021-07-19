import { PrimaryGeneratedColumn } from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn({ name: 'id' })
  private id: number;

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }
}
