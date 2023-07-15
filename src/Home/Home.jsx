import React, { useState, useEffect } from 'react';
import './Home.scss';

import Navbar from '../Navbar/Navbar';
import Books from '../Books/Books';
import BookSearch from '../BookSearch/BookSearch';
import { useSearchParams } from "react-router-dom";
import { getBooks, getRatings } from '../Books/hooks';

const Home = () => {
	const brandDefault = localStorage.getItem('Book Bros Brand') || 'Book Bros';
	const [brand, setBrand] = useState(brandDefault);
	const [books, setBooks] = useState([]);
	const [ratings, setRatings] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const [searchParams, setSearchParams] = useSearchParams();
	const bookSearch = searchParams.get('book_search');

	const clubIdParam = searchParams.get('club_id');
	const [clubId, setClubId] = useState(clubIdParam || localStorage.getItem("bookbros_club_id") || null);

	const [currentTab, setCurrentTab] = useState(bookSearch ? 'Add a book' : 'Home'); 

	if (clubIdParam) {
		setClubId(clubIdParam);
		localStorage.setItem("bookbros_club_id", clubId);
		// remove the club_id param but keep it in local storage
		window.history.replaceState(null, '', window.location.pathname);
	}

	useEffect(() => {
		async function fetchBooks() {
			try {
				const booksResult = await getBooks(clubId);
				setBooks(booksResult);
				const ratingsResult = await getRatings(clubId);
				setRatings(ratingsResult);
			} catch (error) {
				setError(error)
			} finally {
				setIsLoading(false);
			}
		};
		if (!books.length) {
			fetchBooks()
		}
	}, [clubId, books.length]);

	return (
		<main>
			<Navbar 
				brand={brand}
				setBrand={setBrand}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
			{currentTab === 'Home' && (
				<>
					{!error && !isLoading && (
						<Books 
							brand={brand}
							books={books}
							ratings={ratings}
							clubId={clubId}
						/>
					)}
				</>
			)}
			{currentTab === 'Add a book' && (
				<>
					{!error && !isLoading && (
						<BookSearch 
							searchParams={searchParams}
							setSearchParams={setSearchParams}
							setCurrentTab={setCurrentTab}
						/>
					)}
				</>
			)}
		</main>
	);
}

export default Home;
