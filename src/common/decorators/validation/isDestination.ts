import { isEmail, registerDecorator, ValidationOptions } from 'class-validator';

const rex = /@[a-z0-9.-]+\.[a-z]{2,}$/;

export function isDestination(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isDestination',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return (isEmail(value) && rex.test(value)) || value.length === 11;
        },
        defaultMessage() {
          return 'Введенная строка не является e-mail или номером телефона.';
        },
      },
    });
  };
}
