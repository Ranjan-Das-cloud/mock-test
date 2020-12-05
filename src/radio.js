import React, { Component } from 'react';

class Radio extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <input checked={this.props.checked} type="radio" name="x"></input>{this.props.name}
            </div>
         );
    }
}
 
export default Radio;