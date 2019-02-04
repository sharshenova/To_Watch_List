import React, { Component } from 'react';
import './AddTaskForm.css';

class AddTaskForm extends Component {
	render() {
		return (
			<div className='container'>
				<div className="form-group mt-3 mb-3">
					<label htmlFor="taskInput">To Do List</label>
					<input type="text" className="form-control" id="taskInput" placeholder="Task name" onChange={this.props.functionOnChange} value={this.props.text}/>
				</div>
				<button type="submit" className="btn btn-primary" onClick={this.props.functionOnClick}>Add task</button>
			</div>
		);
	}
}

export default AddTaskForm;