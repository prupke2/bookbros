import React, { Fragment } from 'react';
import { getUserAverageRatings, transformChartData } from './Charts/utils';
import ScatterplotChart from './Charts/ScatterplotChart';
import List from './Charts/List';

const Club = () => {
	const books = JSON.parse(localStorage.getItem('books')) || [];
	const transformedData = books && transformChartData(books);
	const userAverageRatings = transformedData && getUserAverageRatings(transformedData);

	return (
		<div>
			{ !books.length && (
				<div className="empty empty-short">
					<div>Your club hasn't added any books yet!</div>
				</div>
			)}
			{ books.length && (
				<Fragment>
					<ScatterplotChart data={transformedData} />
					<List data={userAverageRatings} />
				</Fragment>
			)}
		</div>
	);
};

export default Club;
