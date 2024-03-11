import React, { Fragment, useEffect } from 'react';
import { getRatingsForBook } from '../hooks';
import './Ratings.scss';
import List from '../../Club/Charts/List/List';

const Ratings = ({ 
	bookId, 
	clubId, 
	averageRatingState, 
	bookRatings, 
	updateRatings,
	setBookRatings,
	setAverageRatingState,
}) => {

	useEffect(() => {
		async function refreshRatings() {
			try {
				const ratingsResult = await getRatingsForBook(bookId, clubId);
				setBookRatings(ratingsResult);
				const newAverageRating = ratingsResult.reduce((acc, rating) => {
					return acc + rating.rating;
				}, 0) / ratingsResult.length;
				setAverageRatingState(newAverageRating);
			} catch (err) {
				console.log('error getting ratings:', err);
			}
		};
		if (updateRatings) {
			refreshRatings();
		}
	}, [updateRatings, setBookRatings, setAverageRatingState, bookId, clubId]);

	console.log('bookRatings:', bookRatings);

	return (
		<>
			{ bookRatings?.length === 0 ? (
				<em>No ratings yet</em>
			) : (
				<Fragment>
					<List
						data={bookRatings}
						title={null}
						type="user"
						homePage
					/>
					<div className="average-rating">
						<div className="average-rating-text">Average rating:</div>
						<p className={`rating-number average-rating-number rating-${Math.floor(averageRatingState)}`}>
								{averageRatingState?.toFixed(2)}
						</p>
					</div>
				</Fragment>
			)}
		</>
	)
}

export default Ratings;
