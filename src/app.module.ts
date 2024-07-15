import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration/configuration';
import { ItsfitnessModule } from './itsfitness/itsfitness.module';
import { AuthModule } from './auth/auth.module';
import { UidModule } from 'src/common/uid/uid.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ItsfitnessModule,
    AuthModule,
    UidModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
