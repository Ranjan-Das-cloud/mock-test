import React, { Component } from 'react';
import Card from './card';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <h3><i><b>Available Tests</b></i></h3>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4 mb-3">
                            <Card name="General Knowledge" id="9"/>
                        </div>
                        <div className="col-4 mb-3">
                            <Card name="Science: Mathematics" id="19"/>
                        </div>
                        <div className="col-4 mb-3">
                            <Card name="Celebrities" id="26"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Sports" id="21"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Mythology" id="20"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Geography" id="22"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="History" id="23"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Science and Nature" id="17"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Entertainment: Film" id="11"/>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;