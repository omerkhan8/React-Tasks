import React from 'react';


export default class Kid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false };
    }

    qualified() {
        this.setState({ startedPerforming: false })
    }

    static getDerivedStateFromProps(props, state) {
        // const oldSteps = state.danceSteps;
        // const newSteps = props.furtherSteps;
        // const allSteps = oldSteps.concat(newSteps);
        // return { danceSteps: allSteps };
        const danceSteps = [...state.danceSteps, ...props.furtherSteps];
        return {
            danceSteps: state.danceSteps.length < 5 ? danceSteps : state.danceSteps,
            startedPerforming: danceSteps.length >= 5,
            emotion: props.updateEmotion || 'nervous'
        }
    }

    componentDidMount() {
        let { danceSteps } = this.state;
        danceSteps = ['step1', 'step2'];
        this.setState({ danceSteps });
    }

    render() {
        const { dressColor } = this.props;
        const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;

        console.log('dance Steps from kid', danceSteps);
        return (
            <div>
                <div>dressColor: {dressColor}</div>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
                <div>Emotion: {emotion}</div>
                {startedPerforming &&
                    <div>
                        <div>Current Step: {danceSteps[currentStepIndex]}</div>
                        <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
                    </div>}
            </div>
        );
    }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
