import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Core from './app/core/core.react';
import NoMatch from './app/noMatch.react';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Core}>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'));
