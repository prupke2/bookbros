export const coerceToString = data => typeof(data) === 'string' ? data : data.join(', ');

export const calculateAverageRating = ratings => {
	let total = 0;
	ratings.forEach(r => {
		const rating = r.get('rating');
		total += rating;
	});
	return parseFloat((total / ratings.length).toFixed(2));
}
