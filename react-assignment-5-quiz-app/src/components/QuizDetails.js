import React, { Component } from 'react';


class QuizDetails extends Component {

    back(){
        this.props.back();
    }

    render() {
        let data = this.props.quizList;
        let showData = data[this.props.show];
        console.log(showData);
        return (
            <div>
                <button onClick={()=> this.back()}>back</button>
            </div>
        )
    }
}

export default QuizDetails;