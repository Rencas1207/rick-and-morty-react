import React from 'react';
import './nprogress.css';

import { GlobalStyles } from './GlobalStyles';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Character } from './Character';

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Character} />
          <Route path="/:id" exact component={Character} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};
