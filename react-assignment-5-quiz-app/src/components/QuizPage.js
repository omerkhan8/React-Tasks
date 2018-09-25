import React, { Component } from 'react';
import '../App.css';


class QuizPage extends Component {
    constructor(props) {
        super();
        this.state = {
            Quiz: props.Quiz,
            index: 0,
            finalScore: null
        }
        this.quizTime = parseInt(props.Quiz.quizTime.substr(0, 2), 10);
        this.passingScore = parseInt(props.Quiz.passingScore, 10);
        this.result = 0;
    }

    componentWillMount() {
        let index = JSON.parse(localStorage.getItem('index'));
        let result = JSON.parse(localStorage.getItem('result'));
        let finalScore = JSON.parse(localStorage.getItem('finalScore'));
        if (index === null || result === null) {
            index = 0;
            result = 0;
        }
        this.setState({ index, finalScore });
        this.result = result;
    }

    next() {
        let { index, Quiz } = this.state;
        let { questions } = Quiz;
        let answer = document.querySelector("input[name='option']:checked");
        if (answer === null) {
            alert('please select an option');
        }
        else {
            if (questions[index].answer === answer.value) {
                this.result++;
                localStorage.setItem('result', this.result);
            }
            if (index === questions.length - 1) {
                answer.checked = false;
                let correct = this.result;
                let total = questions.length;
                let finalScore = (correct / total) * 100;
                index = 0;
                this.result = 0
                localStorage.setItem('index', 0);
                localStorage.setItem('result', 0);
                localStorage.setItem('finalScore', finalScore);
                this.setState({ finalScore, index })
                return
            }
            index++;
            this.setState({ index });
            localStorage.setItem('index', index);
            answer.checked = false;

        }
    }

    back() {
        localStorage.setItem('finalScore', null);
        this.setState({ finalScore: null })
        this.props.goBack();
    }

    renderQuestions() {
        const { Quiz, index } = this.state;
        const { questions } = Quiz;
        let quizArray = questions[index];
        return (
            <div className="quizContainer">
                {/* <h5>Question: {index + 1}/{questions.length}</h5> */}
                <h3><b>Q#{index + 1}/{questions.length} :</b>{quizArray.question}</h3>
                <div className="custom-control custom-radio radioDiv">
                    <input type="radio" id="customRadio1" name="option" value={quizArray.option1} className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio1">{quizArray.option1}</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio2" name="option" value={quizArray.option2} className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio2">{quizArray.option2}</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio3" name="option" value={quizArray.option3} className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio3">{quizArray.option3}</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio4" name="option" value={quizArray.option4} className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio4">{quizArray.option4}</label>
                </div>
                <div className='nextBtn'>
                    <button type="submit" className="btn" style={{ width: '120px' }} onClick={() => this.next()} >Next</button>
                </div>

            </div>
        )
    }

    renderResult() {
        const { Quiz, finalScore } = this.state; 
        return (
            <div className='keyDiv'>
                {finalScore >= this.passingScore ?
                    <h1 style={{ color: 'green' }}>Congratulations you're passed</h1> :
                    <h1 style={{ color: 'red' }}>Sorry you're failed</h1>
                }
                <h4>Quiz Name: {Quiz.title} </h4>
                <h4>Score: {finalScore} / 100</h4>
                <h4>Passing Score: {this.passingScore}</h4>
                <div className='nextBtn'>
                    <button type="submit" className="btn" style={{ width: '120px' }} onClick={() => this.back()} >Back</button>
                </div>
            </div>
        )
    }

    render() {
        const { finalScore } = this.state;
        return (
            <div>
                {!finalScore && this.renderQuestions()}
                {finalScore && this.renderResult()}
            </div>
        )
    }
}

export default QuizPage;