import React, { useState, useEffect } from 'react';
import './Home.scss';

import Navbar from '../Navbar/Navbar';
import Books from '../Books/Books';
import BookSearch from '../BookSearch/BookSearch';
import { getBooks, getRatings } from '../Books/hooks';
import Loading from '../Loading/Loading';

const Home = () => {
	const brandDefault = localStorage.getItem('Book Bros Brand') || 'Book Bros';
	const [brand, setBrand] = useState(brandDefault);
	const [books, setBooks] = useState(null);
	const [ratings, setRatings] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const [updateClub, setUpdateClub] = useState(true);
	const [refreshBooks, setRefreshBooks] = useState(false);

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const clubIdParam = urlParams.get('club_id');
	const [clubId, setClubId] = useState(clubIdParam || localStorage.getItem("bookbros_club_id") || null);

	const currentTabLocalStorage = localStorage.getItem("bookbros_current_tab");
	const [currentTab, setCurrentTab] = useState(currentTabLocalStorage || 'Home'); 
	const setTab = (tab) => {
		setCurrentTab(tab);
		localStorage.setItem("bookbros_current_tab", tab);
	}

	if (clubIdParam && updateClub) {
		setClubId(clubIdParam);
		localStorage.setItem("bookbros_club_id", clubId);
		// remove the club_id param but keep it in local storage
		window.history.replaceState(null, '', window.location.pathname);
		setUpdateClub(false);
	}

	useEffect(() => {
		async function fetchBooks() {
			try {
				const booksResult = await getBooks(clubId);
				setBooks(booksResult);
				const ratingsResult = await getRatings(clubId);
				setRatings(ratingsResult);
			} catch (error) {
				console.log('error:', error);
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		if (refreshBooks || (!books && currentTab === 'Home')) {
			setRefreshBooks(false);
			fetchBooks();
		}
	}, [clubIdParam, clubId, currentTab, books, refreshBooks]);

	return (
		<main>
			<Navbar 
				brand={brand}
				setBrand={setBrand}
				currentTab={currentTab}
				setTab={setTab}
			/>
			{currentTab === 'Home' && (
				<>
					{ isLoading && <Loading /> }
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
							setTab={setTab}
							setRefreshBooks={setRefreshBooks}
						/>
					)}
				</>
			)}
		</main>
	);
}

export default Home;
