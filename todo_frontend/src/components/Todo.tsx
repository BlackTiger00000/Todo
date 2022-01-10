import {
  Checkbox,
  IconButton,
  InputBase,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import React, { useState } from 'react';
import DeletableTodoItem from './interfaces/DeletableTodoItem';

const Todo: React.FC<DeletableTodoItem> = (props) => {
  const [todo, setTodo] = useState({
    id: props.id,
    title: props.title,
    checked: props.checked,
  });

  const checkboxHandler = (_: React.MouseEvent) => {
    setTodo((prevState) => {
      return {
        id: prevState.id,
        title: prevState.title,
        checked: !prevState.checked,
      };
    });
  };

  const deleteEventHandler = (event: React.MouseEvent) => {
    if (event.type === 'click') {
      props.onDelete!(todo.id!);
    }
  };

  if (props.title && props.id) {
    console.log('props.title:' + todo.title);
    console.log('props.id:' + todo.id);
    console.log('props.checked:' + todo.checked);
    return (
      <ListItem>
        <Checkbox checked={todo.checked!} onClick={checkboxHandler} />
        <ListItemText>
          <InputBase
            inputProps={{ 'aria-label': 'naked' }}
            type='text'
            id={todo.id!}
            name={todo.id!}
            value={todo.title}
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
