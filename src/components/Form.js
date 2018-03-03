import React, { Component } from 'react';
import '../styles/Form.scss';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'default artist name',
			song: 'song title',

		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange() {
		const target = event.target;
		name = target.name;
		this.setState({
      [name]: value
    });

	}

	render() {
		return (
			<div className="form-wrapper">
				<form className="form">
					<input 
						className="form__input"
						type="text"
						name="artist"
						placeholder="Artist"
						onChange={this.handleInputChange}
					/>	
					<input 
						className="form__input"
						type="text"
						name="song"
						placeholder="Song Title"
						onChange={this.handleInputChange}
					/>
					<input 
						className="form__input form__genre"
						type="text"
						name="genre"
						placeholder="Genre"
						onChange={this.handleInputChange}
					/>
					<select className="form__select">
						<option label="Star Rating">Select your city</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<button 
						className="form__btn"
						onClick={this.handleInputChange}
					>Add</button>										
				</form>
			</div>
		)
	}
}	

export default Form;