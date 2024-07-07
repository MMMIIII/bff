import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { handleHttpError } from 'src/common/utils/errorHandler';
import { requestConfigWithToken } from 'src/configuration/requestConfiguration';

@Injectable()
export class ClientsService {
  constructor(private readonly httpServise: HttpService) {}

  getProfile(token: string) {

    return this.httpServise
    .get(`${process.env.URL_ITSFITNESS}/v1/clients`, requestConfigWithToken(token))
    .pipe(
      map(response => response.data),
      catchError(async (error) => await handleHttpError(error))
    )
  }
}
