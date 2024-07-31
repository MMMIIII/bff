import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    ConfigModule,
    CacheModule.register({
      imports: [ConfigModule],
      inject: [ConfigService],

      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: 600,
    }),
  ],
  exports: [CacheModule],
})
export class CacheConfigModule {}
