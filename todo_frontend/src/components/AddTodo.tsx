import React, { useState } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';
import TodoItem from './interfaces/TodoItem';

interface FuncProps {
  onAdd(item: TodoItem): void;
}

const initialState: TodoItem = {
  id: null,
  title: null,
  checked: null,
};

const AddTodo: React.FC<FuncProps> = (props) => {
  const [input, setInput] = useState(initialState);

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      id: Math.random().toString(),
      title: event.currentTarget.value,
      checked: false,
    });
  };

  const onEnterKeyEventHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(input);
      setInput({
        id: null,
        title: null,
        checked: null,
      });
    }
  };

  const onButtonClickHandler = (event: React.FormEvent) => {
    props.onAdd(input);
    setInput({
      id: null,
      title: null,
      checked: null,
    });
  };

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder='할 일을 입력하세요'
            fullWidth
            onChange={onInputChangeHandler}
            onKeyPress={onEnterKeyEventHandler}
          />
        </Grid>
        <Grid xs={1} md={1} item>
          <Button
            fullWidth
            color='secondary'
            variant='outlined'
            onClick={onButtonClickHandler}
          >
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTodo;
