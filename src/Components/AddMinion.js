import React from 'react';

class AddMinion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            type: '',
            task: ''
        };

        this.updateName = this.updateName.bind(this);
        this.updateType = this.updateType.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        });
    }

    updateType(e) {
        this.setState({
            type:  e.target.value
        });
    }

    updateTask(e) {
        this.setState({
            task: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const name = this.state.name;
        const type = this.state.type;
        const task = this.state.task;

        this.setState({
            name: '',
            type: '',
            task: ''
        });

        this.props.addMinion(name, type, task);

    }



    render() {
        return (
            <div className="add-minion" id="login-div">
                <h3>Add Minion</h3>
                <form className="minion-form" >
                    <p>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" placeholder="Name" onChange={this.updateName} value={this.state.name} />
                    </p>
                    <p>
                        <label htmlFor="type">Type:</label>
                        <input list="types" placeholder="Type" onChange={this.updateType} value={this.state.type} />
                        <datalist id="types">
                            {this.props.types.map((item) => {
                                return (
                                    <option value={item}></option>
                                )
                            })}
                        </datalist>
                    </p>   
                    <p>
                        <label htmlFor="task">Task:</label>
                        <input list="tasks" placeholder="Task" onChange={this.updateTask} value={this.state.task} />
                        <datalist id="tasks">
                            {this.props.tasks.map((item) => {
                                if (!item.done) {
                                    return <option value={item.description}></option>
                                }

                            })}
                        </datalist>
                    </p>
                    <button className="submit-button" onClick={this.handleSubmit}>Add Minion</button>           
                </form>

            </div>
        )
    }
}

export default AddMinion;