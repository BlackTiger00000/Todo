import TodoItem from '../interfaces/TodoItem';
import { API_BASE_URL } from './app-config';

interface Option {
  headers: Headers;
  url: string;
  method: string;
  body?: string;
}

const call = async (
  api: string,
  method: string,
  request: TodoItem[] | null
) => {
  let options = {
    headers: new Headers({ 'Content-Type': 'application/json' }),
    url: API_BASE_URL + api,
    method: method,
  } as Option;

  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export default call;
