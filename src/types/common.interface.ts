import { HttpStatus } from '@nestjs/common';
import { AxiosResponse } from 'axios';

export interface IResponse<T> {
  data: T;
  status: HttpStatus.OK;
}

export interface IErrorResponse<T> {
  data: {
    errors: T;
  };
  status: HttpStatus.INTERNAL_SERVER_ERROR | HttpStatus.UNPROCESSABLE_ENTITY;
}

export interface IResponseDto<T> extends AxiosResponse {
  data: IResponse<T>;
}
