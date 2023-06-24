import React, { useState } from 'react';
import Link from '../Link/Link';
import './Home.scss';
import Book from '../Books/Book';
import { getBooks, getBook } from './hooks';
import { useEffect } from 'react';

const Home = () => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true)

	const fetchBooks = async () => {
		try {
			const result = await getBooks();
			setBooks(result);
		} catch (error) {
			setError(error)
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	// TO DO: improve loading and error states
	if (isLoading) {
		return "waiting..."
	}
	if (error) {
		return "error"
	}

	if (!isLoading && !error) {
		return (
			<main>
			{/* <% if session['brand'] == 'Book Babes' %>
				<img id="logo" className="logo-appear" src="/assets/bookbabes_logo.png" alt="Book Babes">
			*/}
				<img id="logo" className="logo-appear" src="bookbros_logo.png" alt="Book Bros" />
				<div className="button-group">
					<Link 
						url="/search"
						text="Find a book"
					/>
				</div>
				{ !books.length && (
					<div className="empty empty-short">
						<div>Your club hasn't added any books yet!</div>
					</div>
				)}
				{ books.length && (
					<ul>
						{books?.map(
							(book, index) => {
								return (
									<>
										{ index === 0 && (
											<div className="book-text current-book-text">
												| Current book |
											</div>
										)}
										<Book
											book={book}
										/>
										{ (index === 0 && books.length > 1) &&
											<div className="book-text previous-books">| Previous books |</div>
										}
									</>
								);
							}
						)}
					</ul>
				)}

				<div className='what-is'>
					<Link url="/about" text="What is BookBros?" />
				</div>
				<div className="empty">
					<div className="button-group">
						<Link url='/clubs' text = 'Start a club now' />
						<Link url='/books' text = 'Try a quick demo' />	
					</div>
				</div>
		</main>
		)
	};
}

export default Home;
