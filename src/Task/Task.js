import React, { Component } from 'react';
import './Task.css';


class Task extends Component {
	render() {
		return (
			<div className="container">
				<div className="alert alert-info text-left col-4 overflow:hidden" role="alert">
					{this.props.text}
					<div className = "d-inline-block float-right" onClick={() => {this.props.delete(this.props.id)}}>
						<i className="far fa-trash-alt fa-lg"></i>
					</div>
				</div>
			</div>
		)
	}
}

export default Task;