import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import CloseModalButton from './CloseModalButton';
import './BookModal.scss';
import { saveBookAsync } from './hooks';
import { coerceToString } from '../utils';

const BookModal = ({ modalOpen, setModalOpen, setBookSaveResult, bookId, data, bookCoverLink }) => {
	const title = data?.title;
	const authors = coerceToString(data?.authors || '');
	const plural = data?.ratingsCount === 1 ? "" : "s" || '';
	const rating = !data?.averageRating ? null : `${data?.averageRating}/5 (${data?.ratingsCount} vote${plural})`;
	const description = !data?.description ? 'No synopsis is available for this book.' : data.description || '';
	const defaultUsername = localStorage.getItem('bookbros_user_name');
	const [username, setUsername] = useState(defaultUsername);

	const saveBook = async (bookId, username, title, authors) => {
		const createdAt = new Date().toISOString();
		if (username !== defaultUsername) {
			localStorage.setItem('bookbros_user_name', username);
		}
		try {
			const result = await saveBookAsync(bookId, username, title, authors, createdAt);
			if (result === true) {
				setBookSaveResult(true);
				setModalOpen(false);
			} else {
				setBookSaveResult(false);
			}
		} catch (error) {
			console.log(error);

		}
	};
		

	useEffect(() => {
		// blurs background (aside from nav) while the modal is open
		const bg = document.querySelector("main > div");
		if (modalOpen) {
			bg.classList.add('blur-background');
		} else {
			bg.classList.remove('blur-background');
		}
	}, [modalOpen])
	
	return (
		<Modal
			isOpen={modalOpen}
			onRequestClose={() => setModalOpen(false)}
			contentLabel={title}
			parentSelector={() => document.querySelector("main")}
			id={bookId}
			ariaHideApp={false}
			overlayClassName={"book-cover-modal"}
			shouldFocusAfterRender={true}
		>
			<CloseModalButton setModalOpen={setModalOpen} />
			<figure
				className="book-cover-modal"
				id={bookId} 
			>
				<div className="book-modal-img-wrapper">
					<img 
						src={`${bookCoverLink}?fife=w320-h400)`} 
						alt={title}	
					/>
				</div>
				<div>
					<div className='book-title-and-author'>
					<span className='book-title'> {title} </span>
					{ authors && (
						<>
							<span className='by'>&nbsp;by</span>
							<span className='book-author'> {authors} </span>
						</>
					)}
				</div>
				<div className='description'>
					<div> 
						{data?.categories && 
							<span className='categories'>{data.categories}</span> }
						{data?.categories && data?.pageCount && <span>, </span> } 
						{data?.pageCount && 
							<span className='pages'>{data.pageCount} pages </span> }
						{data?.publishedDate && 
							<div className='published'>Published {data.publishedDate} </div> }
						{rating && 
							<div>Average rating: {rating}</div>}
						<div className='synopsis'>{description}</div>
					</div>
				</div>
				<div className="select-book-button-wrapper">
					<label 
						htmlFor="user-name"
						className="user-name-label"
					>Your name:
					</label>
					<input 
						id="user-name"
						className="rounded-link"
						onInput={(e) => setUsername(e.target.value)}
						defaultValue={username || null}
						required
					/>
					<button 
						id="select-book-button"
						className="rounded-link" 
						onClick={() => saveBook(bookId, username, title, authors)}
						disabled={username === ""}
					>Select this book
					</button>
				</div>
			</div>
			</figure>
		</Modal>
	);
}

export default BookModal;
