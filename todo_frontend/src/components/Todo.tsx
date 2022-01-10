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
    readOnly: true,
  });

  const checkboxHandler = (_: React.MouseEvent) => {
    setTodo((prevState) => {
      return {
        id: prevState.id,
        title: prevState.title,
        checked: !prevState.checked,
        readOnly: prevState.readOnly,
      };
    });
  };

  const deleteEventHandler = (event: React.MouseEvent) => {
    if (event.type === 'click') {
      props.onDelete!(todo.id!);
    }
  };

  const offReadOnlyMode: React.MouseEventHandler = () => {
    console.log(`Event! ${todo.readOnly}`);
    setTodo((prevState) => {
      console.log(`ReadOnly? ${!prevState.readOnly}`);
      return {
        id: prevState.id,
        title: prevState.title,
        checked: prevState.checked,
        readOnly: false,
      };
    });
  };

  const onReadOnlyMode: React.KeyboardEventHandler = (
    event: React.KeyboardEvent
  ) => {
    if (event.key === 'Enter') {
      console.log(`Event! ${todo.readOnly}`);
      setTodo((prevState) => {
        console.log(`ReadOnly? ${!prevState.readOnly}`);
        return {
          id: prevState.id,
          title: prevState.title,
          checked: prevState.checked,
          readOnly: true,
        };
      });
    }
  };

  const editEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prevState) => {
      return {
        id: prevState.id,
        title: event.target.value,
        checked: prevState.checked,
        readOnly: prevState.readOnly,
      };
    });
  };

  if (props.title && props.id) {
    return (
      <ListItem>
        <Checkbox checked={todo.checked!} onClick={checkboxHandler} />
        <ListItemText>
          <InputBase
            inputProps={{
              'aria-label': 'naked',
              readOnly: todo.readOnly,
            }}
            onClick={offReadOnlyMode}
            onKeyPress={onReadOnlyMode}
            onChange={editEventHandler}
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
