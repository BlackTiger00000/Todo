import React, { useRef, useState } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';
import TodoItem from './interfaces/TodoItem';

interface FuncProps {
  onAdd(item: TodoItem): void;
}

const AddTodo: React.FC<FuncProps> = (props) => {
  const [input, setInput] = useState('');

  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const onEnterKeyEventHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd({
        id: Math.random().toString(),
        title: input,
        checked: false,
      });
      setInput('');
    }
  };

  const onButtonClickHandler = (event: React.FormEvent) => {
    props.onAdd({
      id: Math.random().toString(),
      title: input,
      checked: false,
    });
    setInput('');
  };

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder='할 일을 입력하세요'
            fullWidth
            onChange={onInputHandler}
            onKeyPress={onEnterKeyEventHandler}
            value={input}
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
