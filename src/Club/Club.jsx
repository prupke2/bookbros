import React, { Fragment } from 'react';
import {
	getHighestOwnBookRatings,
	getMeanBookAverageRating,
	getUserAverageRatings,
	transformChartData,
} from './Charts/utils';
import ScatterPlotChart from './Charts/ScatterPlotChart/ScatterPlotChart';
import List from './Charts/List/List';
import { Empty, Logo } from '../Components/Components';
import UserBookList from './Charts/UserBookList/UserBookList';
import './Club.scss';

const Club = ({ brand }) => {
	const books = JSON.parse(localStorage.getItem('books')) || [];
	const ratings = JSON.parse(localStorage.getItem('ratings')) || [];

	const transformedData = transformChartData(books);
	const usersWithRatedBooks = transformedData.map(item => item.id);
	const userAverageRatings = transformedData && getUserAverageRatings(transformedData);
	const highestOwnBookRatings = transformedData && getHighestOwnBookRatings(usersWithRatedBooks, books, ratings);
	const meanBookAverageRating = getMeanBookAverageRating();
	const booksButNoRatings = books.length && !transformedData.length;

	return (
		<div>
			{ !books.length ? (
				<Fragment>
					<Logo brand={brand} />
					<Empty />
				</Fragment>
				) : (
				<Fragment>
					{ booksButNoRatings ? (
						<Fragment>
							<Logo brand={brand} />
							<Empty noRatings />
						</Fragment>
					) : (
						<Fragment>
							<ScatterPlotChart 
								data={transformedData} 
								mean={meanBookAverageRating} 
							/>
							<div className='lists-wrapper'>
								{ userAverageRatings && (
									<List 
										data={userAverageRatings} 
										title="Highest Average Rating" 
									/>
								)}
								{ highestOwnBookRatings && (
									<List 
										data={highestOwnBookRatings} 
										title="Highest Own Book Ratings" 
									/>
								)}
							</div>
							<UserBookList 
								bookData={transformedData}
							/>
						</Fragment>
					)}
				</Fragment>
			)}
		</div>
	);
};

export default Club;
