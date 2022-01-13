import TodoItem from '../interfaces/TodoItem';
import { API_BASE_URL } from './app-config';

const fetchItem = async (method: string, item?: TodoItem) => {
  const response = await fetch(API_BASE_URL + '/todo', {
    method: method,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  const json = await response.json();
  if (!response.ok) {
    return Promise.reject(json);
  }
  return json.data;
};

export default fetchItem;
