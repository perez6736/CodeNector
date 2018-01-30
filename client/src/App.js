import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login'
import Register from './components/registration/registrationPage'
import {Link, BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p>
          <Link to='/login'> Login </Link>
          </p>
          <p>
            <Link to='/register'> Need an account? </Link>
          </p>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
