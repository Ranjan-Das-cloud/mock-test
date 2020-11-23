import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';
import Navbar from './navbar';
import Test from './test';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        
        <Navbar/>
        <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/test/:id" component={Test}></Route>
        </Switch>
      </div>
     );
  }
}
 
export default App;