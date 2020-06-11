import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import HomePage from './views/pages/Home';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.app}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </Container>
  );
}

export default App;
