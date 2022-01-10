import { Checkbox, InputBase, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

interface TodoProps {
  item: {
    id: string;
    title: string;
    checked: boolean;
  };
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <ListItem>
      <Checkbox checked={props.item.checked} />
      <ListItemText>
        <InputBase
          inputProps={{ 'aria-label': 'naked' }}
          type='text'
          id={props.item.id}
          name={props.item.id}
          value={props.item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
