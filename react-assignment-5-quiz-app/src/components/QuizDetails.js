import React, { Component } from 'react';
import '../App.css';


class QuizDetails extends Component {

    back() {
        this.props.back();
    }




    renderFloatingBtn() {
        return (
            <div className="floatingBtn" onClick={() => this.back()}>
                <i className="fa fa-chevron-left" style={{ color: 'white' }} ></i>
            </div>
        )
    }

    renderQuizDetails() {
        const { quizList, index } = this.props
        const data = Object.values(quizList[index]);
        return (
            <div className='quizDetailDiv'>
                {data.map((items) => {
                    return (
                        typeof items === 'object' ?
                            <div className="card text-center" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <p><b>Description:</b> {items.description}</p>
                                    <p><b>passing score:</b> {items.passingScore}</p>
                                    <p><b>Quiz duration:</b> {items.quizTime}</p>
                                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                    <button type="submit" className="btn btnApp" style={{ backgroundColor: '#13A89E', color: 'white' }} >Start Quiz</button>
                                </div>
                            </div>
                            :
                            undefined
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderFloatingBtn()}
                {this.renderQuizDetails()}
            </div>
        )
    }
}

export default QuizDetails;