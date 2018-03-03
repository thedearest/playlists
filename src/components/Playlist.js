import React, { Component } from 'react';
import { connect } from 'react-redux';
import { YOU_TUBE_LINK, SOUND_CLOUD_LINK } from '../constants';
import { addToList } from '../actions';
import Song from './Song';
import Title from './Title';
import TableHead from './TableHead';
import store from '../store';
import { v4 } from 'uuid';

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addNewSong: false
		}
		this.splitAndJoin = this.splitAndJoin.bind(this);
		this.fetchInfo = this.fetchInfo.bind(this);
		this.toggleAddSong = this.toggleAddSong.bind(this);
		this.addSong = this.addSong.bind(this);		
	}

	splitAndJoin(str, sign) {
	  return str.split(' ').join(sign);
	}

	fetchInfo(artist, sign = '+', song) {
	  const fetchedInfo = this.splitAndJoin(artist, sign) + 
	  sign + this.splitAndJoin(song, sign);
	  return fetchedInfo.toLowerCase();
	}

	toggleAddSong() {
		this.setState(prevState => ({
			addNewSong: !prevState.addNewSong
		}))
		console.log(this.state.addSong);
	}

	addSong() {
		store.dispatch(addToList(
			v4(), 
			this.newArtist.value, 
			this.newSong.value, 
			this.newGenre.value
		));
	}

	render() {
		return (
			<div className="container">
				<Title text="My playlist"/>
				<table className="table table-hover">
					<TableHead/>
					<tbody>
						{this.props.data.byId.map((item) => {	
							const {artist, song, genre} = this.props.data.byHash[item].content;
							return <Song
								key={item}
								index={item}
								artist={artist}
								song={song}
								genre={genre}
								videoLink={YOU_TUBE_LINK + this.fetchInfo(artist, '+', song)}
								musicLink={SOUND_CLOUD_LINK + this.fetchInfo(artist, '%20', song)}
							/>
						})}
						{
							this.state.addNewSong ? 
							<tr>
								<th><input type="text" ref={(input) => {this.newArtist = input}}/></th>
								<th><input type="text" ref={(input) => {this.newSong = input}}/></th>
								<th><input type="text" ref={(input) => {this.newGenre = input}}/></th>
								<th><button onClick={this.addSong}>Add</button></th>
							</tr> : null
						}
						<tr>
							<th>
								<button onClick={this.toggleAddSong}>{this.state.addNewSong ? 'Cancel' : 'Add song'}</button>
							</th>
						</tr>
					</tbody>
				</table>
			</div>		
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state
	}
}


export default connect(mapStateToProps)(Playlist);