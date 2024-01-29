import React from 'react';
import './Navbar.scss';

const NavTab = ({ name, emoji, currentTab, setTab }) => (
	<li>
		<button 
			className= {`nav-button ${name === currentTab ? 'active' : ''}`} 
			onClick={() => name !== currentTab && setTab(name)}
		>
			<span className='nav-tab-name'>{name}</span>
			<span className='nav-tab-emoji' aria-label={`tab=${name}`}>{emoji}</span>
		</button>
	</li>
);

export default NavTab;
