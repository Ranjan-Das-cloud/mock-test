import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navbar bg-info">
                    <h3 className="navbar-brand text-white">Mock Test</h3>

                    <ul className='nav'>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/home">Test Dashboard</Link>
                        </li>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;