import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';

class Homethird extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <h3><i><b>Available Tests (on Other Areas)</b></i></h3>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4 mb-3">
                            <Card name="Entertainment: Comics" id="29"/>
                        </div>
                        <div className="col-4 mb-3">
                            <Card name="Science: Gadgets" id="30"/>
                        </div>
                        <div className="col-4 mb-3">
                            <Card name="Vehicles" id="28"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Art" id="25"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Politics" id="24"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Animals" id="27"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Not Defined" id="#goback_01"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Not defined" id="#goback_02"/>
                        </div>

                        <div className="col-4 mb-3">
                            <Card name="Not Defined" id="#goback_03"/>
                        </div>

                    </div>
                    <div className="row offset-3 mt-5">
                        <nav aria-label="...">
                            <ul class="pagination mid-auto">
                                <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item"><Link class="page-link" to="/home">1</Link></li>
                                <li class="page-item" aria-current="page">
                                <Link class="page-link" to="/home_2">2</Link>
                                </li>
                                <li class="page-item active"><Link class="page-link" to="/home_3">3</Link></li>
                                <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Homethird;