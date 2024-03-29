import { Fragment } from 'react';
import {
	getHighestOwnBookRatings,
	getHighestRatedBooks,
	getLowestRatedBooks,
	getMeanBookAverageRating,
	getMeanOfListOfFloats,
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

	const numberOfBooks = books.length;
	const listCount = numberOfBooks > 5 ? 5 : numberOfBooks;
	const highestRatedBooks = transformedData && getHighestRatedBooks(books, listCount);
	const lowestRatedBooks = transformedData && getLowestRatedBooks(books, listCount);

	const usersWithRatedBooks = transformedData.map(item => item.id);
	const userAverageRatings = transformedData && getUserAverageRatings(transformedData);
	const highestOwnBookRatings = transformedData && getHighestOwnBookRatings(usersWithRatedBooks, books, ratings);

	const meanBookAverageRating = getMeanBookAverageRating();
	const booksButNoRatings = books.length && !transformedData.length;
	const meanRating = getMeanOfListOfFloats(ratings.map(rating => rating.rating));

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
							<Empty object="ratings" />
						</Fragment>
					) : (
						<Fragment>
							<ScatterPlotChart 
								data={transformedData} 
								mean={meanBookAverageRating} 
							/>
							<List
								data={[{ averageRating: meanRating }]}
								title="Average Rating Given"
								tooltip="The average of all ratings given in this club."
								type="rating"
							/>
							<div className='lists-wrapper'>
								<List 
									data={highestRatedBooks} 
									title="Highest Rated Books"
									tooltip="Books with the highest average rating."
									type="book"
								/>
								{ numberOfBooks > 5 && (
									<List
										data={lowestRatedBooks}
										title="Lowest Rated Books"
										tooltip="Books with the lowest average rating."
										type="book"
										/>
								) }
							</div>
							<div className='lists-wrapper'>
								<List 
									data={userAverageRatings} 
									title="Highest Average Rating" 
									tooltip="Users whose selected books have the highest average rating."
								/>
								{ highestOwnBookRatings && (
									<List 
										data={highestOwnBookRatings} 
										title="Highest Own Book Ratings"
										tooltip="Users who gave the highest ratings for their own books."
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
