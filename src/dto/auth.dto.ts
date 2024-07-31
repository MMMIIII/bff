import { IsEmail } from 'src/common/decorators/validation/isEmail';
import { IsLengthRange } from 'src/common/decorators/validation/isLengthRange';
import { IsNotEmpty } from 'src/common/decorators/validation/isNotEmpty';
import { IsNumber } from 'src/common/decorators/validation/isNumber';
import { IsString } from 'src/common/decorators/validation/isString';
import { IsLengthRangeErrorMessage } from 'src/types/validation/isLengthRange.type';

export class AuthCodeDto {
  @IsString()
  readonly destination: string;
}

export class AuthCreateTokenDto {
  @IsNotEmpty({ groups: ['destination'] })
  @IsEmail({ groups: ['destination'] })
  readonly destination: string;

  @IsNotEmpty({ groups: ['code'] })
  @IsNumber({ groups: ['code'] })
  @IsLengthRange({ groups: ['code'] }, IsLengthRangeErrorMessage.fromAndTo, {
    fromAndTo: 4,
  })
  readonly code: number;
}
