import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, provider } from './firebase';

function Navbar() {
    // const [ current_user_details, setUser ] = useState(null);

    const current_user = JSON.parse(localStorage.getItem('user'));
    console.log(current_user);

    const signOut = () => {
        if(current_user === null) {
            alert("Redirecting to SignIn page...");

            setTimeout(() => {
                auth.signInWithPopup(provider).then((result) => {
                    let user = result.user;

                    let newUser = {
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    }

                    // setUser(newUser);
                    console.log(user);

                    localStorage.setItem('user', JSON.stringify(newUser)) // localStorage accepts strings
                    window.location.href = '/home';
                }).catch((error) => {
                    alert(error.message);
                })
            }, 100)
        }
        else {
        auth.signOut().then(() => {
            localStorage.removeItem('user')
            // setUser(null);
          })
      
          setTimeout(() => {
            alert("You have signed Out from Your Account");
            window.location.href = '/';
          }, 1000)
        }
    }

    return ( 
        <div>
            <nav className="navbar bg-info">
                <h3 className="navbar-brand text-white">Mock Test</h3>

                <ul className='nav'>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/home">Test Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        {current_user === null ? (
                            <Link className="nav-link text-white" to="/" onClick={signOut}><img src='/user_avatar_astronaut.png' alt="profile-pic" style={{height: "60px", width: "60px", marginTop: '-16px'}} className='rounded-user'/></Link>
                        ) : (
                            <Link className="nav-link text-white" to="/" onClick={signOut}><img src={current_user.photo} alt="profile-pic" style={{height: "40px", width: "40px"}} className='rounded-user'/></Link>
                        )
                        }
                    </li>
                </ul>
            </nav>
        </div>
        );
}
 
export default Navbar;