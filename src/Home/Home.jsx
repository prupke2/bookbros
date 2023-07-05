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

	const [currentTab, setCurrentTab] = useState(bookSearch ? 'Add a book' : 'Home'); 

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
				/>
			)}
			{currentTab === 'Add a book' && (
				<BookSearch 
					searchParams={searchParams}
					setSearchParams={setSearchParams}
				/>
			)}
		</main>
	);
}

export default Home;
