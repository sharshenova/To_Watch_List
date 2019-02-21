import React, { Component } from 'react';
import './Task.css';


class Task extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.text!== this.props.text) {
			console.log("да");
			return true;
		}
		else {
			console.log("нет");
			return false;
		}
	};

	render() {
		return (
			<div className="container">
				<div className="Task form-row mt-3">
					<div className="form-group col-md-11">
						<input type="text" className="form-control" id="taskInput" onChange={(event)=>{this.props.change(event, this.props.id)}} value={this.props.text}/>
					</div>
					<div className = "form-group col-md-1" onClick={() => {this.props.delete(this.props.id)}}>
						<i className="far fa-trash-alt fa-2x"></i>
					</div>
				</div>
			</div>
		)
	}
}

export default Task;