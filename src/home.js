import React, { Component } from 'react';
import Card from './card';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <h3>Available Test</h3>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4">
                            <Card name="General Knowledge"/>
                        </div>
                        <div className="col-4">
                            <Card name="Calculas"/>
                        </div>
                        <div className="col-4">
                            <Card name="CSRF"/>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;