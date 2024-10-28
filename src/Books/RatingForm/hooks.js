import Parse from 'parse';
import { calculateAverageRating, truncateString } from '../../utils';
import { MAX_NOTE_LENGTH, MAX_USER_LENGTH } from '../../constants';

export const getAverageRating = async (bookId, clubId) => {
	const ratingQuery = new Parse.Query('Ratings').contains('book_id', bookId).contains('club', clubId);
	const ratings = await ratingQuery.find();
	return ratings?.length === 0 ? 0 : calculateAverageRating(ratings);
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

export const saveRatingAsync = async (bookId, user, rating, notes, clubId) => {
	const newRating = new Parse.Object('Ratings');
	newRating.set('name', truncateString(user, MAX_USER_LENGTH));
	newRating.set('book_id', bookId);
	newRating.set('rating', rating);
	newRating.set('notes', truncateString(notes, MAX_NOTE_LENGTH));
	newRating.set('club', clubId);
	try {
		await newRating.save();
		return true;
	} catch (error) {
		console.error('Error while creating ParseObject: ', error);
		return false;
	}
}
