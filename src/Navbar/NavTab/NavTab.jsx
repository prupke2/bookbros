import React from 'react';
import '../Navbar.scss';

const NavTab = ({ name, currentTab, setCurrentTab }) => (
	<li>
		<button 
			className= {`nav-button ${name === currentTab ? 'active' : ''}`} 
			onClick={() => name !== currentTab && setCurrentTab(name)}
		>
			{name}
		</button>
	</li>
);

export default NavTab;
