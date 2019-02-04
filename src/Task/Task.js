import React, { Component } from 'react';
import './Task.css';

var FontAwesome = require('react-fontawesome');

class Task extends Component {
	render() {
		return (
			<div className="task">
				<div class="alert alert-info" role="alert">
					{this.props.text}
				</div>
				<div>
					<FontAwesome
						className='super-crazy-colors'
						name='delete'
						size='2x'
						style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
					/>
				</div>
			</div>
		)
	}
}


export default Task;