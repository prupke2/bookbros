import React, { useState, useEffect } from 'react';
import Book from '../Books/Book/Book';
const Books = ({ brand, books, ratings, clubId }) => {
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

	return (
		<>
			<img id="logo" className="logo-appear" src={brandFileName} alt={brand} />
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
								<li key={index}>
									{ index === 0 && (
										<div className="book-text current-book-text">
											| Current book |
										</div>
									)}
									<Book
										book={book}
										ratings={ratings}
										clubId={clubId}
									/>
									{ (index === 0 && books.length > 1) &&
										<div className="book-text previous-books">| Previous books |</div>
									}
								</li>
							);
						}
					)}
				</ul>
			)}
		</>
	);
}

export default Books;
