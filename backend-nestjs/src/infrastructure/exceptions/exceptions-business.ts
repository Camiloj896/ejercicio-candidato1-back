import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
    Logger,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  import { BusinessError } from './../../domain/exceptions/business-error';
  import { Message } from './message';
  
  @Catch(BusinessError)
  export class FilterExeptionBussines implements ExceptionFilter {
    constructor(private logger: Logger) { }
  
    catch(exception: BusinessError, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      const message: Message = {
        statusCode: HttpStatus.BAD_REQUEST,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message
      };
  
      this.logger.log(message);
  
      response.status(HttpStatus.BAD_REQUEST).json(message);
    }
  }
  