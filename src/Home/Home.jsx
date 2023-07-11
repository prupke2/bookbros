import React, { useState } from 'react';
import './Home.scss';

import Navbar from '../Navbar/Navbar';
import Books from '../Books/Books';
import BookSearch from '../BookSearch/BookSearch';
import { useSearchParams } from "react-router-dom";

const Home = () => {
	const brandDefault = localStorage.getItem('Book Bros Brand') || 'Book Bros';
	const [brand, setBrand] = useState(brandDefault);

	const [searchParams, setSearchParams] = useSearchParams();
	const bookSearch = searchParams.get('book_search');

	const clubIdParam = searchParams.get('club_id');
	const [clubId, setClubId] = useState(clubIdParam || localStorage.getItem("bookbros_club_id") || null);

	const [currentTab, setCurrentTab] = useState(bookSearch ? 'Add a book' : 'Home'); 

	if (!clubId && clubIdParam) {
		setClubId(clubIdParam);
		localStorage.setItem("bookbros_club_id", clubId);
		// remove the club_id param but keep it in local storage
		window.history.replaceState(null, '', window.location.pathname);
	}

	return (
		<main>
			<Navbar 
				brand={brand}
				setBrand={setBrand}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
			{currentTab === 'Home' && (
				<Books 
					brand={brand}
					clubId={clubId}
				/>
			)}
			{currentTab === 'Add a book' && (
				<BookSearch 
					searchParams={searchParams}
					setSearchParams={setSearchParams}
					setCurrentTab={setCurrentTab}
				/>
			)}
		</main>
	);
}

export default Home;
