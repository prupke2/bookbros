import React from 'react';

// const amazonSearchLink = "";
// const googleSearchLink = "";

const BookResult = (result) => {
	const bookId = result.book.id;
	const bookCoverLink = `https://books.google.com/books/content/images/frontcover/${bookId}?fife=w200-h300`;
	const data = result?.book.volumeInfo;
	const authors = data?.authors;
	const plural = data?.ratingsCount === 1 ? "" : "s" || '';
	const rating = !data?.averageRating ? null : `${data?.averageRating}/5 (${data?.ratingsCount} vote${plural})`;
	const description = data?.description === undefined ? 'No synopsis is available for this book.' : data.description || '';
	return (
		<li>
			{/* {JSON.stringify(result, null, 4)} */}
			<div className='book-title-and-author'>
				<span className='book-title'> {data?.title} </span>
				{ authors && (
					<>
						<span className='by'> by </span>
						<span className='book-author'> {authors} </span>
					</>
				)}
			</div>
			<div className='description'>Details
				<div className='hidden-description'> 
					{/* <div>
						<a className='rounded-link small-link' target='_blank' href= {amazonSearchLink}>
							<img className='icon-small' src='/assets/amazon_icon.png'> Amazon
						</a>
						<a className='rounded-link small-link' target='_blank' href= {googleSearchLink}>
							<img className='icon-small' src='/assets/google_icon.png'> Google
						</a>
					</div> */}
					<p> 
						{data?.categories && 
							<span className='categories'>{data.categories}</span> }
						{data?.pageCount && 
							<span className='pages'>{data.pageCount} pages</span> }
						{data?.publishedDate && 
							<span className='published'>Published {data.publishedDate}</span> }
						{rating && 
							<span>Average rating: {rating}</span>}
						<span className='synopsis'>{description}</span>
					</p>
				</div>
			</div>
			<a className='book-cover-link' href={`/books/${bookId}`}> 
				 <figure>
					 <div 
						 id={bookId} 
						 style={{background: `url(${bookCoverLink})`}}>
						</div>
				 </figure>
			 </a>
		</li>
	);
}

export default BookResult;


		/* <div className='description'>Details
			<div className='hidden-description'> 
				<span>
					<a className='rounded-link small-link' target='_blank' href= {amazonSearchLink}>
						<img className='icon-small' src='/assets/amazon_icon.png'> Amazon
					</a>
					<a className='rounded-link small-link' target='_blank' href= {googleSearchLink}>
						<img className='icon-small' src='/assets/google_icon.png'> Google
					</a>
				</span>
				<p> categories pages published rating 
					<span className='synopsis'> description <span>
				</p>
			</div>
		</div>
		<a className='book-cover-link' href={`/books/${result.id}`}> 
			<figure>
				<div id={result.id}></div>
			</figure>
		</a> 
	</li>
)

{/* 
// Function that queries Google Books API - currently set to return 5 results
function googleBooksApiResponse(response) {
	for (let i = 0; i < 5; i++) {
		const result = response.results[i];
		const bookCoverLink = "https://books.google.com/books/content/images/frontcover/" + result.id
		const isbn = data.industryIdentifiers[1].identifier
		const amazonSearchLink = "https://www.amazon.ca/s?k=" + isbn + "&i=stripbooks&ie=UTF8"
		const googleSearchLink = "https://books.google.ca/books?id=" + result.id
		const categories = data.categories === undefined ? 
			'' : "<span className='categories'>Category: " + data.categories + "</span>"
			const pages = data.pageCount === undefined ? '' : "<span className='pages'>" + data.pageCount + " pages</span>"
		const published = data.publishedDate === undefined ? 
			published = '' : "<span className='published'>Published " + data.publishedDate + "</span>"
		const plural = data.ratingsCount === 1 ? " vote)" : " votes)"
		const rating = data.averageRating === undefined ? '' : "<br><br>Average rating: " 
			+ data.averageRating + "/5 (" + data.ratingsCount + plural
		const description = data.description === undefined ? 
			description = 'No synopsis is available for this book.' : data.description 

		const bookSearchResults = document.getElementById("book-search-results");
		if (bookSearchResults) { 
			bookSearchResults.innerHTML += 
			("<li>"
				+ "<div className='book-title-and-author'>"
					+ "<span className='book-title'>" + data.title + "</span>"
					+ "<span className='by'> by </span>"
					+ "<span className='book-author'>" + data.authors + "</span>"
				+ "</div>"
				+ "<div className='description'>Details"
					+ "<div className='hidden-description'>" 
						+ "<span>"
							+ "<a className='rounded-link small-link' target='_blank' href=\"" + amazonSearchLink + "\">"
								+ "<img className='icon-small' src='/assets/amazon_icon.png'> Amazon</a>"
							+ "<a className='rounded-link small-link' target='_blank' href=\"" + googleSearchLink+ "\">"
								+ "<img className='icon-small' src='/assets/google_icon.png'> Google</a>"
						+"</span>"
						+ "<p>" + categories + pages + published + rating + ""
							+ "<span className='synopsis'>" + description + "<span>"
						+ "</p>"
					+ "</div>"
				+ "</div>"
				+ "<a className='book-cover-link' href='/books/" + result.id + "'>" 
					+ "<figure>"
						+ "<div id = '" + result.id + "' style='background: url(" + bookCoverLink + "?fife=w200-h300)'></div>"
					+ "</figure>"
				+ "</a>"
			+ "</li>");
		}
	}
	return response.results
}

*/
