import { IBaseService } from '../services/iBase.service';
export declare class BaseController<T> {
    private readonly _IBaseService;
    constructor(_IBaseService: IBaseService<T>);
    getAll(res: any): Promise<T[]>;
    getOne(res: any, id: number): Promise<T[]>;
    post(res: any, entity: T): Promise<T>;
    put(res: any, id: number, entity: T): Promise<T>;
    delete(res: any, id: number): Promise<any>;
}
