export function transformChartData(bookData) {
	// Iterates through bookData and transforms it into an object 
	// with the following shape so that Nivo can render it:
	// {
	// 	"id": "User 1",
	// 	"data": [
	// 			{
	// 					"x": "2023-08-14",
	// 					"y": 6,
	// 					"book": "Book Title 1",
	// 					"author": "Author 1",
	// 					"id": "EID4smWDEIgC"
	// 			},
	// 			{
	// 					"x": "2022-04-30",
	// 					"y": 3.8,
	// 					"book": "Book Title 2",
	// 					"author": "Author 2",
	// 					"id": "R8wkEAAAQBAJ",
	// 					"min": true
	// 			},
	// 			...
	// 	]
	// }, ...
	// x is the date the book was added to the club
	// y is the average rating for the book
	// id is the google books id used to render the book cover image on the Home tab
	// min and max are used to identify the highest and lowest rated books in the list

	if (!bookData || !bookData.length) return undefined;

	const transformedData = {};
	const min = {currentMin: 10};
	const max = {currentMax: 0};

	bookData.forEach(entry => {
		if (!entry.averageRating) {
			return;
		}
		if (entry.averageRating < min.currentMin) {
			min.bookId = entry.bookId;
			min.currentMin = entry.averageRating;
			min.user = entry.user;
		}
		if (entry.averageRating > max.currentMax) {
			max.bookId = entry.bookId;
			max.currentMax = entry.averageRating;
			max.user = entry.user;
		}

		const id = entry.user;
		const date = new Date(entry.createdAt);
		const formattedDate = date && `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

		if (!transformedData[id]) {
			transformedData[id] = {
				id: id,
				data: []
			};
		}

		transformedData[id].data.push({
			x: formattedDate.toString(),
			y: entry.averageRating,
			book: entry.title,
			author: entry.author,
			id: entry.bookId
		});
	});

	// Add min and max key to highest and lowest rated books
	if (min.user) {
		transformedData[min.user].data.filter(entry => entry.id === min.bookId)[0].min = true;
	}
	if (max.user) {
		transformedData[max.user].data.filter(entry => entry.id === max.bookId)[0].max = true;
	}

	return Object.values(transformedData);
}

export const getUserAverageRatings = (data) => {
	// Iterates through the transformed data and returns a sorted array of objects 
	// with the user name and their average rating for all books in the club

	if (!data) return [];

	const userAverageRatings = [];
	data.forEach(user => {
		const userAverageRating = {
			name: user.id,
			averageRating: (user.data.reduce((acc, curr) => acc + curr.y, 0) / user.data.length)?.toFixed(2)
		};
		userAverageRatings.push(userAverageRating);
	});

	return userAverageRatings.sort((a, b) => b.averageRating - a.averageRating);
}

export const getMeanBookAverageRating = () => {
	// gets the mean of the average ratings (not weighted) for all books in the club
	const books = JSON.parse(localStorage.getItem('books'));
	if (!books) return 0;
	const sum = books.reduce((acc, curr) => acc + curr.averageRating, 0);
	const booksWithRatings = books.filter(book => book.averageRating);
	return (sum / booksWithRatings.length).toFixed(2);
}

export const getMeanOfAllRatings = () => {
	const ratings = JSON.parse(localStorage.getItem('ratings'));
	if (!ratings) return 0;
	const sum = ratings.reduce((acc, curr) => acc + curr.rating, 0);
	return (sum / ratings.length).toFixed(2);
}
