import React, { useState } from 'react';
import './BookSearch.scss';
import { fetchGoogleBooks } from './hooks';
import BookResult from './BookResult/BookResult';
import Loading from '../Loading/Loading';

const BookSearch = ({ setTab, setRefreshBooks }) => {
	const [bookSearch, setBookSearch] = useState(null);
	const [bookResults, setBookResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [lastBookSearch, setLastBookSearch] = useState(null);

	const noResults = lastBookSearch !== null && bookResults?.length === 0 && !isLoading;
	const showResults = bookSearch !== null && bookResults && !isLoading;

	const searchBooks = async (event) => {
		event.preventDefault();
		setLastBookSearch(bookSearch);
		setIsLoading(true);
		try {
			fetchGoogleBooks(bookSearch, setBookResults);
		} catch (err) {
			console.log('Error fetching books:', err);
		} finally {
			setTimeout(() => {
				setIsLoading(false);
			}, 700);
		}
	}

	const handleSearchInput = (search) => {
		setBookSearch(search);
	}

	return (
		<div>
			{ lastBookSearch === null &&
				<>
					<p className="book-search-feedback">Search by title, author, or both.</p>
				</>	
			}
			
			<form id="book_search_form" onSubmit={(event) => searchBooks(event)}>
				<input 
					type="text" 
					id="book_search" 
					name="book_search" 
					onInput={(event) => handleSearchInput(event.target.value) }
					required 
				/>
				<input className="rounded-link solid-link" type="submit" value="Search books" />
			</form>

			{ isLoading && <Loading /> }

			{ noResults && (
				<p>
					No results found for {lastBookSearch}
				</p>
			)}

			{ showResults && (
				<>
					{ lastBookSearch &&
						<p className="book-search-feedback">
							Showing results for "{lastBookSearch}". Now select a book for your club!
						</p>
					}
					<ul id="book-search-results">
						{bookResults.map(book => (
							<BookResult
								key={book.id}
								result={book}
								setTab={setTab}
								setRefreshBooks={setRefreshBooks}
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
