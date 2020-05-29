import React from 'react';
import Container from '@material-ui/core/Container';
import { useStyles } from './App.styles';

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.app}>
      TODO List
    </Container>
  );
}

export default App;
