import React, { useState, useEffect } from 'react';
import './Home.scss';

import Navbar from '../Navbar/Navbar';
import Books from '../Books/Books';
import BookSearch from '../BookSearch/BookSearch';
import { getBooks, getRatings } from '../Books/hooks';
import Loading from '../Loading/Loading';
import Club from '../Club/Club';

const Home = () => {
	const brandDefault = localStorage.getItem('Book Bros Brand') || 'Book Bros';
	const [brand, setBrand] = useState(brandDefault);
	const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || []);
	const [ratings, setRatings] = useState(JSON.parse(localStorage.getItem('ratings')) || []);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const [updateClub, setUpdateClub] = useState(true);
	const [refreshBooks, setRefreshBooks] = useState(true);

	const ready = !error && !isLoading;

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const clubIdParam = urlParams.get('club_id');
	const [clubId, setClubId] = useState(clubIdParam || localStorage.getItem("bookbros_club_id") || "U3L6s1AJDB");

	const currentTabLocalStorage = localStorage.getItem("bookbros_current_tab");
	const [currentTab, setCurrentTab] = useState(currentTabLocalStorage || 'Home'); 
	const setTab = (tab) => {
		setCurrentTab(tab);
		window.scrollTo(0, 0);
		localStorage.setItem("bookbros_current_tab", tab);
	};

	if (clubIdParam && updateClub) {
		setClubId(clubIdParam);
		localStorage.setItem("bookbros_club_id", clubId);
		// remove the club_id param but keep it in local storage
		window.history.replaceState(null, '', window.location.pathname);
		setUpdateClub(false);
		setRefreshBooks(true);
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
			}
		};
		
		if (refreshBooks && currentTab === 'Home') {
			fetchBooks();
			setRefreshBooks(false);
		}
		setIsLoading(false);
	}, [clubIdParam, clubId, currentTab, books, ratings, refreshBooks]);

	return (
		<main>
			<Navbar 
				brand={brand}
				setBrand={setBrand}
				currentTab={currentTab}
				setTab={setTab}
			/>
			{ isLoading && <Loading /> }
			{ error && (
				<div className="error">
					{error}
				</div>
			)}

			{currentTab === 'Home' && ready && (
				<Books 
					brand={brand}
					books={books}
					ratings={ratings}
					clubId={clubId}
					setRefreshBooks={setRefreshBooks}
				/>
			)}

			{currentTab === 'Add a book' && ready && (
				<BookSearch 
					setTab={setTab}
					setRefreshBooks={setRefreshBooks}
				/>
			)}

			{currentTab === 'Club' && ready && (
				<Club
					brand={brand}
				/>
			)}
		</main>
	);
}

export default Home;
