import { Injectable, NestMiddleware, RequestMethod } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RouteInfo } from '@nestjs/common/interfaces';
import { request } from 'http';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Gets the request log
    console.log(
      `Method: ${req.method}, RequestUrl: ${
        req.originalUrl
      }, Body: ${JSON.stringify(req.body)}`
    ); // Ends middleware function execution, hence allowing to move on
    if (next) {
      next();
    }
  }
}
