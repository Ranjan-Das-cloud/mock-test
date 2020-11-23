import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">20 mins</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Take Test</a>
                        <a href="#" className="card-link btn btn-sm btn-info">Another link</a>
                    </div>
                    </div>
            </div>
         );
    }
}
 
export default Card;