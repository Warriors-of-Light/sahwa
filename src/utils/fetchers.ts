import { Badge, BadgesResponse } from "@/models/interfaces/badge"
import { baseUrl } from "@/models/interfaces/baseUrl"
import { Tag, TagsResponse } from "@/models/interfaces/tag"
import { UserOut, UserSummary } from "@/models/interfaces/user"

export const fetchInstructors = async (): Promise<UserSummary[]> => {
  try {
    const response = await fetch(`${baseUrl}users/all/?page_size=10&page_number=1`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()
    return result.list.map((user: UserOut) => ({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
    }))
  } catch (error) {
    console.error('Error fetching instructors:', error)
    return []
  }
}
export const fetchTags = async (): Promise<Tag[]> => {
 try {
  const response = await fetch(
    `${baseUrl}tags/?page_size=100&page_number=1`
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const result: TagsResponse = await response.json()
  return result.list.map((tag) => ({
    id: tag.id,
    name: tag.name,
    message: tag.message,
    status: tag.status,
  }))
 } catch (error) {
      console.error('Error fetching Tags:', error)
      return []
 }
}

export const fetchBadges = async (): Promise<Badge[]> => {
  try {
    const response = await fetch(`${baseUrl}badges`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result: BadgesResponse = await response.json()
    return result.list.map((badge: Badge) => ({
      id: badge.id,
      name: badge.name,
      image: badge.image,
      message: badge.message,
      status: badge.status,
    }))
  } catch (error) {
        console.error('Error fetching Badges:', error)
        return []
  
  }
}
