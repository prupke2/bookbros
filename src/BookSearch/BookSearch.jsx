import React, { useEffect, useState } from 'react';
import './BookSearch.scss';
import { fetchGoogleBooks } from './hooks';
import BookResult from './BookResult/BookResult';
import Loading from '../Loading/Loading';

const BookSearch = ({ searchParams, setSearchParams, setCurrentTab }) => {
	const bookSearch = searchParams.get('book_search');
	const [bookResults, setBookResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const noResults = bookSearch !== null && bookResults?.length === 0 && !isLoading;

	useEffect(() => {
		if (bookSearch) {
			setIsLoading(true);
			fetchGoogleBooks(bookSearch, setBookResults, setIsLoading);
		}
	}, [bookSearch]);	

	return (
		<div>
			{ !bookSearch &&
				<>
					<h2>Add a book</h2>
					<p className="tinted-background">Search by title, author, or both.</p>
				</>	
			}
			
			<form id="book_search_form" onSubmit={(e) => setSearchParams(e.target.value)}>
				<input type="text" id="book_search" name="book_search" required />
				<input className="rounded-link solid-link" type="submit" value="Search books" />
			</form>

			{ isLoading && <Loading /> }

			{ noResults && !isLoading && (
				<p>
					No results found for {bookSearch}
				</p>
			)}

			{ (bookSearch && bookResults && !isLoading) && (
				<>
					<p className="tinted-background">
						Showing results for "{bookSearch}". Now select a book for your club!
					</p>
					<ul id="book-search-results">
						{bookResults.map(book => (
							<BookResult
								key={book.id}
								result={book}
								setCurrentTab={setCurrentTab}
							/>
						)
						)}
					</ul>
				</>
			)}

		</div>
	);
}

export default BookSearch;
