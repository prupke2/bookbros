import Parse from 'parse';

export const saveBookAsync = async (bookId, user, title, author, createdAt) => {
	const newBook = new Parse.Object('Books');
	const club = localStorage.getItem("bookbros_club_id") || null;

	newBook.set('book_id', bookId);
	newBook.set('user', user);
	newBook.set('title', title);
	newBook.set('author', author);
	newBook.set('club', club);
	newBook.set('created_at', createdAt);
	newBook.set('updated_at', createdAt);
	try {
		const result = await newBook.save();
		// Access the Parse Object attributes using the .GET method
		console.log('ParseObject created', result);
		return true;
	} catch (error) {
		console.error('Error while creating ParseObject: ', error);
		return false;
	}
};
