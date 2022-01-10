import { Checkbox, InputBase, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import TodoItem from './interfaces/TodoItem';

const Todo: React.FC<TodoItem> = (props) => {
  console.log('props.title:' + props.title);
  console.log('props.id:' + props.id);
  console.log('props.checked:' + props.checked);
  if (props.title && props.id) {
    return (
      <ListItem>
        <Checkbox checked={props.checked!} />
        <ListItemText>
          <InputBase
            inputProps={{ 'aria-label': 'naked' }}
            type='text'
            id={props.id}
            name={props.id}
            value={props.title}
            multiline={true}
            fullWidth={true}
          />
        </ListItemText>
      </ListItem>
    );
  }
  return null;
};

export default Todo;
