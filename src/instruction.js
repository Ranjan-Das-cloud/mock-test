import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Instructions extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 className="mb-3 heading-1 text-md-center">Let's begin the test !!</h2>

                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Fluid jumbotron</h1>
                        <p class="lead">This is a modified test platform that explores mock tests in several sectors of knowledge.</p>
                        <hr class="my-4"></hr>
                        <p><b>Each correct answers carrying +4 marks and each wrong entries causes -1 marks in result.</b></p>
                        <p class="lead">
                            <Link class="btn btn-primary btn-lg" href="#" role="button" to="/home">Go to Available Tests</Link>
                        </p>
                    </div>
                </div>

                <nav aria-label="...">
                    <ul class="pagination mid-auto">
                        <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Instructions;