import React from 'react';
import './Navbar.scss';

const Navbar = ({ brand, setBrand, currentTab, setCurrentTab }) => {

	const switchBrand = () => {
		if (brand === 'Book Bros') {
			localStorage.setItem('Book Bros Brand', 'Book Babes');
			setBrand('Book Babes');
		} else {
			localStorage.setItem('Book Bros Brand', 'Book Bros');
			setBrand('Book Bros');
		}
		return null;
	}

	const brandFileName = brand === 'Book Bros' ? 'bookbros_logo_small.png' : 'bookbabes_logo_small.png';
	const brandImage = `${process.env.PUBLIC_URL}/${brandFileName}`;
	const switchBrandName = brand === 'Book Bros' ? 'Book Babes' : 'Book Bros';

	return (
		<nav>
			<ul>
				<li 
					className="nav-logo-container"
					onClick={switchBrand === null ? null : () => switchBrand()}
					title={`Switch to ${switchBrandName}`}
				>
					<div className="nav-logo" >
						<img src={brandImage} alt={brand} />
					</div>
				</li> 
				<li className="nav-links">
					<ul>
						<li>
							<button className="nav-button" onClick={() => setCurrentTab('Home')}>
								Home
							</button>
						</li>
						<li>
							<button className="nav-button" onClick={() => setCurrentTab('Search')}>
								Add a book
							</button>
						</li>
					</ul>
					<span id="hamburger-menu">≡</span>
				</li>
			</ul>
    </nav>
	)
}

export default Navbar;
