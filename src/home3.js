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
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Comics" id="29"/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Science: Gadgets" id="30"/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Vehicles" id="28"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Art" id="25"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Politics" id="24"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Animals" id="27"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="BioLogy" id="#goback_01" details="Will be available soon!"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Zoology" id="#goback_02" details="Will be available soon!"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Ergonomy" id="#goback_03" details="Will be available soon!"/>
                        </div>

                    </div>
                    <div className="offset-360 mb-5">
                        <nav aria-label="...">
                            <ul class="pagination mid-auto">
                                <li class="page-item disabled">
                                <Link class="page-link" to="#" tabindex="-1" aria-disabled="true">Previous</Link>
                                </li>
                                <li class="page-item"><Link class="page-link" to="/home">1</Link></li>
                                <li class="page-item" aria-current="page">
                                <Link class="page-link" to="/home_2">2</Link>
                                </li>
                                <li class="page-item active"><Link class="page-link" to="/home_3">3</Link></li>
                                <li class="page-item">
                                <Link class="page-link" to="#">Next</Link>
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