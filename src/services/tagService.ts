import { Tag, TagsResponse } from '@/models/interfaces/tag'
import {baseUrl} from '../models/interfaces/baseUrl'

export const fetchTags = async (): Promise<Tag[]> => {
  const token = localStorage.getItem('token')

  try {
    const response = await fetch(`${baseUrl}tags`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const result: TagsResponse = await response.json()
    return result.list // Return the list of tags
  } catch (error) {
    // Log the error and throw a new error to be handled by the caller
    console.error('Error fetching Tags:', error)
    throw new Error('Failed to fetch Tags')
  }
}