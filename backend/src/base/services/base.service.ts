import { IBaseService } from './iBase.service';
import {
  Injectable,
  BadGatewayException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
/*
  The main idea of a provider is that it can be injected as dependency; 
  this means objects can create various relationships with each other,
  Providers are plain JavaScript classes that are declared as providers in a module.
  Responsible for data storage and retrieval
  Injected through the class constructor.
  Dependencies are services or objects that a class needs to perform its function. 
  Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them.
 */
@Injectable() // The @Injectable() decorator attaches metadata
export class BaseService<T> implements IBaseService<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  getAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.find(); // SELECT * from ENTITY
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  getOneById(id: number): Promise<T> {
    try {
      return <Promise<T>>this.genericRepository.findOneOrFail(id); // SELECT
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async saveOne(entity: T): Promise<T> {
    try {
      // creo la entidad nueva
      const newEntity: T = await this.genericRepository.create(entity);
      // la guardo
      return this.genericRepository.save(newEntity); // INSERT
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async update(id: number, entity: T): Promise<T> {
    try {
      await this.getOneById(id);
      entity['id'] = Number(id);
      return await this.saveOne(entity);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async delete(id: number) {
    try {
      const entity = await this.getOneById(id);
      await this.genericRepository.softRemove(entity);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
