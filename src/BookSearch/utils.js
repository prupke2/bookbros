import { GOOGLE_BOOKS_API_KEY, GOOGLE_BOOKS_VOLUMES_API_URL } from "./constants";

export const fetchGoogleBooks = async (search, setBookResults, setError) => {
	const query = `${GOOGLE_BOOKS_VOLUMES_API_URL}?q=${search}&key=${GOOGLE_BOOKS_API_KEY}`;
	try {
		fetch(query, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
				"Content-Type": "application/json",
			},
		}).then(async (response) => {
			if (!response.ok) {
				setError(`Error fetching books from Google Books API. Status: ${response.status}. Please try again later.`);
				throw new Error(`HTTP error! status: ${response.status}, response: ${await response.text()}`);
			}
			const books = await response.json();
			setBookResults(books.items);
		});
	} catch (error) {
		console.log('error fetching google books:', error);
		setError(`Error fetching books from Google Books API. ${error.message}`);
	}
}
