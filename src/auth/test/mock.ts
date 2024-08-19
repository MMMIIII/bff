import { faker } from '@faker-js/faker';
import { ReqAuthCodeDto, ReqAuthCreateTokenDto } from 'src/dto/auth.dto';

export const token: ReqAuthCreateTokenDto = {
  destination: faker.internet.email(),
  code: faker.number.int({ min: 4, max: 4 }),
};

export const code: ReqAuthCodeDto = {
  destination: faker.internet.email(),
};
