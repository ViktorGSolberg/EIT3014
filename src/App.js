import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Adminpage from './pages/Adminpage/Adminpage';



const backgroundColor = "white";

class App extends Component {
  
  render() {

    const App = () => (
      <div style={{backgroundColor: backgroundColor}}>
        <Switch>
          <Route exact path='/' component={Homepage}/>
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
