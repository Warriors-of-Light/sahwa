export interface Tag {
  message: string | null
  status: number | null
  id: number 
  name: string 
}

export interface TagsResponse {
  message: string
  status: number
  page_number: number | null
  page_size: number | null
  total_pages: number | null
  total_records: number | null
  list: Tag[]
}
