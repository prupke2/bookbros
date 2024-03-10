import React, { Fragment } from 'react';
import './List.scss';
import { AverageRating } from '../../../Components/Components';

const List = ({ data, title }) => {
	return (
		<div className='list-wrapper'>
			<h3>Highest Average Rating</h3>
			<ul className='list'>
				{ data && data.map((item, i) => (
					<Fragment key={i}>
						<li className='list-item-wrapper' key={i}>
							<div className='name opaque-background'>{item.name}:</div>&nbsp;
							<AverageRating averageRating={item.averageRating} />
						</li>
						<li className='list-spacer' />
					</Fragment>
				))}
			</ul>
		</div>
	)
}

export default List;
