
export const fetchGoogleBooksMock = async (_search, setBookResults) => {
	const books = {
		"kind": "books#volumes",
		"totalItems": 2,
		"items": [
			{
				"kind": "books#volume",
				"id": "o9qXzwEACAAJ",
				"etag": "fDadVqYfAlE",
				"selfLink": "https://www.googleapis.com/books/v1/volumes/o9qXzwEACAAJ",
				"volumeInfo": {
					"title": "The Complete Chronicles of Narnia",
					"authors": [
						"C. S. Lewis"
					],
					"publishedDate": "2022-11-28",
					"description": "The Chronicles of Narnia paperback box set features cover art by two-time Caldecott Medal-winning illustrator Chris van Allsburg and the complete black-and-white original interior art by Pauline Baynes. The mystical realms, epic conflicts between good and evil, and unique creatures of Narnia have fascinated readers of all ages for nearly sixty years. The Magician's Nephew, The Lion, the Witch, and the Wardrobe, The Horse and His Boy, Prince Caspian, The Voyage of the Dawn Treader, The Silver Chair, and The Last Battle are all included in this box set.",
					"industryIdentifiers": [
						{
							"type": "ISBN_10",
							"identifier": "9356616973"
						},
						{
							"type": "ISBN_13",
							"identifier": "9789356616974"
						}
					],
					"readingModes": {
						"text": false,
						"image": false
					},
					"pageCount": 0,
					"printType": "BOOK",
					"categories": [
						"Fiction"
					],
					"maturityRating": "NOT_MATURE",
					"allowAnonLogging": false,
					"contentVersion": "preview-1.0.0",
					"panelizationSummary": {
						"containsEpubBubbles": false,
						"containsImageBubbles": false
					},
					"imageLinks": {
						"smallThumbnail": "http://books.google.com/books/content?id=o9qXzwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
						"thumbnail": "http://books.google.com/books/content?id=o9qXzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
					},
					"language": "en",
					"previewLink": "http://books.google.ca/books?id=o9qXzwEACAAJ&dq=narnia&hl=&cd=1&source=gbs_api",
					"infoLink": "http://books.google.ca/books?id=o9qXzwEACAAJ&dq=narnia&hl=&source=gbs_api",
					"canonicalVolumeLink": "https://books.google.com/books/about/The_Complete_Chronicles_of_Narnia.html?hl=&id=o9qXzwEACAAJ"
				},
				"saleInfo": {
					"country": "CA",
					"saleability": "NOT_FOR_SALE",
					"isEbook": false
				},
				"accessInfo": {
					"country": "CA",
					"viewability": "NO_PAGES",
					"embeddable": false,
					"publicDomain": false,
					"textToSpeechPermission": "ALLOWED",
					"epub": {
						"isAvailable": false
					},
					"pdf": {
						"isAvailable": false
					},
					"webReaderLink": "http://play.google.com/books/reader?id=o9qXzwEACAAJ&hl=&source=gbs_api",
					"accessViewStatus": "NONE",
					"quoteSharingAllowed": false
				}
			},
			{
				"kind": "books#volume",
				"id": "G0VYFTH9tm4C",
				"etag": "cTDA610tmRA",
				"selfLink": "https://www.googleapis.com/books/v1/volumes/G0VYFTH9tm4C",
				"volumeInfo": {
					"title": "The Complete Chronicles of Narnia",
					"authors": [
						"C. S. Lewis"
					],
					"publisher": "HarperCollins",
					"publishedDate": "1998-09-18",
					"description": "All seven Chronicles are bound together in this one magnificent volume with a personal introduction by Douglas Gresham, stepson of C. S. Lewis.",
					"industryIdentifiers": [
						{
							"type": "ISBN_10",
							"identifier": "0060281375"
						},
						{
							"type": "ISBN_13",
							"identifier": "9780060281373"
						}
					],
					"readingModes": {
						"text": false,
						"image": false
					},
					"pageCount": 536,
					"printType": "BOOK",
					"categories": [
						"Juvenile Fiction"
					],
					"averageRating": 4.5,
					"ratingsCount": 153,
					"maturityRating": "NOT_MATURE",
					"allowAnonLogging": false,
					"contentVersion": "0.5.3.0.preview.0",
					"panelizationSummary": {
						"containsEpubBubbles": false,
						"containsImageBubbles": false
					},
					"imageLinks": {
						"smallThumbnail": "http://books.google.com/books/content?id=G0VYFTH9tm4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
						"thumbnail": "http://books.google.com/books/content?id=G0VYFTH9tm4C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
					},
					"language": "en",
					"previewLink": "http://books.google.ca/books?id=G0VYFTH9tm4C&dq=narnia&hl=&cd=2&source=gbs_api",
					"infoLink": "http://books.google.ca/books?id=G0VYFTH9tm4C&dq=narnia&hl=&source=gbs_api",
					"canonicalVolumeLink": "https://books.google.com/books/about/The_Complete_Chronicles_of_Narnia.html?hl=&id=G0VYFTH9tm4C"
				},
				"saleInfo": {
					"country": "CA",
					"saleability": "NOT_FOR_SALE",
					"isEbook": false
				},
				"accessInfo": {
					"country": "CA",
					"viewability": "NO_PAGES",
					"embeddable": false,
					"publicDomain": false,
					"textToSpeechPermission": "ALLOWED",
					"epub": {
						"isAvailable": false
					},
					"pdf": {
						"isAvailable": false
					},
					"webReaderLink": "http://play.google.com/books/reader?id=G0VYFTH9tm4C&hl=&source=gbs_api",
					"accessViewStatus": "NONE",
					"quoteSharingAllowed": false
				},
				"searchInfo": {
					"textSnippet": "All seven Chronicles are bound together in this one magnificent volume with a personal introduction by Douglas Gresham, stepson of C. S. Lewis."
				}
			}
		]
	}		
	setBookResults(books.items);
};
