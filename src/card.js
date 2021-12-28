import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="card fixed-card">
                    <div className="card-body">
                        {String(this.props.name).length < 30 ? (
                            <h5 className="card-title module">{this.props.name}</h5>
                        ) : (
                            <h5 className="card-title module-broad">{this.props.name}</h5>
                        )
                        }
                        <h6 className="card-subtitle mb-2 text-muted">10 mins</h6>
                        {(this.props.details !== undefined) ? (
                            <>
                                <p className="card-text">{this.props.details} Click on Launch !!</p>
                                <Link to='#error'><button className="card-link btn btn-sm btn-outline-info" disabled>Launch</button></Link>
                            </>
                            ) : (
                            <>
                                <p className="card-text">Are you ready to solve ??? Click on Launch !!</p>
                                <Link to={'/test/' + this.props.id} className="card-link btn btn-sm btn-outline-info">Launch</Link>
                            </>
                            )
                        }
                        {/* <a className="card-link btn btn-sm btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Read About</a> */}

                        <div class="collapse" id="collapseExample">
                            <div class="">
                                This 20 mins test contains +4 marks for each correct entry and -1 mark for each incorrect answers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Card;