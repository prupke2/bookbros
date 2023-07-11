import React, { useState } from 'react';
import { saveRatingAsync, getAverageRating, setAverageRating } from './hooks';
import CloseModalButton from '../../Modal/CloseModalButton';

const RatingForm = ({ book, bookId, clubId, objectId, title, open, setRatingFormOpen }) => {
	const [currentRating, setCurrentRating] = useState('?');
	let usernameLocalStorage = localStorage.getItem("bookbros_user_name");
	const [username, setUsername] = useState(usernameLocalStorage || '');
	const submitEnabled = username && currentRating && (currentRating !== '?');

	const saveRating = async (event) => {
		event.preventDefault();
		try {
			if (username !== usernameLocalStorage) {
				localStorage.setItem('bookbros_user_name', username);
			}
			const result = await saveRatingAsync(bookId, username, currentRating, clubId);
			if (result === true) {
				const averageRating = await getAverageRating(bookId, clubId);
				console.log('averageRating:', averageRating);

				const ratingResult = await setAverageRating(book, averageRating);
				setRatingFormOpen(false);
				return ratingResult;
			} else {
				// setBookSaveResult(false);
				console.log("error saving book");
				return false;
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (!open) {
		return null;
	}
	return (
		<form 
			className={open && 'form-show'}
			onSubmit={(event) => saveRating(event)}	
		>
			<CloseModalButton 
				setModalOpen={setRatingFormOpen}
				type="rating-form"
			/>
			<h3>Add rating</h3>
			<label htmlFor="name">Name:</label>
			<input 
				type="text" 
				defaultValue={username}
				maxLength={24} 
				required
				onInput={(e) => setUsername(e.target.value)}
			/>
			<span className="range-output">
				{currentRating}
			</span>
			<label htmlFor="rating" />
			<input 
				min="0" 
				max="10" 
				type="range" 
				step="0.5" 
				name="rating[rating]" 
				id="rating_rating"
				defaultValue={currentRating || '?'}
				required
				onInput={(e) => setCurrentRating(parseFloat(e.target.value))}
			/>
			<textarea 
				placeholder="Notes (optional)" 
				maxLength={400} 
				resize="vertical"
				height="80px"
			/>
			<input 
				type="submit" 
				value="Save" 
				disabled={!submitEnabled} 
			/>
		</form>
	)
}

export default RatingForm;
