import Axios from 'axios';
import React, { Component } from 'react';
import Radio from './radio';
import Timer from './timer';

class Test extends Component {
    state = { 
        questions:[],
        options:[],
        correct:[],
        answers: [],
        index: 0
     }

    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next(){
        let question_no = this.state.index;
        this.setState({questions: this.state.questions, index: this.state.index + 1});
        question_no += 2;
        console.log("You are on questions no. " + question_no);
    }

    previous(){
        let question_no = this.state.index;
        this.setState({questions: this.state.questions, index: this.state.index - 1});
        console.log("You are on questions no. " + question_no);
    }

    grid(index){
        this.setState({questions: this.state.questions, index: index});
    }

    submit(){
        let marks = this.evaluate();
        //alert("Yay!!! You obtained " + marks + " marks");
        alert("Thanks, for taking the test !!!");
        alert("Bravo !!! You'll be redirected to the Result Page .......");
        this.props.history.push({
            pathname: '/result',
            state: {marks: marks}
        });
    }

    /*clock(index){
        setInterval(function(){
            console.log(index);
        },1000);
    }*/

    evaluate(){
        let i;
        let marks = 0;
        for(i=0; i <= this.state.answers.length -1; i++){
            if(this.state.answers[i] !== ""){
                if(this.state.correct[i] === this.state.answers[i]){
                    marks += 4;
                }
                else{
                    marks -= 1;
                }
            }
        }

        return marks;
    }

    onTimeComplete(){
        let marks = this.evaluate();
        this.props.history.push({
            pathname: '/result',
            state: {marks: marks}
        });
    }

    returnOptions(){
        
        //fetch the options

        if(this.state.questions.length !== 0){
            return this.state.options[this.state.index].map((item) => {
                return <div>
                            <h4><Radio checked={this.state.answers[this.state.index] === item} name={item} index={this.state.index} handleClick={this.handleClick.bind(this)}/></h4>
                        </div>
            })
        }
    }

    handleClick(questionIndex,name){
        //1. turn the radio button on

        //2. update the answer array

        let updatedAnswers = this.state.answers.map(function(item,index) {
            if(index === questionIndex){
                return name;
            }
            else{
                return item;
            }
        })

        console.log(updatedAnswers);

        this.setState({answers: updatedAnswers});
    }

    shouldDisplayPrev(){
        if(this.state.index !== 0){
            return <button onClick={this.previous} className="btn btn-info">Prev</button>
        }
    }

    shouldDisplayNext(){
        if(this.state.index === this.state.questions.length - 1){
            return <button onClick={this.submit.bind(this)} className="btn btn-danger btn-lg">Submit</button>
        }
        else
        {
            return <button onClick={this.next} className="btn btn-info">Next</button>
        }
    }

    fillState(response){

    let questions = [];
    let options = [];
    let correct = [];
    let answers = [];

    response.data.results.map((item) => {
        questions.push(item.question)
        answers.push("");
        correct.push(item.correct_answer);
        let temp = [];

        item.incorrect_answers.map((option) => {
            temp.push(option);
        });

        temp.push(item.correct_answer);

        options.push(temp);
    });
    //console.log(questions);
    //console.log(correct);
    //console.log(options);

    this.setState({questions: questions, options: options, correct: correct, answers: answers, index: 0});
    }

    componentDidMount(){
        let category_id = this.props.match.params.id;
        console.log(category_id);

        //hit api
        Axios
        .get('https://opentdb.com/api.php?amount=10&category='+ category_id +'&difficulty=easy')
        .then((response) => {
            //console.log(response);
            //extract questions
            this.fillState(response);

            //fetch options


            //this.setState({questions: response.data.results, index: 0});
            console.log(this.state.questions);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() { 
        return ( 
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3">
                            <h4>questions Map</h4>
                            {
                                this.state.questions.map((item, index) => {
                                    if(index === this.state.index)
                                    {
                                        return <button onClick={() => this.grid(index)} style={{margin: 10, padding: 20}} className="btn btn-info btn-sm">{index + 1}</button>
                                    }
                                    else
                                    {
                                        return <button onClick={() => this.grid(index)} style={{margin: 10, padding: 20}} className="btn btn-secondary btn-sm">{index + 1}</button>
                                    }
                                })
                            }
                        </div>
                        <div className="col-6">
                            <div className="fixed-card">
                                <h2 className="mb-3">{this.state.index + 1}.  {this.state.questions[this.state.index]}</h2>
                                {
                                    this.returnOptions()
                                }
                            </div>
                            <div className="mt-5">
                                <span>
                                    {
                                        this.shouldDisplayPrev()
                                    }
                                </span>
                                <span className="float-right">
                                    {
                                        this.shouldDisplayNext()
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    {
                                        //this.clock(index)

                                        <Timer onTimeComplete={this.onTimeComplete.bind(this)} secs={600}/>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Test;