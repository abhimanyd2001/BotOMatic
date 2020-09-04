import React from 'react';

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            time: ''
        }

        this.updateName = this.updateName.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateName(e) {
        this.setState({name: e.target.value});
    }

    updateTime(e) {
        this.setState({time: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addTask(this.state.name, this.state.time);

        this.setState({name: '', time: ''});
    }

    
    render() {
        return (
            <div className="add-task">
                <h3>Add Task</h3>
                <form className="minion-form" >
                    <p>
                        <label htmlFor="name">Task Name:</label>
                        <input type="text" autoComplete="off" name="name" placeholder="Name" onChange={this.updateName} value={this.state.name} />
                    </p>

                    <p>
                        <label htmlFor="time">Time Needed to Finish (ms):</label>
                        <input type="number" min="1" name="time" placeholder="Time" onChange={this.updateTime} value={this.state.time} />
                    </p>

                    <button className="submit-button" onClick={this.onSubmit} >Add Task</button>           
                </form>
            </div>
        )
    }
}

export default AddTask;