import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { ROUTES } from 'src/configuration/routes';

@Controller(`${ROUTES.itsfitness}/courses`)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getCourses() {
    return this.coursesService.getCourses();
  }
}
