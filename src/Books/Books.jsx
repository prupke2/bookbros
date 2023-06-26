import React, { useState, useEffect } from 'react';
import Book from '../Books/Book/Book';
import { getBooks } from './hooks';

const Books = ({ brand }) => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true)
	const brandFileName = brand === 'Book Bros' ? 'bookbros_logo.png' : 'bookbabes_logo.png';
	
	const logo = document.querySelector("#logo");
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
			const position = window.pageYOffset;
			setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		if (scrollPosition > 40) {
			logo?.classList.remove("logo-appear");
		} else {
			logo?.classList.add("logo-appear");
		}
		return () => {
				window.removeEventListener('scroll', handleScroll);
		};
	}, [logo?.classList, scrollPosition]);
	
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
			<>
				<img id="logo" className="logo-appear" src={brandFileName} alt={brand} />
				{/* <div className="button-group">
					<Link 
						url="/search"
						text="Find a book"
					/>
				</div> */}
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
											key={index}
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

				{/* <div className='what-is'>
					<Link url="/about" text="What is BookBros?" />
				</div>
				<div className="empty">
					<div className="button-group">
						<Link url='/clubs' text = 'Start a club now' />
						<Link url='/books' text = 'Try a quick demo' />	
					</div>
				</div> */}
			</>
		);
	}
}

export default Books;
