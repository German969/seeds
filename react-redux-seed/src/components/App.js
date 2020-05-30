import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodosPage from './pages/Tasks';
import { useStyles } from './App.styles';

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.app}>
      <Router>
        <Switch>
          <Route path="/">
            <TodosPage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
