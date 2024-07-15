import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.UNAUTHORIZED,
        error: 'Требуется авторизация',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
