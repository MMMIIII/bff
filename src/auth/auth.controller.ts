import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCodeDto, AuthCreateTokenDto } from 'src/dto/auth.dto';
import { Observable } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('code')
  getCode(@Body() authCodeDto: AuthCodeDto): Observable<string> {
    const { destination } = authCodeDto;
    return this.authService.getCode(destination)
  }

  @Post('token')
  createToken(@Body() authCreateTokenDto: AuthCreateTokenDto) {
    const { destination, code } = authCreateTokenDto;
    return this.authService.createToken(destination, code);
  }
}
