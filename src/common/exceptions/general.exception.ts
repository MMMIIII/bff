import { HttpException } from '@nestjs/common';

export class GeneralException extends HttpException {
  constructor(response: string | Record<string, any>, status: number) {
    super(response, status);
  }
}
