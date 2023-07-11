import React, { useState, useEffect }  from 'react';
import BookModal from '../../Modal/BookModal';

const BookResult = ({result, setCurrentTab }) => {
	const bookId = result.id;
	const bookCoverLink = `https://books.google.com/books/content/images/frontcover/${bookId}`;
	const data = result?.volumeInfo;

	const [modalOpen, setModalOpen] = useState(false);
	const [bookSaveResult, setBookSaveResult] = useState(null);

	useEffect(() => {
		if (bookSaveResult) {
			setCurrentTab("Home");
			window.history.replaceState(null, '', window.location.pathname);
		}
	}, [bookSaveResult, setCurrentTab]);

	return (
		<li>
			<div 
				className='book-cover-button' 
				onClick={() => setModalOpen(true)}> 
				 <figure>
					 <div 
						 id={bookId} 
						 style={{background: `url(${bookCoverLink}?fife=w200-h300)`}}>
						</div>
				 </figure>
			</div>
			{ setModalOpen && (
				<BookModal
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
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
