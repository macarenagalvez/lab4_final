import {
  Res,
  HttpStatus,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { IBaseService } from '../services/iBase.service';
/*
  Controllers are responsible for handling incoming requests and returning responses to the client.
  A controller's purpose is to receive specific requests for the application. 
  The routing mechanism controls which controller receives which requests. 
  Frequently, each controller has more than one route, and different routes can perform different actions.
  In order to create a basic controller, we use classes and decorators. 
  Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).
*/
export class BaseController<T> {
  constructor(private readonly _IBaseService: IBaseService<T>) {}

  @Get('/')
  async getAll(@Res() res): Promise<T[]> {
    try {
      const result: T[] = await this._IBaseService.findAll();
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Error de búsqueda.',
      });
    }
  }

  @Get('/:id')
  async getOne(@Res() res, @Param('id') id: number): Promise<T[]> {
    try {
      const result: T = await this._IBaseService.findOne(id);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Error de búsqueda.',
      });
    }
  }

  @Post('/')
  async post(@Res() res, @Body() entity: T): Promise<T> {
    try {
      const result: T = await this._IBaseService.save(entity);
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error de creación.',
      });
    }
  }

  @Put('/:id')
  async put(
    @Res() res,
    @Param('id') id: number,
    @Body() entity: T,
  ): Promise<T> {
    try {
      const result: T = await this._IBaseService.update(id, entity);
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error de actualización.',
      });
    }
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: number) {
    try {
      await this._IBaseService.delete(id);
      return res.status(HttpStatus.OK).json();
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Error de eliminación.',
      });
    }
  }
}
