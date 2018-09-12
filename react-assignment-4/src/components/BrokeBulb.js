import React, { Component } from 'react';
import '../App.css';
import BrokenBulb from '../bulb/BulbBroken.png';


class Brokenbulb extends Component {

    render() {
        return (
            <div className='BulbDiv'>
                <img src={BrokenBulb} alt="BrokenBulb" className='bulbCss' />
            </div>
        )
    }
}

export default Brokenbulb;