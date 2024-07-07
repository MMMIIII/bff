import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [CoursesModule, ClientsModule],
})
export class ItsfitnessModule {}
