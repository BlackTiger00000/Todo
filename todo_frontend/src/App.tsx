import React, { useState, useCallback, useEffect } from 'react';
import { Container, List, Paper } from '@material-ui/core';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import TodoItem from './components/interfaces/TodoItem';
import fetchItem from './components/util/fetchItem';

const App: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  ////////////////////////////////
  //데이터 패치용함수
  const fetchTodosHandler = useCallback(async () => {
    const itemArr = await fetchItem('GET');
    setItems(itemArr);
  }, []);

  useEffect(() => {
    fetchTodosHandler();
  }, [fetchTodosHandler]);

  const addHandler = async (item: TodoItem) => {
    const itemArr = await fetchItem('POST', item);
    setItems(itemArr);
  };

  const deleteHandler = async (id: string) => {
    const item = items.find((item) => item.id === id);
    const itemArr = await fetchItem('DELETE', item!);
    setItems(itemArr);
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
