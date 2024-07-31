import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration/configuration';
import { ItsfitnessModule } from './itsfitness/itsfitness.module';
import { AuthModule } from './auth/auth.module';
import { UidModule } from 'src/common/uid/uid.module';
import { CacheConfigModule } from './common/cache.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerBehindProxyGuard } from './common/guards/throttler.guard';
// import { HttpExceptionFilter } from './common/exceptions/exceptions';
// import { CustomValidationPipe } from './common/pipes/validation.pipe';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ItsfitnessModule,
    AuthModule,
    UidModule.forRoot(),
    CacheConfigModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 30,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerBehindProxyGuard,
    },
  ],
})
export class AppModule {}
