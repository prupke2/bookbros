import Parse from 'parse';

export const saveBookAsync = async (bookId, user, title, author, createdAt) => {
	const newBook = new Parse.Object('Books');
	const club = localStorage.getItem("bookbros_club_id") || 'test';

	newBook.set('book_id', bookId);
	newBook.set('user', user);
	newBook.set('title', title);
	newBook.set('author', author);
	newBook.set('club', club);
	newBook.set('created_at', createdAt);
	newBook.set('updated_at', createdAt);
	try {
		await newBook.save();
		return true;
	} catch (error) {
		console.error('Error while creating ParseObject: ', error);
		return false;
	}
};
