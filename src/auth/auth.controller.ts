import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ReqAuthCodeDto, ReqAuthCreateTokenDto } from 'src/dto/auth.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { RequestUid } from 'src/common/uid/decorators/request-uid.decorator';
import { ApiTags } from '@nestjs/swagger';
import { code, token } from 'src/swagger/auth.docs';
import { Swagger } from 'src/swagger/common.docs';
import { IResAuthCodeDto } from 'src/types/auth/auth.interface';
import { IResponseDto } from 'src/types/common.interface';
// import { Auth } from 'src/common/decorators/auth.decorator';
// import { UseCache } from 'src/common/decorators/cache.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Post('code')
  @Swagger(code)
  getCode(
    @Body() authCodeDto: ReqAuthCodeDto,
    @RequestUid() uid: string,
  ): Promise<IResponseDto<IResAuthCodeDto>['data']> {
    const { destination } = authCodeDto;

    if (process.env.NODE_ENV !== 'auto-test') {
      this.logger.info('Отправка кода на почту', { destination, uid });
    }
    return this.authService.getCode(destination);
  }

  @Post('token')
  @Swagger(token)
  createToken(@Body() authCreateTokenDto: ReqAuthCreateTokenDto) {
    const { destination, code } = authCreateTokenDto;
    return this.authService.createToken(destination, code);
  }
}
