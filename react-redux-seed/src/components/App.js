import React from 'react';
import Container from '@material-ui/core/Container';
import TodosPage from './pages/Todos';
import { useStyles } from './App.styles';

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.app}>
      <TodosPage />
    </Container>
  );
}

export default App;
