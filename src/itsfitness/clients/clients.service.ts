import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { HandleHttpError } from 'src/common/errorHandler';
import { requestConfigWithToken } from 'src/configuration/requestConfiguration';

@Injectable()
export class ClientsService {
  private readonly handleHttpError = new HandleHttpError();
  constructor(private readonly httpServise: HttpService) {}

  getProfile(token: string) {
    return this.httpServise
      .get(
        `${process.env.URL_ITSFITNESS}/v1/clients`,
        requestConfigWithToken(token),
      )
      .pipe(
        map((response) => response.data),
        catchError(
          async (error) => await this.handleHttpError.handleHttpError(error),
        ),
      );
  }
}
