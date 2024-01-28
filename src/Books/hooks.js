import Parse from 'parse';
import { transformBookFetchResults } from './utils';

export const parseRatings = ratings => {
	let bookRatings = [];
	let ratingData = {};
	try {
		ratings.forEach(rating => {
			ratingData.book_id = rating.get("book_id");
			ratingData.rating = rating.get("rating");
			ratingData.name = rating.get("name");
			ratingData.notes = rating.get("notes");
			bookRatings.push(ratingData);
			ratingData = {}
		});
	} catch (err) {
		console.log('error parsing ratings:', err);
	}
	return bookRatings;
}

export const paginateParseObject = async (query) => {
	let count = 0;
	const results = await query.find();
	if (results?.length === 0) {
		return [];
	} 
	let objectArray = [...results];
	let newResults;

	while (objectArray.length % 100 === 0) {
		count += 100;
		query.skip(count);
		newResults = await query.find();
		objectArray = [...objectArray, ...newResults];
	}
	return objectArray;
}

export const getBooks = async (clubId) => {
	const query = new Parse.Query('Books').equalTo('club', `${clubId}`).descending('created_at');
	const results = await paginateParseObject(query);
	const books = await transformBookFetchResults(results);
	localStorage.setItem('books', JSON.stringify(books));
	localStorage.setItem('booksUpdated', Date.now());
	return books;
};

export const getBook = async (objectId) => {
  const query = new Parse.Query('Books').equalTo('objectId', objectId);
	const ratings = await query.find();
	return ratings;
};

export const getRatings = async (clubId) => {
	const query = new Parse.Query('Ratings').equalTo('club', `${clubId}`).descending('rating');
	const ratings = await paginateParseObject(query);
	localStorage.setItem('ratings', JSON.stringify(ratings));
	localStorage.setItem('ratingsUpdated', Date.now());
	return parseRatings(ratings);
};

export const getRatingsForBook = async (bookId, clubId) => {
	const query = new Parse.Query('Ratings').equalTo('club', `${clubId}`).equalTo('book_id', bookId).descending('rating');
	const ratings = await paginateParseObject(query);
	return parseRatings(ratings);
};
