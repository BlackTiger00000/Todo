import React from 'react';
import Todo from './components/Todo';
import { List, Paper } from '@material-ui/core';

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
    <Paper style={{ margin: 16 }}>
      <List>
        {DUMMY_ITEMS.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </List>
    </Paper>
  );
};

export default App;
