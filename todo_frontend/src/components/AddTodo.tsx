import React from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';

const AddTodo: React.FC = () => {
  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <TextField placeholder='할 일을 입력하세요' fullWidth />
        </Grid>
        <Grid xs={1} md={1} item>
          <Button fullWidth color='secondary' variant='outlined'>
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTodo;
