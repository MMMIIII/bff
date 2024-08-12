import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Observable, catchError, map } from 'rxjs';
import { requestConfig } from 'src/configuration/requestConfiguration';
import { GeneralException } from 'src/common/exceptions/general.exception';
import { City, Courses } from 'src/dto/coureses.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly httpServise: HttpService) {}

  getCourses(): Observable<Courses[]> {
    return this.httpServise
      .get(`${process.env.URL_ITSFITNESS}/v1/courses`, requestConfig)
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new GeneralException(
            error.response.data.data.errors,
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }),
      );
  }

  getCities(): Observable<City[]> {
    return this.httpServise
      .get(`${process.env.URL_ITSFITNESS}/v1/courses/cities`, requestConfig)
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new GeneralException(
            error.response.data.data.errors,
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }),
      );
  }

  getTags(): Observable<any[]> {
    return this.httpServise
      .get(`${process.env.URL_ITSFITNESS}/v1/courses/tags`, requestConfig)
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new GeneralException(
            error.response.data.data.errors,
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }),
      );
  }
}
