# Instructions
This project was created using React.  The ```src``` folder contains the source code that was used to implement this project.

## Installation
Ensure that your computer (MAC/LINUX/WINDOWS) has **Node.js** and **NPM** installed.  Node.js serves as a JavaScript runtime environment, and NPM is the node package manager.

Then, download or clone the repository.  Open the command line or terminal, and navigate to the directory where you cloned the repo.  Once you navigate inside the project directory, ensure that you see a ```package.json``` file.  Now, run the command ```npm install``` inside your terminal.  This will install all of the dependencies.

## Run App
After completing the above steps, run ```npm start``` in your terminal (same directory where you ran ```npm install```).  This will start the server on a localhost, and you should be directed to the web application containing Bot-0-Mat!

In case you need to reset the progress of the bot, simply refresh the webpage.

## Features
After starting the server and navigating to the localhost page, you will be greeted by the interface.  The ;left column contains all of the tasks, along with their times, that you can assign a bot to do.  After a task has been completed by a bot, the task will highlight in a green color and a bot will not be able to choose that task for completion again.

To the right of the task list, you will find a list of all bots created.  This contains their information, namely their name and their type (see below types). 

Below this, is the form where the bot is actually created.  You can input the name, select the type from the list, and assign the robot to the task.  As soon as you do this, the time required from the task list will start counting down (in milliseconds).  Once it reaches 0, the task will highlight in a green color.

While a bot is working, if you try to re-assign it to another task you will be greeting with an alert that says you must wait until the bot is finished.  When the bot is finished, to assign the bot to another task you can simply type the name of the bot in the NAME field.  This will recognize if you want to add a new bot or update an existing one.  Here, you can also change the type of the bot and then assign it to another task.

Below the add bot section, there is an add task section.  This asks you for the task name and the time required for completion.  Once you add the task, you will see it in the left column in the task list.

Lastly, there is a leaderboard of all the bots.  Once you create a bot and assign it to a task, it starts with a score of 0.  Once it finishes the task, its score increases by the amount of milliseconds the task took.  Higher bots are higher on the leaderboard.  


# BOT-O-MAT
Use any language to complete this challenge. The implementation is up to you: it can be a command-line application or have a graphical interface.

Your application should collect a name and robot type from the types we list below. For each, it should create a Robot of the type the user chooses, e.g. Larry, Bipedal. 

Given the list of tasks below, your application should then assign the Robot a set of five tasks, all of which complete after a duration that we show in milliseconds. 



- Collect a name and robot type from user.
- Instantiate a Robot of the type provided by the user with the name provided by the user
  - for example: Bipedal, Larry
- Set up methods on Robot to complete tasks from the provided list

## Robot
Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

## Tasks
Tasks have a description and an estimated time to complete.

```
[
  {
    description: 'do the dishes',
    eta: 1000,
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
]
```

## Types
```
{ 
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
}
```

## Features to add once the core functionality is complete
Be creative and have fun! Use this list or create your own features.
- Allow users to create multiple robots at one time
- Create a leaderboard for tasks completed by each Robot
- Create tasks specific for each robot type, this could work in conjunction with the leaderboard. For e.g. robots that are assigned tasks that their type can’t perform won’t get “credit” for finishing the task.
- Add persistance for tasks, bots and leaderboard stats


## Authors
- Scott Hoffman <https://github.com/scottshane>
- Olivia Osby <https://github.com/oosby>
