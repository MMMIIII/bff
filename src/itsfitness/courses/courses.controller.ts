import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { ApiTags } from '@nestjs/swagger';

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
  getCourse() {
    return '';
  }

  @Get(':course/schedule')
  getScheduleByCourse() {
    return '';
  }
}
