import React from 'react';


class TaskList extends React.Component {
    render() {
        let id = 0;
        return (
            <div className="task-list">
                <h2>Tasks</h2>
                {this.props.tasks.map((task) => {
                    id++;
                    if (task.eta === 0) {
                        return (
                            <div key={id} className="task-item-green">                            
                                <p className="description">{task.description}</p>
                            </div>
                        ) 
                    }
                    else {
                        return (
                            <div key={id} className="task-item">                            
                                <p className="description">{task.description}</p>
                                <p className="eta">{task.eta}</p>
                            </div>
                        ) 
                    }
                   
                })}
            </div>
        )
    }
}

export default TaskList;