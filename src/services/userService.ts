import { User } from '@/models/interfaces/user';
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

