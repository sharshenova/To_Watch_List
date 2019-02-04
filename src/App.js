import React, { Component } from 'react';
import './App.css';
import Task from './Task/Task';
//import AddTaskForm from "./AddTaskForm/AddTaskForm"


class App extends Component {
	state = {
		tasks: [
			{id: 1, text: 'To clean up'},
			{id: 2, text: 'To do HW'},
			{id: 3, text: 'To call sister'}
		],
		currentTask: {text: ''},
	};

	render() {
		return (
			<div className="App">
				<div>
					{
						this.state.tasks.map((task) => {
							return <Task key={task.id} id={task.id} text={task.text}/>
							}
						)
					}
				</div>
			</div>
		)
	}

};

export default App;
