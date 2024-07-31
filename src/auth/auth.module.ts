import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { LoggingModule } from 'src/common/logging.module';
import { CacheConfigModule } from 'src/common/cache.module';
import { BaseCache } from 'src/common/cache';
import { ThrottlerGuard } from '@nestjs/throttler';
@Module({
  imports: [HttpModule, LoggingModule, CacheConfigModule],
  controllers: [AuthController],
  providers: [AuthService, BaseCache, ThrottlerGuard],
})
export class AuthModule {}
