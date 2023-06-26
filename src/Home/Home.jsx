import React, { useState } from 'react';
import './Home.scss';

import Navbar from '../Navbar/Navbar';
import Books from '../Books/Books';

const Home = () => {
	const brandDefault = localStorage.getItem('Book Bros Brand') || 'Book Bros';
	const [brand, setBrand] = useState(brandDefault);

	return (
		<main>
			<Navbar 
				brand={brand}
				setBrand={setBrand}
			/>
			<Books 
				brand={brand}
			/>
		</main>
	);
}

export default Home;
