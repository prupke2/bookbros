export const transformBookFetchResults = async (results) => {
	let books = [];
	let bookData = {};
	try {
		results.forEach(book => {
			bookData.parseBook = book;
			bookData.title = book.get("title");
			bookData.author = book.get("author");
			bookData.genre = book.get("genre");
			bookData.club = book.get("club");
			bookData.user = book.get("user");
			bookData.bookId = book.get("book_id");
			bookData.objectId = book.id;
			bookData.averageRating = book.get("average_rating") || null;
			bookData.createdAt = book.get("created_at");
			books.push(bookData);
			bookData = {}
		});
	} catch (err) {
		console.log('error parsing books:', err);
	}
	return books;
}
