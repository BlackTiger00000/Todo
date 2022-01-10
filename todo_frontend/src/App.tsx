import React, { useState } from 'react';
import { Container, List, Paper } from '@material-ui/core';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

interface Item {
  id: string;
  title: string;
  checked: boolean;
}

const initialState: Item[] = [];

// const DUMMY_ITEMS = [
//   {
//     id: '1',
//     title: 'first item',
//     checked: false,
//   },
//   {
//     id: '2',
//     title: 'second item',
//     checked: true,
//   },
// ];

const App: React.FC = () => {
  const [items, setItems] = useState(initialState);

  const addHandler = (item: Item) => {
    setItems((prevItem: Item[]) => {
      return [...prevItem, item];
    });
  };
  console.log(items);

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
            />
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default App;
