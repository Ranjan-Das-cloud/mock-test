import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Congratulation from './congratulation';

function Submit({ location }) {
    // const current_user = localStorage.getItem('user');
 
    return ( 
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6 offset-3">
                        <div className="card">
                            <div className="card-body">
                                {(location.state === undefined || location.state === null) ? (
                                    <>
                                    <img src='./restricted.png' alt='restriction-logo' style={{minheight: '20px', maxHeight: '300px', minWidth: '20px', maxWidth: '400px', marginBottom: '50px'}}/>
                                        <h3 className="text-md-center text-danger">Alert !! You must take tests to view your scores!!!</h3>
                                    </>
                                    ) : (location.state.marks > 0 ? (
                                    <>
                                        {/* <video id='result' height="200px" width="200px" loop autoplay muted onended="run()">
                                            <source src='./Results_evaluated.mp4' typeof='video/mp4'/>
                                        </video> */}
                                        <Congratulation />
                                        <h3 className="text-md-center text-info">Yay !! You scored {location.state.marks} marks</h3>
                                    </>
                                    ) : (
                                        <>
                                        <img src='./disqualification.png' alt='disqualification-logo' style={{minheight: '20px', maxHeight: '300px', minWidth: '20px', maxWidth: '400px', marginBottom: '50px'}}/>
                                            <h3 className="text-md-center text-danger">Failed !! You scored {location.state.marks} marks</h3>
                                        </>
                                    )
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}
 
export default Submit;