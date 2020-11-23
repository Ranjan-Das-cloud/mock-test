import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navbar bg-info">
                    <h3 className="navbar-brand text-white">Mock Test</h3>

                    <ul className='nav'>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;