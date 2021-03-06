import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withAxios from './hoc/withAxios';

import Home from './pages/Home';
import Login from './pages/Login';

import 'antd/dist/antd.css';


import Search from './pages/Search';
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';

// import './static/js/rem';
class App extends Component {
  render() {
    // console.log('app:', this);
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/search" component={Search} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}
App = withRouter(App);
App = withAxios(App);
export default App;
