import { AxiosRequestConfig } from "axios"
import * as https from 'https'

export const requestConfig: AxiosRequestConfig = {
  httpsAgent: new https.Agent({ rejectUnauthorized: false}),
}

export const requestConfigWithToken = (token: string): AxiosRequestConfig => {
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    ...requestConfig
  }
} 
