import React from 'react';
import './Navbar.scss';

const Navbar = ({ brand, setBrand }) => {

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

	return (
		<nav>
			<ul>
				<li 
					className="nav-logo-container" 
					onClick={() => switchBrand()}
					title="Switch brand"
				>
					<div className="nav-logo" >
						<img src={brandImage} alt={brand} />
					</div>
				</li> 
				<li className="nav-links">
					<ul>
						<li>
							<a href="/">
								Home
							</a>
						</li>
						<li>
							<a href="/search">
								Add a book
							</a>
						</li>
					</ul>
					<span id="hamburger-menu">≡</span>
				</li>
			</ul>
    </nav>
	)
}

export default Navbar;
