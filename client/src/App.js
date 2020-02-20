import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Adminpage from './pages/Adminpage/Adminpage';
import Blogpage from './pages/Blogpage/Blogpage'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/blog' component={Blogpage}/>
          <Route path='/admin' component={Adminpage}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
