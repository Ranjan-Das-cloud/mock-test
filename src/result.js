import React, { Component } from 'react';

class Submit extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-6 offset-3">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="text-md-center">Yay !! You scored {this.props.location.state.marks} marks</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Submit;