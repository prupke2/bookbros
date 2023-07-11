import Parse from 'parse';

const calculateAverageRating = (ratings) => {
	let total = 0;
	ratings.forEach(r => {
		const rating = r.get('rating');
		total += rating;
	});
	return parseFloat((total / ratings.length).toFixed(2));
}

export const getAverageRating = async (bookId, clubId) => {
	const ratingQuery = new Parse.Query('Ratings').contains('book_id', bookId).contains('club', clubId);
	const ratings = await ratingQuery.find();
	return calculateAverageRating(ratings);
}

export const setAverageRating = async (book, averageRating) => {
	try {
		book.set('average_rating', averageRating);
		const response = await book.save();
		return !response ? false : true;
	} catch (error) {
		console.log(`error setting average rating: ${error}`);
		return error;
	}
};

export const saveRatingAsync = async (bookId, user, rating, clubId) => {
	const newRating = new Parse.Object('Ratings');
	newRating.set('name', user);
	newRating.set('book_id', bookId);
	newRating.set('rating', rating);
	newRating.set('club', clubId);
	try {
		const result = await newRating.save();
		console.log('saved:', result);
		return true;
	} catch (error) {
		console.error('Error while creating ParseObject: ', error);
		return false;
	}
}
