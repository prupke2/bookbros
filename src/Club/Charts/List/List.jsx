import React, { Fragment } from 'react';
import './List.scss';
import { AverageRating, BookTitleAndAuthor } from '../../../Components/Components';

const ListItem = ({ item, type, homePage }) => {
	if (type === 'user') {
		const ratingType = homePage ? 'rating' : 'averageRating';
		return (
			<Fragment>
				<li className='list-item-wrapper rating'>
					<div className='name opaque-background'>{item.name}:</div>&nbsp;
					<AverageRating averageRating={item[ratingType]} />
					{ homePage && item.notes && (
						<div className='hidden-rating'>
							&nbsp;💬
							<div className="rating-notes">
								{ item.notes }
							</div>
						</div>
					)}
				</li>
				<li className='list-spacer' />
			</Fragment>
		);
	}
	if (type === 'book') {
		return (
			<BookTitleAndAuthor
				title={item.title}
				author={item.author}
				averageRating={item.averageRating}
				sameLine
			/>
		)
	}
	if (type === 'rating') {
		return (
			<li>
				<AverageRating averageRating={item.averageRating} />
				<div className='list-spacer'></div>
			</li>
		);
	}
};

const List = ({ data, title, type, homePage = false }) => (
	<div className='list-wrapper'>
		<h3>{title}</h3>
		<ul className='list'>
			{ data?.map((item, i) => (
				<ListItem
					key={i}
					item={item}
					type={type} 
					homePage={homePage}
				/>
			))}
		</ul>
	</div>
);

export default List;
