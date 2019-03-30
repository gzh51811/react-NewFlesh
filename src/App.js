import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import { Route, Redirect, Switch,Link, NavLink,withRouter} from 'react-router-dom';

// import './static/js/rem';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Redirect to='/home'/>
        </Switch>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
