import { User, UserOut } from '@/models/interfaces/user';
import { baseUrl } from '../models/interfaces/baseUrl'

export const add = async (user: User) => {
    const token = localStorage.getItem('token');
    return await fetch(`${baseUrl}users`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
};

export const get = async (): Promise<UserOut[]> => {
  try {
    const response = await fetch(
      `${baseUrl}users/all`
      //change the pagination functionality when the numbers increase
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()
    return result.list.map((user: UserOut) => user)
  } catch (error) {
    console.error('Error fetching instructors:', error)
    throw new Error('Failed to fetch Instructors')
  }
}
