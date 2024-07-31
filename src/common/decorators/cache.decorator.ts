import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
  applyDecorators,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseCache } from '../cache';

@Injectable()
export class CustomCacheInterceptor implements NestInterceptor {
  constructor(private readonly baseCache: BaseCache) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const ttl = this.baseCache.getTtl(context);
    const key = this.baseCache.getKey(context);
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();

    const cachedResponse = await this.baseCache.getCache(key);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return next.handle().pipe(
        tap(async (data) => {
          if (
            !response.statusCode.toString().startsWith('4') &&
            !response.statusCode.toString().startsWith('5')
          ) {
            await this.baseCache.setCache(key, data, ttl);
          }
        }),
      );
    }
  }
}

export function UseCache(key: string, ttl: number) {
  return applyDecorators(
    CacheKey(key),
    CacheTTL(ttl),
    UseInterceptors(CustomCacheInterceptor),
  );
}
