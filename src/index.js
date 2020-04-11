import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import firebase from './firebase';

import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>


    </Switch>
  </Router>
)

ReactDOM.render(
    <Root />,
  document.getElementById('root')
);


