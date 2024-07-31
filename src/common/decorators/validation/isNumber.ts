import {
  isNumber,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function IsNumber(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return isNumber(value);
        },
        defaultMessage() {
          return 'Поле должно быть числом';
        },
      },
    });
  };
}
