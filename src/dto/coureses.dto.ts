export class Courses {
  courses: Course[];
  months: string[];
  cities: string[];
  categories: string[];
}

export class Course {
  id: number;
  adSlogan: string;
  title: string;
  slug: string;
  multiRegisterEnable: boolean;
  logo: string;
  price: Currency;
  installment: Currency;
  installmentMonth: Currency;
  tags: Tags[];
  schedule: Schedule[];
}

export class Schedule {
  id: number;
  address: string;
  city: City;
  educator: Educator;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export class Tags {
  id: number;
  title: string;
}

export class Currency {
  rub: number;
  kzt: number;
}

export class City {
  id: number;
  title: string;
}

export class Educator {
  id: number;
  name: string;
  lastName: null;
}
