import React, { Component } from 'react';
import './App.css';
import Task from './Task/Task';
import AddTaskForm from "./AddTaskForm/AddTaskForm"


class App extends Component {

	state = {
		tasks: [],
		currentTask: {text: ''},
	};


	componentDidMount() {
		// получаем сохраненные элементы из localStorage
		const savedTasks = localStorage.getItem("savedTasks");
		if (savedTasks) {
			console.log(savedTasks);
			const tasks = JSON.parse(savedTasks);
			this.setState({tasks: tasks});
		};
	};


	updateTask = (event, id) => {
		const tasks = [...this.state.tasks];

		tasks.forEach(task => {
			if (task.id === id) {
				task.text = event.target.value;
				console.log("обновлено")
			}
		});

		this.setState({tasks: tasks});
		// сохраняем элементы в localStorage
		localStorage.setItem('savedTasks', JSON.stringify(tasks));
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
		this.setState({currentTask: {text: ''}});
		// сохраняем элементы в localStorage
		localStorage.setItem('savedTasks', JSON.stringify(tasks));
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
		// сохраняем элементы в localStorage
		localStorage.setItem('savedTasks', JSON.stringify(tasks));		
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
								change={this.updateTask}
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
