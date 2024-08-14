export interface Badge {
  id: number
  name: string
  image: string
  message: string | null
  status: number | null
}

export interface BadgesResponse {
  message: string
  status: number
  page_number: number
  page_size: number
  total_pages: number
  total_records: number
  list: Badge[]
}
