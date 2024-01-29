import React, { Fragment } from 'react';
import { getMeanBookAverageRating, getUserAverageRatings, transformChartData } from './Charts/utils';
import ScatterPlotChart from './Charts/ScatterPlotChart/ScatterPlotChart';
import List from './Charts/List/List';

const Club = () => {
	const books = JSON.parse(localStorage.getItem('books')) || [];
	const transformedData = transformChartData(books);
	const userAverageRatings = transformedData && getUserAverageRatings(transformedData);
	const meanBookAverageRating = getMeanBookAverageRating();

	return (
		<div>
			{ !books.length && (
				<div className="empty empty-short">
					<div>Your club hasn't added any books yet!</div>
				</div>
			)}
			{ books.length && (
				<Fragment>
					<ScatterPlotChart 
						data={transformedData} 
						mean={meanBookAverageRating} 
					/>
					<List 
						data={userAverageRatings} 
						title="Highest Average Rating" 
					/>
				</Fragment>
			)}
		</div>
	);
};

export default Club;
