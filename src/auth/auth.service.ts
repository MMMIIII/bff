import { HttpService } from '@nestjs/axios';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { requestConfig } from '../configuration/requestConfiguration';
import { IResponseDto } from 'src/types/common.interface';
import {
  IResAuthCodeDto,
  IResAuthTokenDto,
} from 'src/types/auth/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly httpServise: HttpService) {}

  async getCode(
    destination: string,
  ): Promise<IResponseDto<IResAuthCodeDto>['data']> {
    try {
      const response: IResponseDto<IResAuthCodeDto> = await firstValueFrom(
        this.httpServise
          .post(
            `${process.env.URL_ITSFITNESS}/v1/auth/code`,
            { destination },
            requestConfig,
          )
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );
      return response.data;
    } catch (error) {
      throw new UnprocessableEntityException(error.response.data.data.errors);
    }
  }

  async createToken(
    destination: string,
    code: number,
  ): Promise<IResponseDto<IResAuthTokenDto>['data']> {
    try {
      const response: IResponseDto<IResAuthTokenDto> = await firstValueFrom(
        this.httpServise.post(
          `${process.env.URL_ITSFITNESS}/v1/auth/token`,
          { destination, code },
          requestConfig,
        ),
      );
      return response.data;
    } catch (error) {
      throw new UnprocessableEntityException(error.response.data.data.errors);
    }
  }
}
