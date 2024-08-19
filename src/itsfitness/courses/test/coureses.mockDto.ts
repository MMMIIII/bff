import { IsNumber } from 'src/common/decorators/validation/isNumber';
import { IsString } from 'src/common/decorators/validation/isString';

// ####### Courses DTO #######

// ####### api версии v2 #######
// export class MockCoursesDto {
//   courses: MockCourseDto[];
//   months: string[];
//   cities: string[];
//   categories: string[];
// }
export class MockCoursesDto {
  @IsNumber()
  id: number;

  @IsString()
  adSlogan: string;

  @IsString()
  title: string;

  @IsString()
  slug: string;

  multiRegisterEnable: boolean;

  @IsString()
  logo: string;

  price: MockCurrency;
  installment: MockCurrency;
  installmentMonth: MockCurrency;
  tags: MockTagsDto[];
  schedule: MockScheduleDto[];
}

export class MockTagsDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;
}

// ####### Courese DTO #######

export class MockCourseDto {
  generalInformation: MockGeneralInformation;
  topBlock: MockTopBlock;
  configurator: MockConfigurator;
  courseContent: MockCourseContent[];

  @IsString()
  offer: string;
  has_qr: boolean;
}

class MockGeneralInformation {
  @IsNumber()
  id: number;

  @IsString()
  buttonColor: string;

  @IsString()
  buttonText: string;

  @IsString()
  title: string;

  @IsString()
  slug: string;

  multiRegisterEnable: boolean;

  @IsNumber()
  multiRegisterMaxStudentsCount: number;

  isPublished: boolean;

  @IsString()
  description: string;

  @IsString()
  contentButton: string;

  price: MockCurrency;
  installmentPlan: MockCurrency;
  installmentMonth: MockCurrency;
  pictograms: MockPictograms[];

  @IsNumber()
  countStudents: number;

  @IsNumber()
  countReviews: number;
}

class MockTopBlock {
  @IsString()
  logo: string;

  @IsString()
  video: string;
}

class MockConfigurator {
  @IsString()
  title: string;

  items: MockItems[];
}

class MockPictograms {
  @IsString()
  pictureLink: string;

  @IsString()
  text: string;

  @IsString()
  link: string;
}

class MockItems {
  @IsString()
  title: string;

  @IsString()
  title_icon: string;

  @IsString()
  description: string;

  @IsString()
  star_text: string;

  @IsString()
  star_icon: string;
}

class MockCourseContent {
  @IsString()
  title: string;

  @IsString()
  text: string;
}

// ####### Schedule DTO #######

export class MockScheduleDto {
  @IsNumber()
  id: number;

  @IsString()
  address: string;

  city: MockCityDto;
  educator: MockEducator;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;
}

export class MockCityDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;
}

class MockEducator {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  lastName: null;
}

// ####### Common #######

class MockCurrency {
  @IsNumber()
  rub: number;

  @IsNumber()
  kzt: number;
}
