import { ListResponse } from "./listResponse";

export interface PagedResponse<T> extends ListResponse<T> {
  page_number: Number;
  page_size: Number;
  total_pages: Number;
  total_records: Number;
}
