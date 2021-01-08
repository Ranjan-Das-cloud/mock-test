import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';
import Homesecond from './home2';
import Instructions from './instruction';
import Navbar from './navbar';
import Submit from './result';
import Test from './test';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        
        <Navbar/>
        <Switch>
            <Route path="/" component={Instructions} exact></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/home_2" component={Homesecond}></Route>
            <Route path="/test/:id" component={Test}></Route>
            <Route path="/result" component={Submit}></Route>
        </Switch>
      </div>
     );
  }
}
 
export default App;