import React from 'react';
import Chart from '../Chart/Chart';

const Club = ({ books }) => {
	return (
		<div>
			<Chart data={books} />
		</div>
	);
};

export default Club;
