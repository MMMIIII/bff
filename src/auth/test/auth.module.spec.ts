import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import * as request from 'supertest';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { BaseCache } from 'src/common/cache';
import { LoggingModule } from 'src/common/logging.module';
import { CacheConfigModule } from 'src/common/cache.module';
import { isEmail } from 'class-validator';
import { isLengthRange } from 'src/common/decorators/validation/isLengthRange';
import { IsLengthRangeErrorMessage } from 'src/types/validation/isLengthRange.type';
import { code, token } from './mock';

describe('AuthController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, LoggingModule, CacheConfigModule],
      controllers: [AuthController],
      providers: [AuthService, BaseCache],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/auth/code (POST)', async () => {
    expect(isEmail(code.destination)).toBe(true);
    const response = await request(app.getHttpServer())
      .post('/auth/code')
      .send(code.destination);
    expect(response.body.status).toBe(200);
    expect(typeof response.body.data.message).toBe('string');
  });

  it('/auth/token (POST)', async () => {
    expect(isEmail(token.destination)).toBe(true);
    expect(
      isLengthRange(token.code, IsLengthRangeErrorMessage.fromAndTo, {
        fromAndTo: 4,
      }),
    ).toBe(true);
    const response = await request(app.getHttpServer())
      .post('/auth/token')
      .send(token);
    expect(response.body.status).toBe(200);
    expect(typeof response.body.data.message).toBe('string');
  });
});
