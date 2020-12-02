import Axios from 'axios';
import React, { Component } from 'react';

class Test extends Component {
    state = { 
        question:[],
        index: 0
     }

     constructor(props){
         super(props);
         this.next = this.next.bind(this);
         this.previous = this.previous.bind(this);
     }

     next(){
         this.setState({question: this.state.question, index: this.state.index + 1});
         console.log("You are on Question no. " + this.state.index);
     }

     previous(){
        this.setState({question: this.state.question, index: this.state.index - 1});
        console.log("You are on Question no. " + this.state.index);
    }

     renderQuestion(index){
         if(this.state.question.length !== 0){
             return this.state.question[index].question;
         }
     }

     returnOptions(index){
         
        //fetch the options
        let options = [];
        if(this.state.question.length !== 0){
            options = this.state.question[index].incorrect_answers;
            //console.log(options);
            options.push(this.state.question[index].correct_answer);
            console.log(options);

            //Randomise the array
            options.sort(() => Math.random() - 0.5);
            //options = options[Math.floor(Math.random()*options.length)];
            console.log(options);
        }
        return options;
     }

    componentDidMount(){
        let category_id = this.props.match.params.id;
        console.log(category_id);

        //hit api
        Axios
        .get('https://opentdb.com/api.php?amount=10&category='+ category_id +'&difficulty=easy')
        .then((response) => {
            //console.log(response);
            this.setState({question: response.data.results, index: 0});
            console.log(this.state.question);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() { 
        let options = this.returnOptions(this.state.index);
        return ( 
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3">
                            {
                                this.state.question.map((item, index) => {
                                    return <button className="btn btn-info btn-sm">{index}</button>
                                })
                            }
                        </div>
                        <div className="col-6">
                            <h2 className="mb-3">{this.renderQuestion(this.state.index)}</h2>
                            {
                                options.map((item) => {
                                    return <div>
                                                <h4><input type="radio" name="correct"></input>{item}</h4>
                                            </div>
                                })
                            }
                            <div className="mt-5">
                                <span>
                                    <button onClick={this.previous} className="btn btn-info">Prev</button>
                                </span>
                                <span className="float-right">
                                    <button onClick={this.next} className="btn btn-info">Next</button>
                                </span>
                            </div>
                        </div>
                        <div className="col-3">

                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Test;