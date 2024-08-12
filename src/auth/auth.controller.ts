import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCodeDto, AuthCreateTokenDto } from 'src/dto/auth.dto';
import { Observable } from 'rxjs';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { RequestUid } from 'src/common/uid/decorators/request-uid.decorator';
import { ApiTags } from '@nestjs/swagger';
import { code, token } from 'src/swagger/auth.docs';
import { Swagger } from 'src/swagger/common.docs';
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
    @Body() authCodeDto: AuthCodeDto,
    @RequestUid() uid: string,
  ): Observable<string> {
    const { destination } = authCodeDto;

    this.logger.info('Отправка кода на почту', { destination, uid });
    return this.authService.getCode(destination);
  }

  @Post('token')
  @Swagger(token)
  createToken(@Body() authCreateTokenDto: AuthCreateTokenDto) {
    const { destination, code } = authCreateTokenDto;
    return this.authService.createToken(destination, code);
  }
}
