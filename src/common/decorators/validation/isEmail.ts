import { registerDecorator, ValidationOptions } from 'class-validator';
import isEmailValidator from 'validator/lib/isEmail';
import * as ValidatorJS from 'validator';
const rex = /@[a-z0-9.-]+\.[a-z]{2,}$/;

export function IsEmail(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isEmail',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return isEmail(value);
        },
        defaultMessage() {
          return 'Неправильный формат почты';
        },
      },
    });
  };
}

export function isEmail(
  value: unknown,
  options?: ValidatorJS.IsEmailOptions,
): boolean {
  return (
    typeof value === 'string' &&
    isEmailValidator(value, options) &&
    rex.test(value)
  );
}
