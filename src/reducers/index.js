import redux from 'redux';
import { ADD_TO_LIST, UPDATE_LIST, DELETE_LIST, DELETE_ALL } from '../constants';

const initialState = {
	byId: [0,1,2],
	byHash: {
		0: {
			id: 0,
			content: {
				artist: 'Lorde',
				song: 'Melodrama',
				genre: 'Pop',
				videoLink: '',
				musicLink: ''
			}
		},
		1: {
			id: 1,
			content: {
				artist: 'Bobby S',
				song: 'Worldwide',
				genre: 'Hip-hop',
				videoLink: '',
				musicLink: ''
			}
		},
		2: {
			id: 2,
			content: {
				artist: 'Greaf',
				song: 'Macintosch',
				genre: 'Ambient',
				videoLink: '',
				musicLink: ''				
			}
		}
	}
}

// const initialState = {
// 	byId: [],
// 	byHash: {}
// }

const reducer = (state = initialState, action) => {
	const { type, id, payload } = action;
	switch(type) {
		case ADD_TO_LIST: {
      return {
        byId: [ ...state.byId, id],
        byHash: {
          ...state.byHash,
          [id]: payload
        }
      }
    }
    case UPDATE_LIST: {
    	state.byHash[id] = {
    		...state.byHash[id],
    		...payload
    	}
    	return {
    		...state
    	}
    }
    case DELETE_LIST: {
    	const prunedIds = state.byId.filter(item => {
    		return item !== id
    	})
    	delete state.byHash[id]

    	return {
    		byId: prunedIds,
    		byHash: state.byHash
    	}
    }
		default:	
			return state
	}
}

export default reducer;