import {
  CACHE_KEY_METADATA,
  CACHE_MANAGER,
  CACHE_TTL_METADATA,
} from '@nestjs/cache-manager';
import { Injectable, Inject, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Cache } from 'cache-manager';

@Injectable()
export class BaseCache {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private reflector: Reflector,
  ) {}

  public async getCache(key: string) {
    return await this.cacheManager.get(key);
  }

  public async setCache(key: string, data: any, ttl: number) {
    return await this.cacheManager.set(key, data, ttl);
  }

  public getKey(context: ExecutionContext) {
    return this.reflector.get<string>(CACHE_KEY_METADATA, context.getHandler());
  }

  public getTtl(context: ExecutionContext) {
    return this.reflector.get<number>(CACHE_TTL_METADATA, context.getHandler());
  }
}
