import React, { Component } from 'react';
import './Quizlist.css';
import Nav from '../../components/Navbar';
import HtmlLogo from '../../logo/html.png';
import AngularLogo from '../../logo/angular.png';
import ReactLogo from '../../logo/react.png';
import JsLogo from '../../logo/js.png';
import QuizDetails from '../../components/QuizDetails';

class Quizlist extends Component {
    constructor() {
        super();
        this.state = {
            quizList: [
                {
                    mainTitle: 'Angular',
                    mainLogo: AngularLogo,
                    quizOne: {
                        title: 'Angular quiz1',
                        questions: [new Questions('Angular question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Angular question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Angular question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Angular question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Angular question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Angular question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Angular question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Angular question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    },
                    quizTwo: {
                        title: 'Angular quiz 2',
                        questions: [
                            new Questions('Angular question1', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question2', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question3', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question4', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question5', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question6', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question7', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    },
                    quizThree: {
                        title: 'Angular quiz 3',
                        questions: [
                            new Questions('Angular question1', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question2', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question3', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question4', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question5', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question6', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question7', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question8', 'one', 'two', 'three', 'four', 'three')
                        ]

                    },
                    quizFour: {
                        title: 'Angular Quiz 4',
                        questioins: [
                            new Questions('Angular question1', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question2', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question3', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question4', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question5', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question6', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question7', 'one', 'two', 'three', 'four', 'three'),
                            new Questions('Angular question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    }
                },
                {
                    mainTitle: 'React',
                    mainLogo: ReactLogo,
                    quizOne: {
                        title: 'React quiz1',
                        questions: [new Questions('React question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    },
                    quizTwo: {
                        title: 'React quiz 2',
                        questions: [new Questions('React question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    },
                    quizThree: {
                        title: 'React quiz 3',
                        questions: [new Questions('React question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question8', 'one', 'two', 'three', 'four', 'three')
                        ]

                    },
                    quizFour: {
                        title: 'React Quiz 4',
                        questions: [new Questions('React question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('React question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    }
                },
                {
                    mainTitle: 'Html',
                    mainLogo: HtmlLogo,
                    quizOne: {
                        title: 'Html quiz1',
                        questions: [new Questions('Html question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    },
                    quizTwo: {
                        title: 'Html quiz 2',
                        questions: [new Questions('Html question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    },
                    quizThree: {
                        title: 'Html quiz 3',
                        questions: [new Questions('Html question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question8', 'one', 'two', 'three', 'four', 'three')
                        ]

                    },
                    quizFour: {
                        title: 'Html Quiz 4',
                        questions: [new Questions('Html question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Html question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    }
                },
                {
                    mainTitle: 'JavaScript',
                    mainLogo: JsLogo,
                    quizOne: {
                        title: 'Javascript quiz1',
                        questions: [new Questions('Javascript question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    },
                    quizTwo: {
                        title: 'JavaScript quiz 2',
                        questions: [new Questions('Javascript question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    },
                    quizThree: {
                        title: 'JavaScript quiz 3',
                        questions: [new Questions('Javascript question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question8', 'one', 'two', 'three', 'four', 'three')
                        ]

                    },
                    quizFour: {
                        title: 'JavaScript Quiz 4',
                        questions: [new Questions('Javascript question1', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question2', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question3', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question4', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question5', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question6', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question7', 'one', 'two', 'three', 'four', 'three'),
                        new Questions('Javascript question8', 'one', 'two', 'three', 'four', 'three')
                        ]
                    }
                }
            ],
            show: null
        }
        this.back = this.back.bind(this);
    }

    componentWillMount() {
        let showPage = JSON.parse(localStorage.getItem('showQuizList'));
        this.setState({ show: showPage });
    }

    logout() {
        this.props.logout();
    }

    takeQuiz(index) {
        this.setState({ show: index });
        localStorage.setItem('showQuizList', index);
    }

    back() {
        this.setState({ show: null });
        localStorage.setItem('showQuizList', null);
    }


    renderQuizes() {
        const { quizList } = this.state;
        return (
            <div className='quizDiv' >
                {quizList.map((items, indx) => {
                    return (
                        <div className="flip-card" key={items.mainTitle}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={items.mainLogo} alt="logo" id='cardLogo' />
                                </div>
                                <div className="flip-card-back">
                                    <h1>{items.mainTitle}</h1>
                                    <p>This Covers all quizes related to {items.mainTitle}</p>
                                    <button type="submit" className="btn" id='takeQuizBtn' onClick={() => this.takeQuiz(indx)} >Take Quiz</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
    render() {
        const { quizList, show } = this.state;
        return (
            <div>
                <Nav>
                    <div className='logoutBtn'>
                        <button type="submit" className="btn" onClick={() => this.logout()} >Logout</button>
                    </div>
                </Nav>
                {show === null ?
                    this.renderQuizes() :
                    <QuizDetails quizList={quizList} show={show} back={this.back} />}

            </div>
        )
    }
}

export default Quizlist;


class Questions {
    constructor(question, option1, option2, option3, option4, answer) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.answer = answer;
    }

}