import { faker } from '@faker-js/faker';
import { AuthCodeDto, AuthCreateTokenDto } from 'src/dto/auth.dto';

export const token: AuthCreateTokenDto = {
  destination: faker.internet.email(),
  code: faker.number.int({ min: 4, max: 4 }),
};

export const code: AuthCodeDto = {
  destination: faker.internet.email(),
};
