import { AxiosRequestConfig } from "axios";
import * as https from 'https'

export default () => ({
  port: parseInt(process.env.PORT) || 3000,
});
