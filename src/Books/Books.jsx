import React, { useState, useEffect } from 'react';
import Book from '../Books/Book/Book';
import { Empty, Logo } from '../Components/Components';

const Books = ({ brand, books, ratings, clubId, setRefreshBooks }) => {
	const logo = document.querySelector("#logo");
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	// Show logo when at the top and
	// show faded logo if scrolled down a bit
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
			<Logo brand={brand} />
			{ !books.length ? <Empty /> :(
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
										ratings={ratings.filter(r => r.book_id === book.bookId)}
										clubId={clubId}
										setRefreshBooks={setRefreshBooks}
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
