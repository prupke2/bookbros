import React from 'react';
import './Navbar.scss';
import NavTab from './NavTab/NavTab';

const Navbar = ({ brand, setBrand, currentTab, setTab }) => {

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
						<NavTab
							name="Home"
							currentTab={currentTab}
							setTab={setTab}
						/>
						<NavTab
							name="Add a book"
							currentTab={currentTab}
							setTab={setTab}
						/>
						<NavTab
							name="Club"
							currentTab={currentTab}
							setTab={setTab}
						/>
					</ul>
					<span id="hamburger-menu">≡</span>
				</li>
			</ul>
    </nav>
	)
}

export default Navbar;
