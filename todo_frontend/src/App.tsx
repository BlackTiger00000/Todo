import React, { useState, useCallback, useEffect } from 'react';
import { Container, List, Paper } from '@material-ui/core';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import TodoItem from './components/interfaces/TodoItem';
import { API_BASE_URL } from './components/util/app-config';

const App: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  ////////////////////////////////
  //데이터 패치용함수
  const fetchTodosHandler = useCallback(async () => {
    const response = await fetch(API_BASE_URL + '/todo', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('fetchTodosHandler에서 에러발생');
    }
    const data = await response.json();
    setItems(data.data);
  }, []);

  useEffect(() => {
    fetchTodosHandler();
  }, [fetchTodosHandler, items]);

  const addHandler = (item: TodoItem) => {
    fetch(API_BASE_URL + '/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((response) => setItems(response.data));
  };

  const deleteHandler = (id: string) => {
    const item = items.find((item) => item.id === id);
    fetch(API_BASE_URL + '/todo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((response) => setItems(response.data));
    // setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Container maxWidth='md'>
      <AddTodo onAdd={addHandler} />
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((item) => (
            <Todo
              id={item.id}
              title={item.title}
              checked={item.checked}
              key={item.id}
              onDelete={deleteHandler}
            />
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default App;
