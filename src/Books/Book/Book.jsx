import React, { useEffect } from 'react';
import '../Books.scss';
import RatingForm from '../RatingForm/RatingForm';
import { useState } from 'react';
import { getRatingsForBook } from '../hooks';

const Book = ({ book, clubId }) => {
	const objectId = book.id;
	const bookId = book.get('book_id');
	const user = book.get('user');
	const author = book.get('author');
	const title = book.get('title');
	const averageRating = book.get('average_rating');

	const [bookRatings, setBookRatings] = useState([]);
	const [ratingFormOpen, setRatingFormOpen] = useState(false);

	useEffect(() => {
		async function getRatings() {
			try {
				const ratingsResult = await getRatingsForBook(bookId, clubId);
				setBookRatings(ratingsResult);
			} catch (error) {
				console.log('error:', error);
				// setError(error)
			}
		};
		getRatings();
	}, [bookId, clubId]);

	return (
		<li>
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
								objectId={objectId}
								title={title}
								open={ratingFormOpen}
								setRatingFormOpen={setRatingFormOpen}
							/>
						</div>
					</figcaption>
				</figure>

				<div className="book-details-and-ratings">
					<ul>
						<li className='book-title-wrapper'>
							<span className="book-title">{title}</span>
						</li>
						{ author && (
							<li className='book-author-wrapper'>
								<span className="by">by</span>
								<span className="book-author">{author}</span>
							</li>
						)}
					</ul>
					<ul className="ratings">
						{ bookRatings.length === 0 && (
							<li><em>No ratings yet</em></li>
						)}
						{ bookRatings?.map(rating => (
							<li className="rating">
								<p className="name opaque-background">{rating.get('name')}</p>:
								<span className={`rating-number rating-${Math.floor(rating.get('rating'))}`}>
									{rating.get('rating')}
								</span>	
								{ rating.get('notes') && (
									<>
										&nbsp;📖
										<span className="rating-notes">
											{ rating.get('notes') }
										</span>	
									</>
								)}
							</li>
						))}
						{ bookRatings.length > 0 && (
							<li className="average-rating">
								<div className="average-rating-text">Average rating:</div>
								<p className={`rating-number average-rating-number rating-${Math.floor(averageRating)}`}>
										{averageRating?.toFixed(2)}
								</p>
							</li>
						)}

						{/* // <li>
						// 	<div className="search-links book-search-links">
						// 		<a className="rounded-link fixed-width-link" href="https://www.amazon.com/s?k=<%= book.title %>+<%= book.author %>
						// 			&ref=as_li_tl?ie=UTF8&tag=bookbros03-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=1405206276"
						// 		target="_blank">
						// 			<img className="icon" src="/assets/amazon_icon.png" alt=""> 
						// 			<span className="text-after-icon">Amazon search</span>
						// 		</a>
						// 		<a className="rounded-link fixed-width-link" href="https://books.google.ca/books?id=<%= book.book %>"
						// 		target="_blank">
						// 			<img className="icon" src="/assets/google_icon.png" alt=""> 
						// 			<span className="text-after-icon">Google search</span>
						// 		</a>
						// 		<a className="rounded-link fixed-width-link" href="https://www.torontopubliclibrary.ca/search.jsp?Ntt=<%= book.title %>+<%= book.author %>" target="_blank">
						// 			<img className="icon library" src="/assets/library_icon.svg" alt=""> 
						// 			<span className="text-after-icon">Library search</span>
						// 		</a>
						// 	</div>
						// </li> */}
						
					</ul>
				</div>
			</section>
		</li>
	);
}

export default Book;
