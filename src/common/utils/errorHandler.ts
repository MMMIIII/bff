import { HttpException, HttpStatus } from "@nestjs/common";

export async function handleHttpError(error: any) {
  const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = error.response?.data || {error: 'Технические неполадки'}
  throw new HttpException(message, status);
}