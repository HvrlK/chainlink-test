import { AxiosRequestConfig } from 'axios';
import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class OwnHttpService {
  constructor(private httpService: HttpService) {
  }

  async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return await this.httpService
      .request(config)
      .pipe(map((response) => response.data))
      .toPromise();
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return await this.httpService
      .get(url, config)
      .pipe(map((response) => response.data))
      .toPromise();
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return await this.httpService
      .delete(url, config)
      .pipe(map((response) => response.data))
      .toPromise();
  }

  async head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return await this.httpService
      .head(url, config)
      .pipe(map((response) => response.data))
      .toPromise();
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return await this.httpService
      .post(url, data, config)
      .pipe(map((response) => response.data))
      .toPromise();
  }

  async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return await this.httpService
      .put(url, data, config)
      .pipe(map((response) => response.data))
      .toPromise();
  }

  async patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return await this.httpService
      .patch(url, data, config)
      .pipe(map((response) => response.data))
      .toPromise();
  }
}
