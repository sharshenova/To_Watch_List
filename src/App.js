import React, { Component } from 'react';
import './App.css';
import Task from './Task/Task';
import AddTaskForm from "./AddTaskForm/AddTaskForm"


class App extends Component {
	state = {
		tasks: [
			{id: 1, text: 'To clean up'},
			{id: 2, text: 'To do HW'},
			{id: 3, text: 'To call sister'}
		],
		currentTask: {text: ''},
	};

	addTaskToCurrent = (event) => {
			 this.setState({currentTask: {text: event.target.value}});
	};

	addTask = () => {
				const newTask = this.state.currentTask;
				const tasks = [...this.state.tasks];

				var now = new Date();
				var new_id = now.getTime();

				tasks.push({id: new_id, text: newTask.text});
				this.setState({tasks});
				this.setState({currentTask: {text: ''}})
	};

	deleteTask = (id) => {
		let taskId = this.state.tasks.findIndex(task => {
				return task.id === id;
		});

		const tasks = [...this.state.tasks];
		tasks.splice(taskId, 1);

		this.setState({
				...this.state,
				tasks
		});
	};

	render() {
		return (
			<div className="App">
				<AddTaskForm
					functionOnChange={this.addTaskToCurrent}
					functionOnClick={this.addTask}
					text={this.state.currentTask.text}/>
				<div>
					{
						this.state.tasks.map((task) => {
							return <Task 
								key={task.id} 
								id={task.id}
								text={task.text}
								delete={this.deleteTask}
							/>
						}
						)
					}
				</div>
			</div>
		)
	}

};

export default App;
