import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
// import { GeneralException } from 'src/common/exceptions/general.exception';

@Injectable()
export class ClientsService {
  constructor(private readonly httpServise: HttpService) {}

  getProfile() {
    return this.httpServise
      .get(`${process.env.URL_ITSFITNESS}/v1/clients`)
      .pipe(map((response) => response.data));
  }
}
