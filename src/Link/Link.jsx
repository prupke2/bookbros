import React, {FC} from 'react';
import './Link.scss';

const Link = ({text, url}) => (
	<a href={url} className='rounded-link'>
		{text}
	</a>
);

export default Link;
