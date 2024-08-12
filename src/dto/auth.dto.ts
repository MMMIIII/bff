import { ApiProperty } from '@nestjs/swagger';
import { isDestination } from 'src/common/decorators/validation/isDestination';
import { IsEmail } from 'src/common/decorators/validation/isEmail';
import { IsLengthRange } from 'src/common/decorators/validation/isLengthRange';
import { IsNotEmpty } from 'src/common/decorators/validation/isNotEmpty';
import { IsNumber } from 'src/common/decorators/validation/isNumber';
import { IsLengthRangeErrorMessage } from 'src/types/validation/isLengthRange.type';

export class AuthCodeDto {
  @ApiProperty()
  @IsNotEmpty({ groups: ['destination'] })
  @isDestination({ groups: ['destination'] })
  readonly destination: string;
}

export class AuthCreateTokenDto {
  @ApiProperty()
  @IsNotEmpty({ groups: ['destination'] })
  @IsEmail({ groups: ['destination'] })
  readonly destination: string;

  @ApiProperty()
  @IsNotEmpty({ groups: ['code'] })
  @IsNumber({ groups: ['code'] })
  @IsLengthRange({ groups: ['code'] }, IsLengthRangeErrorMessage.fromAndTo, {
    fromAndTo: 4,
  })
  readonly code: number;
}
