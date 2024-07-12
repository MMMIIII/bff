import { HttpException, HttpStatus, Inject, Logger } from '@nestjs/common';

export class HandleHttpError {
  constructor(@Inject() private readonly logger?: Logger) {}

  public async handleHttpError(error: any, message?: '', ...meta) {
    this.logger.error(message, { meta });
    const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
    const message1 = error.response?.data || { error: 'Технические неполадки' };
    throw new HttpException(message1, status);
  }
}

// export async function handleHttpError(error: any, message1?: '', ...meta) {
//   const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
//   const message = error.response?.data || { error: 'Технические неполадки' };
//   throw new HttpException(message, status);
// }
