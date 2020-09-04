import React from 'react';

import logo from '../img/film.png'

class Title extends React.Component {
    render() {
        return (
            <div className="minion-logo">
                <img src={logo}></img>
                <h1 className="title">BOT-O-MAT</h1>
            </div>
        )
        
    }
}

export default Title;