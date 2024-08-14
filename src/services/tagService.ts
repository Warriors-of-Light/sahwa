import {baseUrl} from '../models/interfaces/baseUrl'

export const fetchTags = async () => {
    const token = localStorage.getItem('token');
    return await fetch(`${baseUrl}tags`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
    });
};