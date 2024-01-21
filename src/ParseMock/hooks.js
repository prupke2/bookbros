import { mockBooks, mockRatings } from "./mockData";

export const getBooksMock = (_clubId) => mockBooks;

export const getBookMock = objectId => mockBooks.filter(book => book.objectId === objectId) || {};

export const getRatingsMock = async (clubId) => mockRatings;

export const getRatingsForBookMock = async (bookId, _clubId) => {
	return mockRatings.filter(rating => rating.bookId === bookId) || [];
};
