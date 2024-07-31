import { isEmail, registerDecorator, ValidationOptions } from 'class-validator';

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
          return isEmail(value) && rex.test(value);
        },
        defaultMessage() {
          return 'Неправильный формат почты';
        },
      },
    });
  };
}
