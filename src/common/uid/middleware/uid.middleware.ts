import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { UidService } from 'src/common/uid/uid.service';

@Injectable()
export class UidMiddleware implements NestMiddleware {
  constructor(private readonly uidService: UidService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const uid = this.uidService.generateUid();
    req.headers['x-request-uid'] = uid;
    req['uid'] = uid;

    next();
  }
}
