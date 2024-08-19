import { HttpService } from '@nestjs/axios';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { requestConfig } from 'src/configuration/requestConfiguration';
import {
  ICityDto,
  ICourseDto,
  ICoursesDto,
  IScheduleDto,
  ITagsDto,
} from 'src/types/courses/courses.interface';
import { IResponseDto } from 'src/types/common.interface';

@Injectable()
export class CoursesService {
  constructor(private readonly httpServise: HttpService) {}
  async getCourses(): Promise<IResponseDto<ICoursesDto[]>['data']> {
    try {
      const response: IResponseDto<ICoursesDto[]> = await firstValueFrom(
        this.httpServise.get(
          `${process.env.URL_ITSFITNESS}/v1/courses`,
          requestConfig,
        ),
      );
      return response.data;
    } catch (error) {
      throw new UnprocessableEntityException(error.response.data.data.errors);
    }
  }

  async getCities(): Promise<IResponseDto<ICityDto>['data']> {
    try {
      const response: IResponseDto<ICityDto> = await firstValueFrom(
        this.httpServise.get(
          `${process.env.URL_ITSFITNESS}/v1/courses/cities`,
          requestConfig,
        ),
      );
      return response.data;
    } catch (error) {
      throw new UnprocessableEntityException(error.response.data.data.errors);
    }
  }

  async getTags(): Promise<IResponseDto<ITagsDto[]>['data']> {
    try {
      const response: IResponseDto<ITagsDto[]> = await firstValueFrom(
        this.httpServise.get(
          `${process.env.URL_ITSFITNESS}/v1/courses/tags`,
          requestConfig,
        ),
      );
      return response.data;
    } catch (error) {
      throw new UnprocessableEntityException(error.response.data.data.errors);
    }
  }

  async getCourse(course: string): Promise<IResponseDto<ICourseDto>['data']> {
    try {
      const response: IResponseDto<ICourseDto> = await firstValueFrom(
        this.httpServise.get(
          `${process.env.URL_ITSFITNESS}/v1/courses/${course}`,
          requestConfig,
        ),
      );
      return response.data;
    } catch (error) {
      throw new UnprocessableEntityException(error.response.data.data.errors);
    }
  }

  async getScheduleByCourse(
    course: string,
  ): Promise<IResponseDto<IScheduleDto[]>['data']> {
    try {
      const response: IResponseDto<IScheduleDto[]> = await firstValueFrom(
        this.httpServise.get(
          `${process.env.URL_ITSFITNESS}/v1/courses/${course}/schedule`,
          requestConfig,
        ),
      );
      return response.data;
    } catch (error) {
      throw new UnprocessableEntityException(error.response.data.data.errors);
    }
  }
}
