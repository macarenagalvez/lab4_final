import { IBaseService } from './iBase.service';
import { Repository } from 'typeorm';
export declare class BaseService<T> implements IBaseService<T> {
    private readonly genericRepository;
    constructor(genericRepository: Repository<T>);
    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T>;
    update(id: number, entity: T): Promise<T>;
    save(entity: T): Promise<T>;
    delete(id: number): Promise<void>;
}
