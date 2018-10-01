import React from 'react';

export default class Judge extends React.Component {
    constructor() {
        super();
        this.state = { stars: 0, available: false }
        this.provideStars = this.provideStars.bind(this);
    }

    applaud() {
        //Send this applaud status to Kid.js
        this.props.updateEmotion('happy');

    }

    shouldComponentUpdate(nextProps, nextState) {
        // if (nextState.stars > 5) {
        //     return false;
        // }
        // return true;
        return nextState.stars <= 5

    }

    provideStars() {
        let { stars } = this.state;

        this.setState({ stars: ++stars })
    }

    render() {
        const { stars, available } = this.state;

        return (
            <div>
                <button type="button" onClick={this.applaud.bind(this)}>
                    Appreciate performance
          </button>
                <button type="button" onClick={this.provideStars}>
                    Provide stars
          </button>

                Kid is available: {available}

                Stars gained: {stars}
            </div>
        );
    }
}
