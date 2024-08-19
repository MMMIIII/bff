import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ReqAuthCodeDto, ReqAuthCreateTokenDto } from 'src/dto/auth.dto';

export function code() {
  return applyDecorators(
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Код сгенерирован и отправлен на почту / смс',
      type: ReqAuthCodeDto,
      example: {
        status: HttpStatus.OK,
        data: {
          message: 'Код авторизации был успешно отправлен',
        },
      },
    }),
    ApiResponse({
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      description:
        'Строка, которую ввели, является пустой или не является ни номером телефона',
      type: ReqAuthCodeDto,
      example: {
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        data: {
          errors: {
            destination: [
              'Введенная строка не является e-mail или номером телефона.',
              'Поле не может быть пустым',
            ],
          },
        },
      },
    }),
  );
}

export function token() {
  return applyDecorators(
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Код подошёл, сгенерирован OAuth2 Bearer токен',
      type: ReqAuthCreateTokenDto,
      example: {
        status: HttpStatus.OK,
        data: {
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiNGEyNzJmOWFmNDljYjYwMDQ2NzFmNDdhYWVhOTFkMWQ1ZDk4MzIzMmVlZTAyMmU2Mzg0ZmY1NWIxMzIzMDE0MTMzNWQ5NmI2YzEwZmZjNWEiLCJpYXQiOjE3MjMxMDc2MTIuNjc0ODU3LCJuYmYiOjE3MjMxMDc2MTIuNjc0ODYsImV4cCI6MTc1NDY0MzYxMi42NzE4MzQsInN1YiI6IjQ3NiIsInNjb3BlcyI6W119.VotacP44RZoEU4-nALa3HSnzX--52mJs7zyhtyX-be77Dq9o_Xg4mDBZYYh0Tg5Q0eqpwp8avosuxEtYulVncnBqOd0Ofu_5ObeYAUb6A4WuyigkPqkMczH48FVgEuJYgCANzvTwygPHR5xSRjeR16qX41j6OaWI44QA9amzJObjOo7AXzT_YBSc8hCzDCqwAlKXRGESDzNcyCOSgjRNRBwpdBJQC3_AlQnvGcxUrpAKQf4ej9cn93P2doChtQPiDeFmzMw81CiCaWmTrqGoSYTBys56GwYzsZb9T41olfJ0S2FZT7UB0TGFlUVjFyvWD1raTUlNMY3pWdQ4vvhe5nBM0aEc6mEbDcLw0qdNWG8LMSkf0iz376YR7hUc0dmxKT7JrW5nAas9twNWkFE9DZizbFnReieSuvshE0u9u9AE9mIHBvzwSmph7dAwUzwn0cZpsKWNRilDy3b8ng_LVrY_KQXzQy8XtVnIcllSAAT68w4HP_T7f7udILAs-n9kI2Wh9MNLENvFnp_bsmTCKz9ZDK4TpxUDcZzQ_z70RgXaoD2qTfOc4qeqSUeFXpBAtIliyjGt_R95bgVi1Sy9gf3tXWv_zkd0b_WcyRlZlp025IM4qQYWKIbkR5EYGuAnVZv3phpJkMRmrT63-SYvoJCDggnfzRe3Wva5a3530W8',
        },
      },
    }),

    ApiResponse({
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      description:
        'Строка, которую ввели, является пустой или не является ни номером телефона',
      type: ReqAuthCreateTokenDto,
      example: {
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        data: {
          errors: {
            destination: [
              'Неправильный формат почты',
              'Поле не может быть пустым',
            ],
            code: [
              'Длина поля должна быть 4',
              'Поле должно быть числом',
              'Поле не может быть пустым',
            ],
          },
        },
      },
    }),
  );
}
