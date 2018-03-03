import React from 'react';
import { EditBtn, DeleteBtn } from './Buttons';

const ListItem = (props) => (
	<div className="list-item">
		<div className="list-item__number">1</div>
		<div className="list-item__artist">Artist</div>
		<div className="list-item__song">Song</div>
		<div className="list-item__genre">Genre</div>
		<div className="list-item__rating">4 Stars</div>
		<div className="list-item__link">
			<a href="#">Youtube link</a>
		</div>
		<div className="list-item__link">
			<a href="#">SC Link</a>
		</div>
		<div className="list-item__btn-wrapper">
			<EditBtn/>
		</div>
		<div className="list-item__btn-wrapper">
			<DeleteBtn/>
		</div>
	</div>
);

export default ListItem;