import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">10 mins</h6>
                        <p className="card-text">Some quick questions are given here. Are you ready to solve ??? Click on Take Test !!</p>
                        <Link to={'/test/' + this.props.id} className="card-link btn btn-sm btn-info">Take Test</Link>
                        <a href="#" className="card-link btn btn-sm btn-primary">Bookmark It</a>
                    </div>
                    </div>
            </div>
         );
    }
}
 
export default Card;