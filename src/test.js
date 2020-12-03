import Axios from 'axios';
import React, { Component } from 'react';
import Timer from './timer';

class Test extends Component {
    state = { 
        questions:[],
        options:[],
        correct:[],
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
        this.props.history.push('/result');
    }

    /*clock(index){
        setInterval(function(){
            console.log(index);
        },1000);
    }*/

    returnOptions(){
        
    //fetch the options

    if(this.state.questions.length !== 0){
        return this.state.options[this.state.index].map((item) => {
            return <div>
                        <h4><input type="radio" name="correct"></input>{item}</h4>
                    </div>
        })
    }
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

        response.data.results.map((item) => {
            questions.push(item.question)
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

        this.setState({questions: questions, options: options, correct: correct, index: 0});
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

                                        <Timer secs={50}/>
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