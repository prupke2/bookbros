export const isLocalHost = () => (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

export const coerceToString = data => typeof(data) === 'string' ? data : data.join(', ');

export const twoDecimalDigits = (num) => (Math.round(num * 100) / 100).toFixed(2);

export const truncateString = (string, maxLength) => string.substring(0, maxLength);

export const calculateAverageRating = ratings => {
	let total = 0;
	ratings.forEach(r => {
		const rating = r.get('rating');
		total += rating;
	});
	return parseFloat((total / ratings.length).toFixed(2));
}
