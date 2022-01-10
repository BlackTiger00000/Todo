import {
  Checkbox,
  IconButton,
  InputBase,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import React from 'react';
import DeletableTodoItem from './interfaces/DeletableTodoItem';

const Todo: React.FC<DeletableTodoItem> = (props) => {
  const deleteEventHandler = (event: React.MouseEvent) => {
    if (event.type === 'click') {
      props.onDelete!(props.id!);
    }
  };

  if (props.title && props.id) {
    console.log('props.title:' + props.title);
    console.log('props.id:' + props.id);
    console.log('props.checked:' + props.checked);
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
        <ListItemSecondaryAction>
          <IconButton aria-label='Delete Todo' onClick={deleteEventHandler}>
            <DeleteOutline />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
  return null;
};

export default Todo;
