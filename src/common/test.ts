import { AxiosResponse } from 'axios';

// Мокаем ответ от внешнего сервиса
export function mockedResponse(mock: any): AxiosResponse<any> {
  return {
    data: mock,
    status: 200,
    statusText: 'OK',
    config: {
      headers: null,
    },
    headers: {},
  };
}
