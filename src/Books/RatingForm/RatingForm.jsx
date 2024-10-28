import React, { useState } from 'react';
import { saveRatingAsync, getAverageRating, setAverageRating } from './hooks';
import CloseModalButton from '../../Modal/CloseModalButton';
import { truncateString } from '../../utils';
import { MAX_NOTE_LENGTH, MAX_USER_LENGTH } from '../../constants';

const RatingForm = ({ 
	book, 
	bookId, 
	clubId, 
	open, 
	setRatingFormOpen, 
	setUpdateRatings,
	setAverageRatingState,
	setRefreshBooks,
}) => {
	const [currentRating, setCurrentRating] = useState('?');
	let usernameLocalStorage = localStorage.getItem("bookbros_user_name");
	const [username, setUsername] = useState(usernameLocalStorage || '');
	const [notes, setNotes] = useState(null);
	const noRating = (!currentRating || currentRating === '?') && currentRating !== 0;
	const noUsernameError = !username && 'Enter your name.';
	const noRatingError = noRating && 'Use the slide bar to set a rating.';
	const submitError = noUsernameError || noRatingError;

	const [saveButtonValue, setSaveButtonValue] = useState('Save');
	const noteChangeHandler = (e) => {
		const truncatedNote = truncateString(e.target.value, MAX_NOTE_LENGTH)
		setNotes(truncatedNote)
	}

	const saveRating = async (event) => {
		event.preventDefault();
		setSaveButtonValue('.');
		try {
			if (username !== usernameLocalStorage) {
				localStorage.setItem('bookbros_user_name', username);
			}
			const result = await saveRatingAsync(bookId, username, currentRating, notes, clubId);
			setSaveButtonValue('..');
			if (result === true) {
				const newAverageRating = await getAverageRating(bookId, clubId);
				setSaveButtonValue('...');
				const ratingResult = await setAverageRating(book?.parseBook, newAverageRating);
				setAverageRatingState(newAverageRating);
				setSaveButtonValue(ratingResult === true ? 'Saved' : '⚠️ Error');
				setRatingFormOpen(false);
				setUpdateRatings(true);
				setRefreshBooks(true);
				setTimeout(() => {
					setSaveButtonValue('Save');
				}, 1000);
				return ratingResult;
			} else {
				console.log("Error saving rating.");
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
			<h3 className='add-rating-title'>Add rating</h3>
			<label htmlFor="name">Name:</label>
			<input 
				type="text" 
				defaultValue={username}
				placeholder="Name"
				maxLength={MAX_USER_LENGTH} 
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
				onInput={e => setCurrentRating(parseFloat(e.target.value))}
			/>
			<textarea 
				placeholder={`Notes (optional, max ${MAX_NOTE_LENGTH} characters)`}
				maxLength={MAX_NOTE_LENGTH} 
				resize="vertical"
				height="80px"
				onInput={noteChangeHandler}
			/>
			<input 
				type="submit" 
				value={saveButtonValue}
				disabled={submitError}
				title={submitError && submitError}
			/>
		</form>
	)
}

export default RatingForm;
