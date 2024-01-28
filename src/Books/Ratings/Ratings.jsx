import React, { useEffect } from 'react';
import { getRatingsForBook } from '../hooks';
import './Ratings.scss';

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

	return (
		<>
			<ul className="ratings ">
				{ bookRatings?.length === 0 && (
					<li><em>No ratings yet</em></li>
				)}
				{ bookRatings?.map((rating, i) => (
					<li 
						key={i}
						className="rating"
					>
						<span className="name opaque-background">{ rating.name }</span>:
						<span className={`rating-number rating-${Math.floor(rating.rating)}`}>
							{ rating.rating }
						</span>
						{ rating.notes && (
							<>
								&nbsp;💬
								<span className="rating-notes">
									{ rating.notes }
								</span>
							</>
						)}
					</li>
				))}
			</ul>
			{ bookRatings?.length > 0 && (
				<div className="average-rating">
					<div className="average-rating-text">Average rating:</div>
					<p className={`rating-number average-rating-number rating-${Math.floor(averageRatingState)}`}>
							{averageRatingState?.toFixed(2)}
					</p>
				</div>
			)}
		</>
	)
}

export default Ratings;
