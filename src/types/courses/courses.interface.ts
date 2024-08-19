// ####### Courses #######

// ####### api версии v2 #######
// export interface ICoursesDto {
//   courses: ICourseDto[];
//   months: string[];
//   cities: string[];
//   categories: string[];
// }

export interface ICoursesDto {
  id: number;
  adSlogan: string;
  title: string;
  slug: string;
  multiRegisterEnable: boolean;
  logo: string;
  price: ICurrency;
  installment: ICurrency;
  installmentMonth: ICurrency;
  tags: ITagsDto[];
  schedule: IScheduleDto[];
}

interface IEducator {
  id: number;
  name: string;
  lastName: null;
}

// ####### Course #######

export interface ICourseDto {
  generalInformation: IGeneralInformation;
  topBlock: ITopBlock;
  configurator: IConfigurator;
  courseContent: ICourseContent[];
  offer: string;
  has_qr: boolean;
}

interface IGeneralInformation {
  id: number;
  buttonColor: string;
  buttonText: string;
  title: string;
  slug: string;
  multiRegisterEnable: boolean;
  multiRegisterMaxStudentsCount: number;
  isPublished: boolean;
  description: string;
  contentButton: string;
  price: ICurrency;
  installmentPlan: ICurrency;
  installmentMonth: ICurrency;
  pictograms: IPictograms[];
  countStudents: number;
  countReviews: number;
}

interface ITopBlock {
  logo: string;
  video: string;
}

interface IConfigurator {
  title: string;
  items: IItems[];
}

interface IPictograms {
  pictureLink: string;
  text: string;
  link: string;
}

interface IItems {
  title: string;
  title_icon: string;
  description: string;
  star_text: string;
  star_icon: string;
}

interface ICourseContent {
  title: string;
  text: string;
}

// ####### Schedule #######

export interface IScheduleDto {
  id: number;
  address: string;
  city: ICityDto;
  educator: IEducator;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export interface ITagsDto {
  id: number;
  title: string;
}

export interface ICityDto {
  id: number;
  title: string;
}

// ####### Common #######

interface ICurrency {
  rub: number;
  kzt: number;
}
