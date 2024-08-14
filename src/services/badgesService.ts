import { Badge, PagedResponse<Badge> } from "@/models/interfaces/badge"
import { baseUrl } from "@/models/interfaces/baseUrl"

export const get = async (): Promise<Badge[]> => {
  try {
    const response = await fetch(`${baseUrl}badges`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result: PagedResponse<Badge> = await response.json()
    return result.list.map((badge: Badge) => badge)
  } catch (error) {
    console.error('Error fetching badges:', error)
    throw new Error('Failed to fetch Badges')
  }
}
