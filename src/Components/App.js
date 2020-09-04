import React from 'react';
import './App.css';

import {tasks} from '../db';
import Title from './Title';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Minions from './Minions';
import Leaderboard from './Leaderboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bots: [],
      queue: [],
      tasks: tasks
    };

    this.addMinion = this.addMinion.bind(this);
    this.addTask = this.addTask.bind(this);

  }

  addMinion(name, type, task) {
    let bots = this.state.bots;
    let queue = this.state.queue;
    let tasks = this.state.tasks;
    let bot_idx = bots.findIndex(obj => obj.name === name)
    let queue_idx = queue.findIndex(obj => obj.name === name);
    let task_idx = tasks.findIndex(obj => obj.description === task);
    let score = tasks[task_idx].eta;
    console.log(task_idx);

    tasks[task_idx].done = true;


    if (queue_idx === -1) {
      queue.push({name: name, type: type, tasks: tasks});
    }
    else {
      alert("Bot Busy");
      return;
    }

    if (bot_idx === -1) {
      bots.push({name: name, type: type, score: 0});
      bot_idx = bots.length - 1;
    }   

    this.setState({bots: bots, queue: queue});

    let timer = setInterval( () => {
      if (tasks[task_idx].eta === 0) {
        this.setState({queue: this.state.queue.filter(obj => obj.name !== name)});
        bots[bot_idx].score += score;
        this.setState({bots: bots});
        clearInterval(timer);
      }
      if (tasks[task_idx].eta < 1000) {
        tasks[task_idx].eta = 0;
      }
      else {
        tasks[task_idx].eta -= 1000;
      }

      this.setState({tasks: tasks});
      
    }, 1000)   
     
       
  }

  addTask(name, time) {
    let tasks = this.state.tasks;
    time = Number(time);
    tasks.push({
      description: name,
      eta: time
    });

    this.setState({tasks: tasks});
  }

  render() {
    return (
      <div className="App">
        <Title />
        <div className="appbody-container">
          <TaskList tasks={this.state.tasks} />
  
          <Minions minions={this.state.bots} addMinion={this.addMinion} tasks={this.state.tasks} addTask={this.addTask} />
          
        </div>
      </div>
    )
  }

}




export default App;