import React from 'react';

class Leaderboard extends React.Component {
    render() {
        let bots_copy = this.props.bots.slice();
        let bots = bots_copy.sort((a, b) => {
            return (a.score < b.score) ? 1 : -1;
        });
        return (
            <div className="leaderboard">
                <h3>Leaderboard</h3>
                {bots.map((item) => {
                    return (
                        <div className="bot">
                            <p className="name">{item.name}</p>
                            <p className="score">{item.score}</p>
                        </div>
         
                    )
                })}
                
            </div>
        )
    }
}

export default Leaderboard;