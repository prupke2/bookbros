import React, { useState, useEffect }  from 'react';
import BookModal from '../../Modal/BookModal';
import useScrollPosition from '../../hooks/useScrollPosition';

const BookResult = ({ result, setTab, setRefreshBooks }) => {
	const bookId = result.id;
	const bookCoverLink = `https://books.google.com/books/content/images/frontcover/${bookId}`;
	const data = result?.volumeInfo;

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [bookSaveResult, setBookSaveResult] = useState(null);

	useScrollPosition(isModalOpen);

	useEffect(() => {
		if (bookSaveResult) {
			setRefreshBooks(true);
			setTab("Home");
		}
	}, [bookSaveResult, setRefreshBooks, setTab]);

	return (
		<li>
			<div 
				className='book-cover-button' 
				onClick={() => setIsModalOpen(true)}> 
				 <figure>
					 <div 
						 id={bookId} 
						 style={{background: `url(${bookCoverLink}?fife=w200-h300)`}}>
						</div>
				 </figure>
			</div>
			{ setIsModalOpen && (
				<BookModal
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					setBookSaveResult={setBookSaveResult}
					bookId={bookId}
					data={data}
					bookCoverLink={bookCoverLink}
				/>
			)}
		</li>
	);
}

export default BookResult;
