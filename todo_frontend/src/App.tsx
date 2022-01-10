import React from 'react';
import { Container, List, Paper } from '@material-ui/core';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

const DUMMY_ITEMS = [
  {
    id: '1',
    title: 'first item',
    checked: false,
  },
  {
    id: '2',
    title: 'second item',
    checked: true,
  },
];

const App: React.FC = () => {
  return (
    <Container maxWidth='md'>
      <AddTodo />
      <Paper style={{ margin: 16 }}>
        <List>
          {DUMMY_ITEMS.map((item) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default App;
