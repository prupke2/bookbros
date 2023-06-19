import React, { useState } from 'react';

const RatingForm = ({ objectId, open }) => {
	const [currentRating, setCurrentRating] = useState('?');

	if (!open) {
		return null;
	}
	return (
		<form className={open && 'form-show'}>
			<label for="book" />
			<input type="hidden" value={objectId} />
			<label for="name">Name:</label>
			<input 
				type="text" 
				placeholder="Name" 
				maxLength={24} 
				required 
			/>
			<span className="range-output">
				{currentRating}
			</span>
			<label for="rating" />
			<input 
				min="0" 
				max="10" 
				type="range" 
				step="0.5" 
				name="rating[rating]" 
				id="rating_rating" 
				required
				onInput={(e) => setCurrentRating(e.target.value)}
			/>
			<textarea placeholder="Notes (optional)" maxLength={400} />
			<input type="submit" value="Save" />
		</form>
	)
}

export default RatingForm;
