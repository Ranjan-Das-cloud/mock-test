import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { auth, provider } from './firebase'

function Instructions({ setUser }) {

    const current_user = JSON.parse(localStorage.getItem('user'));

    const signIn = () => {
        alert("Redirecting to SignIn page......");
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
    }
 
    return ( 
        <>
        <div class="header" style={{overflow: 'hidden'}}>
            
            <div class="inner-header flex">
                <div class="">
                    <div>
                        <h1 class="display-4">
                        <img src='https://img.icons8.com/nolan/64/speed.png' alt="exameater-logo" style={{height: '50px', width: '50px', marginTop: '-13px'}} />
                        Exameater</h1>
                        <p class="lead text-white">This is a modified test platform that explores mock tests in various domains of knowledge.</p>
                        <hr class="my-4"></hr>
                        <p class="text-white"><b>Each correct answers carrying +4 marks and each wrong entries causes -1 marks in result.</b></p>
                        <p class="lead text-white">
                            <Link class="btn btn-primary btn-lg" href="#" role="button" to="/home" onClick={signIn}>Go to Available Tests</Link>
                        </p>
                    </div>
                </div>

            </div>
            <div class="wave-margin">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
                </svg>
            </div>

            <div class="content flex">
                <p>@Copiright | 2021 | Exameater</p>
            </div>
        </div>
        </>
        );
}
 
export default Instructions;