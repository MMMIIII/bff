import { IsString } from 'class-validator';

export class AuthCodeDto {
  @IsString()
  readonly destination: string;
}

export class AuthCreateTokenDto {
  @IsString()
  readonly destination: string;

  @IsString()
  readonly code: string;
}
