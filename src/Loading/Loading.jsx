import React from 'react';
import './Loading.scss';

const Loading = () => (
	<div className="loading-wrapper">
		<div className="loader book">
			<figure className="page" />
			<figure className="page" />
			<figure className="page" />
		</div>

		<div className='loading'>Loading</div>
	</div>
);

export default Loading;
