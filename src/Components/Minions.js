import React from 'react';

import AddMinion from './AddMinion';
import AddTask from './AddTask';
import Leaderboard from './Leaderboard';
import {types} from '../db';

class Minions extends React.Component {
    render() {
        let minions = this.props.minions;
        return (
            <div className="minion-list">
                <div className="minions">
                    <h2>Bots</h2>
                    {minions.map((item) => {
                        return (
                            <div className="minions-item">
                                <p className="name">{item.name}</p>
                                <p className="type">{item.type}</p>
                            </div>
                        )
                    })}

                </div>
                <AddMinion types={types} addMinion={this.props.addMinion} tasks={this.props.tasks} />

                
                <AddTask addTask = {this.props.addTask} />

                <Leaderboard bots={this.props.minions} />
            </div>
        )
    }
}

export default Minions;