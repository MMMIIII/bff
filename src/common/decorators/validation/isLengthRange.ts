import {
  max,
  registerDecorator,
  ValidationOptions,
  min,
} from 'class-validator';
import { InternalServerError } from 'src/common/exceptions/internalServerError';
import {
  IsLengthRangeErrorMessage,
  Range,
  Args,
} from 'src/types/validation/isLengthRange.type';

export function IsLengthRange(
  validationOptions: ValidationOptions,
  errorMassage: IsLengthRangeErrorMessage,
  range: Range,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isLengthRange',
      target: object.constructor,
      constraints: [range, errorMassage],
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: Args) {
          const [range, errorMassage] = args.constraints;
          return isLengthRange(value, errorMassage, range);
        },
        defaultMessage(args: Args) {
          const [range, errorMassage] = args.constraints;

          switch (errorMassage) {
            case IsLengthRangeErrorMessage.fromAndTo:
              return `Длина поля должна быть ${range.fromAndTo}`;

            case IsLengthRangeErrorMessage.onlyMin:
              return `Длина поля должна быть минимум ${range.min}`;

            case IsLengthRangeErrorMessage.onlyMax:
              return `Длина поля должна быть максимум ${range.max}`;

            case IsLengthRangeErrorMessage.minAndMax:
              return `Длина поля должна быть от ${range.min} до ${range.max}`;
          }
        },
      },
    });
  };
}

export function isLengthRange(
  value: number,
  errorMassage: IsLengthRangeErrorMessage,
  range: Range,
): boolean {
  const num = String(value).length;

  if (isNaN(num)) {
    throw new InternalServerError();
  }

  switch (errorMassage) {
    case IsLengthRangeErrorMessage.fromAndTo:
      if (!range.fromAndTo) throw new InternalServerError();
      return max(num, range.fromAndTo) && min(num, range.fromAndTo);

    case IsLengthRangeErrorMessage.onlyMin:
      if (!range.min) throw new InternalServerError();
      return min(num, range.min);

    case IsLengthRangeErrorMessage.onlyMax:
      if (!range.max) throw new InternalServerError();
      return max(num, range.max);

    case IsLengthRangeErrorMessage.minAndMax:
      if (!range.max || !range.min) throw new InternalServerError();
      return max(num, range.max) && min(num, range.min);
  }
}
