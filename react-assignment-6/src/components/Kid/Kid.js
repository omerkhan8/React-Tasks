import React from 'react';


export default class Kid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emotion: 'nervous',
            danceSteps: [],
            currentStepIndex: 0,
            startedPerforming: false,
            stop: false
        };
    }

    qualified() {
        this.setState({ startedPerforming: false, stop: true })
    }

    static getDerivedStateFromProps(props, state) {
        const danceSteps = [...state.danceSteps, ...props.furtherSteps];
        return {
            danceSteps: state.danceSteps.length < 5 ? danceSteps : state.danceSteps,
            startedPerforming: !state.stop && danceSteps.length >= 5,
            emotion: props.updateEmotion || 'nervous',
            stars: props.stars
        }
    }

    componentDidMount() {
        let { danceSteps } = this.state;
        danceSteps = ['step1', 'step2'];
        this.setState({ danceSteps });
    }

    componentDidUpdate(prevProps, prevState) {
        const { stars } = this.state;
        if (prevState.stars === 4 && stars === 5) {
            this.qualified();
        }
    }

    componentWillUnmount() {
        this.props.leaveJudge(true);
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
