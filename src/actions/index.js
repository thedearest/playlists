import { ADD_TO_LIST, UPDATE_LIST, DELETE_LIST } from '../constants';

export function addToList(id, artist, song, genre) {
	return {
		type: ADD_TO_LIST,
		id,
		payload: {
			content: {
				id,
				artist,
				song,
				genre
			}
		}
	}
}

export function updateList(id, artist, song, genre) {
	return {
		type: UPDATE_LIST, 
		id, 
		payload: {
			content: {
				artist, 
				song, 
				genre
			}
		}
	}	
}

export function deleteList(id) {
	return {
		type: DELETE_LIST,
		id
	}
}
