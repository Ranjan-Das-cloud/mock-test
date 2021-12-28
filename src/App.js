import React, { Component, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './home';
import Homesecond from './home2';
import Homethird from './home3';
import Instructions from './instruction';
import Navbar from './navbar';
import Submit from './result';
import Test from './test';

class App extends Component {
  
  render() {
    var current_user = JSON.parse(localStorage.getItem('user'));

    console.log(`loggedIn user: ${current_user}`);

  return ( 
    <div>
      
      <Navbar/>
      <Switch>
            <Route path="/result" component={Submit}></Route>
            <Route exact path="/home">
              {(current_user) ? <Home /> : <Redirect to="/" />}
            </Route>
          <Route exact path="/test/:id" component={Test}>
          </Route>
          <Route exact path="/home_2">
            {(current_user) ? <Homesecond /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/home_3">
            {(current_user) ? <Homethird /> : <Redirect to={"/"} />}
          </Route>
          <Route exact path="/" exact>
                <Instructions />
          </Route>
      </Switch>
    </div>
    )
  }
}
 
export default App;