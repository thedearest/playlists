import App from '../components/App';
import React from 'react';
import ReactDOM from 'react-dom';

describe('App', () => {
	it('renders without crashing', () => {
	    const div = document.createElement('div');
	    ReactDOM.render(<App/>, div);
	});
});