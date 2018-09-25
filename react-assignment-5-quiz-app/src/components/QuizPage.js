import React, { Component } from 'react';
import '../App.css';


class QuizPage extends Component {
    constructor(props) {
        super();
        this.state = {
            Quiz: props.Quiz,
            index: 0
        }
        this.quizTime = parseInt(props.Quiz.quizTime.substr(0, 2));
    }

    componentWillMount() {
        let index = JSON.parse(localStorage.getItem('index'));
        if (index === null) {
            index = 0;
        }
        this.setState({ index });
    }

    next() {
        let { index, Quiz } = this.state;
        let { questions } = Quiz;
        let answer = document.querySelector("input[name='option']:checked");
        if (answer === null) {
            alert('please select an option');
        }
        else {
            if (index === questions.length - 1) {
                index = 0;
                this.setState({ index });
                localStorage.setItem('index', index);
            }
            else{
                console.log(answer.value);
                index++;
                this.setState({ index });
                localStorage.setItem('index', index);
                answer.checked = false;
            }
        }
    }



    renderQuestions() {
        const { Quiz, index } = this.state;
        const { questions } = Quiz;
        let quizArray = questions[index];
        return (
            <div className="quizContainer">
                <h3><b>Q#{index + 1}:</b> {quizArray.question}</h3>
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

    render() {
        return (
            <div>
                {this.renderQuestions()}
            </div>
        )
    }
}

export default QuizPage;