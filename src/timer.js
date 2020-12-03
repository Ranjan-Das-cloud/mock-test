import React, { Component } from 'react';

class Timer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>{this.props.secs} secs</div>
         );
    }
}
 
export default Timer;