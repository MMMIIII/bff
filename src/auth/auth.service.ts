import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, catchError, map } from 'rxjs';
import { requestConfig } from 'src/configuration/requestConfiguration';
import { GeneralException } from 'src/common/exceptions/general.exception';
@Injectable()
export class AuthService {
  constructor(private readonly httpServise: HttpService) {}

  getCode(destination: string): Observable<string> {
    return this.httpServise
      .post(
        `${process.env.URL_ITSFITNESS}/v1/auth/code`,
        { destination },
        requestConfig,
      )
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new GeneralException(error);
        }),
      );
  }

  createToken(destination: string, code: string): Observable<any> {
    return this.httpServise
      .post(
        `${process.env.URL_ITSFITNESS}/v1/auth/token`,
        { destination, code },
        requestConfig,
      )
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new GeneralException(error);
        }),
      );
  }
}
