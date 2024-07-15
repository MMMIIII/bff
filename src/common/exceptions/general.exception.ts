import { HttpException } from '@nestjs/common';

export class GeneralException extends HttpException {
  constructor(private readonly error: any) {
    super(
      {
        error: error.message,
        status: error,
      },
      error.status,
    );
  }
}
