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
            <div class="timer">
                {Math.floor(this.state.counter/60) > 9 ? (
                    <span class="timer__part timer__part--minutes">{Math.floor(this.state.counter/60)}</span>
                    ) : (
                        <span class="timer__part timer__part--minutes">0{Math.floor(this.state.counter/60)}</span>
                    )
                }
                <span class="timer__part">:</span>
                {this.state.counter % 60 > 9 ? (
                <span class="timer__part timer__part--seconds">{this.state.counter % 60}</span>
                    ) : (
                        <span class="timer__part timer__part--seconds">0{this.state.counter % 60}</span>
                    )
                }
            </div>
         );
    }
}
 
export default Timer;