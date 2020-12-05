import React, { Component } from 'react';

class Timer extends Component {
    state = { 
        counter: this.props.secs - 1
     }

    componentDidMount(){
        let x = setInterval(() => {
            if(this.state.counter > 0){
                this.setState({counter: this.state.counter - 1});
            }
            else{
                clearInterval(x);
                this.props.onTimeComplete();
            }
        },1000);
    }
    render() { 
        return ( 
            <div>{Math.floor(this.state.counter/60)} mins {this.state.counter % 60} secs</div>
         );
    }
}
 
export default Timer;