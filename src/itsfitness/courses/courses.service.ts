import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { Observable, map } from 'rxjs';
import * as https from 'https';

@Injectable()
export class CoursesService {
  constructor(private readonly httpServise: HttpService) {}

  getCourses(): Observable<any> {
    const config: AxiosRequestConfig = {
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    };
    
    return this.httpServise
      .get('https://test-fitlar.flagsoft.ru/api/v1/courses', config)
      .pipe(map((response) => response.data));
  }
}
