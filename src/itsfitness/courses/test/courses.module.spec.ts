import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import {
  MockCityDto,
  MockCourseDto,
  MockCoursesDto,
  MockScheduleDto,
  MockTagsDto,
} from 'src/itsfitness/courses/test/coureses.mockDto';
import { CoursesController } from '../courses.controller';
import { CoursesService } from '../courses.service';
import {
  mockCities,
  mockCourse,
  mockCourses,
  mockSchedule,
  mockTags,
} from './courses.mockResponse';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { mockedResponse } from 'src/common/test';

async function checkValidationByDto(
  result: any[] | any,
  mockDto: ClassConstructor<object>,
) {
  if (Array.isArray(result)) {
    for (const course in result) {
      const dto = plainToClass(mockDto, result[course]);
      const errors = await validate(dto);
      if (errors.length) console.log(errors);
      expect(errors.length).toBe(0);
    }
  }
  if (typeof result === 'object') {
    const dto = plainToClass(mockDto, result);
    const errors = await validate(dto);
    if (errors.length) console.log(errors);
    expect(errors.length).toBe(0);
  }
}

describe('CoursrsModule', () => {
  let app: INestApplication;

  let coursesController: CoursesController;
  let coursesService: CoursesService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [CoursesController],
      providers: [CoursesService],
    }).compile();

    coursesController = moduleRef.get<CoursesController>(CoursesController);
    coursesService = moduleRef.get<CoursesService>(CoursesService);

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('/courses (GET)', async () => {
    jest
      .spyOn(coursesService, 'getCourses')
      .mockReturnValue(Promise.resolve(mockedResponse(mockCourses)));

    const result = await coursesController.getCourses();

    await checkValidationByDto(result.data, MockCoursesDto);
  });

  it('/courses/cities (GET)', async () => {
    jest
      .spyOn(coursesService, 'getCities')
      .mockReturnValue(Promise.resolve(mockedResponse(mockCities)));

    const result = await coursesController.getTags();

    await checkValidationByDto(result.data, MockCityDto);
  });

  it('/courses/tags (GET)', async () => {
    jest
      .spyOn(coursesService, 'getTags')
      .mockReturnValue(Promise.resolve(mockedResponse(mockTags)));

    const result = await coursesController.getTags();

    await checkValidationByDto(result.data, MockTagsDto);
  });

  it('/courses/:course (GET)', async () => {
    jest
      .spyOn(coursesService, 'getCourse')
      .mockReturnValue(Promise.resolve(mockedResponse(mockCourse)));
    const result = await coursesController.getCourse('');

    await checkValidationByDto(result.data, MockCourseDto);
  });

  it('/courses/:course/schedule (GET)', async () => {
    jest
      .spyOn(coursesService, 'getCourse')
      .mockReturnValue(Promise.resolve(mockedResponse(mockSchedule)));
    const result = await coursesController.getCourse('');

    await checkValidationByDto(result.data, MockScheduleDto);
  });
});
