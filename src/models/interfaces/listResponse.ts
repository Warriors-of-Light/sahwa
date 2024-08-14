import { BaseResponse } from './baseResponse';

export interface ListResponse<T> extends BaseResponse {
  list: T[];
}
