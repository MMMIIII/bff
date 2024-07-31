import { HttpException, HttpStatus } from '@nestjs/common';

export class InternalServerError extends HttpException {
  constructor() {
    super('Ошибка на стороне сервера', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
