import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';

class Homesecond extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <h3><i><b>Available Tests (on Entertainment Areas)</b></i></h3>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Books" id="10"/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Film" id="11"/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Music" id="12"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Televisions" id="14"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Video Games" id="15"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Board Games" id="16"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Japanese Anime & Manga" id="31"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Cartoons & Annimations" id="32"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <Card name="Entertainment: Musicals & Theaters" id="13"/>
                        </div>

                    </div>
                    <div className="row offset-3 mt-2 mb-5">
                        <nav aria-label="...">
                            <ul class="pagination mid-auto">
                                <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item"><Link class="page-link" to="/home">1</Link></li>
                                <li class="page-item active" aria-current="page">
                                <Link class="page-link" to="/home_2">2</Link>
                                </li>
                                <li class="page-item"><Link class="page-link" to="/home_3">3</Link></li>
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
 
export default Homesecond;