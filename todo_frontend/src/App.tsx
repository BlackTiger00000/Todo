import React, { useState } from 'react';
import { Container, List, Paper } from '@material-ui/core';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import TodoItem from './components/interfaces/TodoItem';

const App: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([]);

  const addHandler = (item: TodoItem) => {
    setItems((prevItem: TodoItem[]) => {
      return [...prevItem, item];
    });
    console.log(items);
  };

  const deleteHandler = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
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
