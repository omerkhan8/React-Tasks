import React, { Component } from 'react';
import '../App.css';
import OnBulb from '../bulb/BulbOn.png';

class Onbulb extends Component {

    render() {
        return (
            <div className='BulbDiv'>
                <img src={OnBulb} alt="OnBulb" className='bulbCss' />
            </div>
        )
    }
}

export default Onbulb;