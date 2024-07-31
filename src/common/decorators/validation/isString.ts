import {
  isString,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function IsString(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isString',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return isString(value);
        },
        defaultMessage() {
          return 'Поле должно быть строкой';
        },
      },
    });
  };
}
