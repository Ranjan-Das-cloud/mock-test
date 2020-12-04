import React, { Component } from 'react';

class Timer extends Component {
    state = { 
        counter: this.props.secs
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
            <div>{this.state.counter} secs</div>
         );
    }
}
 
export default Timer;