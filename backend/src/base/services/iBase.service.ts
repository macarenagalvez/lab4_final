export interface IBaseService<T> {
  getAll(): Promise<T[]>;

  getOneById(id: number): Promise<T>;

  update(id: number, t: T): Promise<T>;

  saveOne(t: T): Promise<T>;

  delete(id: number): any;
}
