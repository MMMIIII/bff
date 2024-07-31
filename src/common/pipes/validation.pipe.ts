import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  ValidationPipe,
  ValidationPipeOptions,
  HttpStatus,
} from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { GeneralException } from '../exceptions/general.exception';

@Injectable()
export class CustomValidationPipe
  extends ValidationPipe
  implements PipeTransform
{
  constructor(options?: ValidationPipeOptions) {
    super(options);
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    const object = plainToClass(metadata.metatype, value);

    const errors: ValidationError[] = await validate(object, {
      ...this.validatorOptions,
    });

    if (errors.length > 0) {
      const formattedErrors = this.formatErrors(errors);

      throw new GeneralException(
        { ...formattedErrors },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return value;
  }

  private formatErrors(errors: ValidationError[]): { [key: string]: string[] } {
    const formattedErrors: { [key: string]: string[] } = {};
    errors.forEach((error) => {
      if (error.constraints) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [valid, valide] of Object.entries(error.constraints)) {
          if (!formattedErrors[error.property]) {
            formattedErrors[error.property] = [];
          }
          formattedErrors[error.property].push(valide);
        }
      }
    });

    return formattedErrors;
  }
}
