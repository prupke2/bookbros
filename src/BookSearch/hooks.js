export const fetchGoogleBooks = async (search, setBookResults, setError) => {
	const query = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
	try {
		fetch(query, {
			method: "GET",
		}).then(async (response) => {
			if (!response.ok) {
				setError('Error fetching books from Google Books API. Please try again later.');
				throw new Error(`HTTP error! status: ${response.status}, response: ${await response.text()}`);
			}
			const books = await response.json();
			setBookResults(books.items);
		});
	} catch (error) {
		console.log('error fetching google books:', error);
	}
}
