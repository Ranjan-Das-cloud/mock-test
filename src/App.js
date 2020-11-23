import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';
import Navbar from './navbar';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        
        <Navbar/>
        <Switch>
            <Route path="/" component={Home} exact></Route>
        </Switch>
      </div>
     );
  }
}
 
export default App;