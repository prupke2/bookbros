import React, { FC } from 'react';
import './Books.scss';
import Book, { BookProps } from './Book/Book';

interface BooksProps {
	books: BookProps[]
}

const Books: FC<BooksProps[]> = (books) => {
	return null
}

export default Books;
// 	// console.log(`books: ${JSON.stringify(books, null, 4)}`);
// 	console.log(`books: ${JSON.stringify(books, null, 4)}`);
// 	return (
// 		<ul>
// 			{books?.map(
// 				book => {
// 					// console.log(`book: ${JSON.stringify(book.id, null, 4)}`);
// 					// console.log(`book.id: ${JSON.stringify(book.id, null, 4)}`);
// 					// console.log(`book.book_id: ${JSON.stringify(book.book_id, null, 4)}`);
// 					// console.log(`book objCount: ${JSON.stringify(book._objCount, null, 4)}`);
// 					console.log(`typeof: ${typeof(book.books)}`);
// 					// console.log(`typeof book.id: ${typeof(book.id)}`);
// 					// console.log(`typeof book.book_id: ${typeof(book.book_id)}`);
// 					// console.log(`typeof book.createdAt: ${typeof(book.createdAt)}`);
// 					console.log(`keys: ${Object.keys(book.books)}`);
// 					console.log(`values: ${Object.values(book.books)}`);
// 					// console.log(`book: ${JSON.stringify(book, null, 4)}`);

// 					// console.log(`id: ${book.id}`);
// 					// console.log(`objCount: ${book._objCount}`);
// 					// console.log(`className: ${book.className}`);
// 					// console.log(`createdAt: ${book.createdAt}`);
// 					// console.log(`title: ${book.title}`);

// 					// console.log(`book.title: ${book.title}`);

// 					// console.log(`book.book_id: ${book.book_id}`);
// 					// console.log(`book[book_id: ${book['book_id']}`);


// 					return (
						
// 						// <li>
// 						// 	<section>
// 						// 		<figure className="book-cover" id={book.book_id}>	
// 						// 			<a href={`/posts/${book['book_id']}`} className="book-cover-link">
// 						// 				<span className='selected-by'>
// 						// 					Selected by <span className='name opaque-background'>{book.user}</span>
// 						// 				</span>
// 						// 				<span className="book-image">
// 						// 					<img src={`https://books.google.com/books/content/images/frontcover/${book['book_id']}?fife=w1200-h800`}
// 						// 						alt={`${book['title']} by ${book['author']} (No book cover available)`} />
// 						// 				</span>
// 						// 			</a>	
// 						// 		</figure>
// 						// 	</section>
// 						// </li>
							
// 						<Book
// 							book = {book}
// 						/>
// 					);
// 				}
// 			)}
// 		</ul>
// 	);
// }

// export default Books;
