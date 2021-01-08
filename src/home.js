import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <div className="row offset-3 mt-5">
                        <nav aria-label="...">
                            <ul class="pagination mid-auto">
                                <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item active"><Link class="page-link" to="/home">1</Link></li>
                                <li class="page-item" aria-current="page">
                                <Link class="page-link" to="/home_2">2</Link>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
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
 
export default Home;