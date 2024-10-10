import { MenuItem } from './types';

const API_URL = 'http://127.0.0.1:8000/api/menuitems/search';

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch menu items');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return [];
  }
};

export const fetchMenuItemsByCategory = async (category: string): Promise<MenuItem[]> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        search: {
          filters: [
            {
              field: 'categoria',
              operator: '=',
              value: category,
            },
          ],
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch menu items by category');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching menu items by category:', error);
    return [];
  }
};