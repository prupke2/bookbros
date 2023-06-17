import React, {FC} from 'react';
import './Link.scss';

interface Props {
	url: string;
	text: string;
}

const Link: FC<Props> = ({text, url}) => (
	<a href={url} className='rounded-link'>
		{text}
	</a>
);

export default Link;
