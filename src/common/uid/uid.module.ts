import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UidService } from './uid.service';
import { UidMiddleware } from './middleware/uid.middleware';

@Module({
  providers: [UidService],
  exports: [UidService],
})
export class UidModule implements NestModule {
  static forRoot(): DynamicModule {
    return {
      module: UidModule,
      providers: [],
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UidMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
