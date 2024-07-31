import { ThrottlerException, ThrottlerGuard } from '@nestjs/throttler';
import { Injectable } from '@nestjs/common';
import { ThrottlerRequest } from '@nestjs/throttler/dist/throttler.guard.interface';

@Injectable()
export class ThrottlerBehindProxyGuard extends ThrottlerGuard {
  public async handleRequest(requestProps: ThrottlerRequest): Promise<boolean> {
    const ip = requestProps.context.switchToHttp().getRequest().ip;
    const key = requestProps.generateKey(
      requestProps.context,
      ip,
      requestProps.throttler.name,
    );
    const { totalHits } = await this.storageService.increment(
      key,
      requestProps.ttl,
      requestProps.limit,
      requestProps.blockDuration,
      requestProps.throttler.name,
    );

    if (totalHits > requestProps.limit) {
      throw new ThrottlerException();
    }
    return true;
  }
}
