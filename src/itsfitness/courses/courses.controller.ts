import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { ApiTags } from '@nestjs/swagger';
import { IResponseDto } from 'src/types/common.interface';
import { ICourseDto } from 'src/types/courses/courses.interface';

@ApiTags('courses')
@Controller(`courses`)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getCourses() {
    return this.coursesService.getCourses();
  }

  @Get('cities')
  getCities() {
    return this.coursesService.getCities();
  }

  @Get('tags')
  getTags() {
    return this.coursesService.getTags();
  }

  @Get(':course')
  getCourse(
    @Param('course') course: string,
  ): Promise<IResponseDto<ICourseDto>['data']> {
    return this.coursesService.getCourse(course);
  }

  @Get('/:course/schedule')
  getScheduleByCourse(@Param('course') course: string) {
    return this.coursesService.getScheduleByCourse(course);
  }
}
