import React from 'react';

export const EditBtn = () => (
	<button className="edit">Edit</button>
);

export const DeleteBtn = () => (
	<button 
		className="delete"
		onClick={toggle()}
	>Delete</button>
);
