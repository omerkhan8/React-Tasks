import React, { Component } from 'react';
import '../App.css';
import '../screens/Login/Login.css';
import QuizPage from './QuizPage';

class QuizDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            startQuiz: false,
            enteredKey: null,
            currentQuizArr: Object.values(props.quizList[props.index]),
            currQuizTitle: null,
            currentQuizObj: null
        }
    }

    componentWillMount() {
        let startQuiz = JSON.parse(localStorage.getItem('startQuiz'));
        let currentQuizObj = JSON.parse(localStorage.getItem('currentQuizObj'));
        this.setState({ startQuiz, currentQuizObj });
    }

    back() {
        if (this.state.startQuiz) {
            this.setState({ startQuiz: false })
            localStorage.setItem('startQuiz', false);
        }
        else {
            this.props.back();
        }
    }

    startQuiz(title) {
        this.setState({ startQuiz: true });
        localStorage.setItem('startQuiz', true);
        this.setState({ currQuizTitle: title });
    }

    checkKey() {
        const { currQuizTitle, enteredKey, currentQuizArr } = this.state;

        for (let quiz of currentQuizArr) {
            if (typeof quiz === 'object') {
                if (quiz.title === currQuizTitle) {
                    if (quiz.quizKey === enteredKey) {
                        alert('correct')
                        this.setState({ currentQuizObj: quiz });
                        let saveQuiz = JSON.stringify(quiz);
                        localStorage.setItem('currentQuizObj', saveQuiz);
                    }
                    else {
                        alert('invalid key entered')
                    }
                }
                else if (currQuizTitle === null) {
                    alert('secession expired, please select your test again.');
                    this.setState({ startQuiz: false });
                    break;
                }
            }
        }


    }


    renderFloatingBtn() {
        return (
            <div className="floatingBtn" onClick={() => this.back()}>
                <i className="fa fa-chevron-left" style={{ color: 'white' }} ></i>
            </div>
        )
    }

    renderQuizDetails() {
        // const { quizList, index } = this.props
        // const data = Object.values(quizList[index]);
        const { currentQuizArr } = this.state;
        console.log(currentQuizArr);
        const styles = { backgroundColor: '#13A89E', color: 'white' };
        return (
            <div className='quizDetailDiv'>
                {currentQuizArr.map((items) => {
                    // console.log(items);
                    return (
                        typeof items === 'object' ?
                            <div className="card text-center" key={items.title} style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <p><b>Description:</b> {items.description}</p>
                                    <p><b>passing score:</b> {items.passingScore}</p>
                                    <p><b>Quiz duration:</b> {items.quizTime}</p>
                                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                    <button type="submit" className="btn btnApp" style={styles} onClick={() => { this.startQuiz(items.title) }} >Start Quiz</button>
                                </div>
                            </div>
                            :
                            undefined
                    )
                })}
            </div>
        )
    }

    renderAskKey() {
        return (
            <div className='keyDiv'>
                <div className="form-group">
                    <input type="email" className="form-control " placeholder="Enter Key" onChange={(e) => { this.setState({ enteredKey: e.target.value }) }} />
                    <br />
                    <div className='loginBtn'>
                        <button type="submit" className="btn" style={{ width: '120px' }} onClick={() => { this.checkKey() }} >Submit</button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { startQuiz, currentQuizObj } = this.state;
        return (
            <div>
                {!currentQuizObj && this.renderFloatingBtn()}
                {!startQuiz && this.renderQuizDetails()}
                {startQuiz && !currentQuizObj && this.renderAskKey()}
                {startQuiz && currentQuizObj && <QuizPage Quiz={currentQuizObj} />}
            </div>
        )
    }
}

export default QuizDetails;