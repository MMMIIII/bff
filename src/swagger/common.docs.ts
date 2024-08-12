import { applyDecorators } from '@nestjs/common';

export function Swagger(decorator: () => any) {
  return applyDecorators(decorator());
}
