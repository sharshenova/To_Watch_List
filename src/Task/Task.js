import React, { Component } from 'react';
import './Task.css';


class Task extends Component {
	render() {
		return (
			<div className="container">
				<div className="alert alert-info text-left col-4" role="alert">
					{this.props.text}
					<div className = "text-right">
						<i className="far fa-trash-alt fa-lg"></i>
					</div>
				</div>
			</div>
		)
	}
}


export default Task;