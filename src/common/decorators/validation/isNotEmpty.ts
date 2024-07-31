import {
  isNotEmpty,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function IsNotEmpty(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isNotEmpty',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return isNotEmpty(value);
        },
        defaultMessage() {
          return 'Поле не может быть пустым';
        },
      },
    });
  };
}
