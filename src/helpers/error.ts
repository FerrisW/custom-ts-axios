import { AxiosRequestConfig, AxiosResponse } from '../types';

export class AxiosError extends Error {
    isAxiosError: boolean
    config: AxiosRequestConfig
    code?: string | null
    request?: any
    response?: AxiosResponse

    constructor(
        message: string,
        config: AxiosRequestConfig,
        code?: string | null,
        request?: any,
        response?: AxiosResponse
    ) {
        super(message);
        this.config = config;
        this.code = code;
        this.request = request;
        this.response = response;
        this.isAxiosError = true;

        Object.setPrototypeOf(this, AxiosError.prototype);  //原因在于TS中继承内部的类时会存在无法调用本身定义的方法，会报错
    }
}

export function createError(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
) {
    const error = new AxiosError(message, config, code, request, response);
    return error
}