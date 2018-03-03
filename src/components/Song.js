import React, { Component } from 'react';
import store from '../store';
import { updateList, deleteList } from '../actions';

class Song extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
		}
		this.showForms = this.showForms.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.deleteSong = this.deleteSong.bind(this);
	}

	showForms() {
		this.setState(prevState => ({
		  edit: !prevState.edit
		}));
	}

	handleUpdate() {
		this.showForms();
		console.log(store.getState());
		if (this.artist.value && this.song.value !== '' || undefined) {
			store.dispatch(updateList(this.props.index, this.artist.value, this.song.value, this.genre.value));
		}
		console.log(store.getState());
	}

	deleteSong() {
		store.dispatch(deleteList(this.props.index));
		console.log(store.getState());
	}

	render() {
		const editIsNotClicked = !this.state.edit
		return (
			<tr>
				<th>{editIsNotClicked ? this.props.artist : <input type="text" ref={(input) => {this.artist = input}}/>}</th>
				<th>{editIsNotClicked ? this.props.song : <input type="text" ref={(input) => {this.song = input}}/>}</th>
				<th>{editIsNotClicked ? this.props.genre : <input type="text" ref={(input) => {this.genre = input}}/>}</th>
				<th>
					<a href={this.props.videoLink}>Youtube</a>
				</th>
				<th>
					<a href={this.props.musicLink}>SoundCloud</a>
				</th>
				{this.state.edit ? 
					<th>
					 <button onClick={this.showForms}>Cancel</button>
					</th> : undefined
				}	
				<th>	
					<button onClick={this.handleUpdate}>{!this.state.edit ? 'Edit' : 'Save'}</button>
				</th>
				<th>
					<button onClick={this.deleteSong}>Delete</button>
				</th>	
			</tr>
		)
	}
}


export default Song;