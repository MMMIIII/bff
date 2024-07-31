import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UnauthorizedException } from '../exceptions/unautorized.exception';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const token: string = request.headers.authorization;

    if (!token || !token.includes('Bearer')) throw new UnauthorizedException();

    return true;
  }
}
