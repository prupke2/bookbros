import React, { useEffect } from 'react';
import '../Books.scss';
import RatingForm from '../RatingForm/RatingForm';
import { useState } from 'react';
import Ratings from '../Ratings/Ratings';
import { BookTitleAndAuthor } from '../../Components/Components';

const Book = ({ book, ratings, clubId }) => {
	const { bookId, user, author, title, averageRating } = book;
	const [updateRatings, setUpdateRatings] = useState(false);
	const [ratingFormOpen, setRatingFormOpen] = useState(false);
	const [bookRatings, setBookRatings] = useState(ratings);
	const [averageRatingState, setAverageRatingState] = useState(averageRating);

	useEffect(() => {
		setBookRatings(ratings);
	}, [setBookRatings, ratings]);

	return (
		<section>
			<figure className="book-cover" id={bookId}>	
				<div 
					className="book-cover-link"
					onClick={() => setRatingFormOpen(!ratingFormOpen)}
				>
					<span className='selected-by'>
						Selected by <span className='name opaque-background'>{user}</span>
					</span>
					<span 
						className="book-image"
						title="Click to add a rating"
					>
						<img src={`https://books.google.com/books/content/images/frontcover/${bookId}?fife=w1200-h800`}
							alt={`${title} by ${author} (No book cover available)`} />
					</span>
				</div>
			
				<figcaption>
							
					<button
						type="button"
						className="rounded-link add-rating"
						id = {`form-${title}-button`}
						onClick={() => setRatingFormOpen(!ratingFormOpen)}
					>
						Add rating
					</button>

					<div className={`rating-form-wrapper ${ratingFormOpen && 'form-show'}`} id={`form-${title}-button`}>
						<RatingForm
							book={book}
							bookId={bookId}
							clubId={clubId}
							open={ratingFormOpen}
							setRatingFormOpen={setRatingFormOpen}
							bookRatings={bookRatings}
							setUpdateRatings={setUpdateRatings}
							setAverageRatingState={setAverageRatingState}
						/>
					</div>
				</figcaption>
			</figure>

			<div className="book-details-and-ratings">
				<BookTitleAndAuthor
					title={title}
					author={author}
				/>
				<Ratings
					bookId={bookId}
					clubId={clubId}
					averageRatingState={averageRatingState}
					bookRatings={bookRatings}
					updateRatings={updateRatings}
					setBookRatings={setBookRatings}
					setAverageRatingState={setAverageRatingState}
				/>
			</div>
		</section>
	);
}

export default Book;
