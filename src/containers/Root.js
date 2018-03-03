import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from '../store';
import App from '../components/App';
console.log(store.getState());
store.dispatch({type: 'ADD_TO_LIST', id: 4, payload: {id: 4, content: {artist: 'M.J.', song: 'Black or White', genre: 'Pop/Rock'} } })
store.dispatch({type: 'UPDATE_LIST', id: 4, payload: {content: {artist: 'M.J.', song: 'White or Black', genre: 'Pop/Rock'} } })
store.dispatch({type: 'DELETE_LIST', id: 4});

console.log(store.getState());
const Root = () => (
	<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
		</Switch>
	</BrowserRouter>
	</Provider>
);

export default Root;