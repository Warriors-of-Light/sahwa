import { BaseResponse } from "./baseResponse"

export interface Badge extends BaseResponse {
  id: number
  name: string
  image: string
}
