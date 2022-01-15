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

  async findAll(): Promise<T[]> {
    try {
      return await (<Promise<T[]>>this.genericRepository.find());
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async findOne(id: number): Promise<T> {
    try {
      return await (<Promise<T>>this.genericRepository.findOne(id));
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async update(id: number, entity: T): Promise<T> {
    try {
      const responseAux: Record<string, any> =
        await this.genericRepository.findOne(id);

      if (responseAux == null) {
        throw new NotFoundException('El id no existe');
      }

      entity['id'] = Number(id);
      const mergeEntity: any = Object.assign(responseAux, entity);
      const response: T = await this.genericRepository.save(mergeEntity);

      return response;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async save(entity: T): Promise<T> {
    try {
      const response: T = await this.genericRepository.save(entity);
      return response;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async delete(id: number) {
    try {
      this.genericRepository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
