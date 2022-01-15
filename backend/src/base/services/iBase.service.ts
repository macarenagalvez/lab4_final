export interface IBaseService<T> {
  findAll(): Promise<T[]>;

  findOne(id: number): Promise<T>;

  update(id: number, t: T): Promise<T>;

  save(t: T): Promise<T>;

  delete(id: number): Promise<void>;
}
