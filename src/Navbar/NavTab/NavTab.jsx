import React from 'react';
import '../Navbar.scss';

const NavTab = ({ name, currentTab, setTab }) => (
	<li>
		<button 
			className= {`nav-button ${name === currentTab ? 'active' : ''}`} 
			onClick={() => name !== currentTab && setTab(name)}
		>
			{name}
		</button>
	</li>
);

export default NavTab;
