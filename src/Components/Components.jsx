
export const Logo = ({ brand }) => {
	const brandFileName = brand === 'Book Bros' ? 'bookbros_logo.png' : 'bookbabes_logo.png';
	return (
		<div className="logo">
			<img 
				id="logo"
				src={brandFileName} 
				className="logo-appear"
				alt={brand}	
			 />
		</div>
	);
};

const twoDecimalDigits = (num) => (Math.round(num * 100) / 100).toFixed(2);

export const AverageRating = ({ averageRating }) => {
	if (!averageRating) return (
		<span className="rating-number no-rating">
			N/A
		</span>
	);
	return (
		<span className={`rating-number rating-${Math.floor(averageRating)}`}>
			{!averageRating ? 'N/A' : twoDecimalDigits(averageRating)}
		</span>
		)
};

export const BookTitleAndAuthor = ({ 
	title, author, averageRating, sameLine
}) => (
	<ul className= {`${sameLine && 'same-line'}`} >
		<li className='book-title-wrapper'>
			<span className="book-title">{title}</span>
			{ author && (
				<div className='book-author-wrapper'>
					<span className="by">by </span>
					<span className="book-author">{author}</span>
				</div>
			)}
		</li>

		{ averageRating && (
			<li className='book-rating-wrapper'>
				<AverageRating averageRating={averageRating} />
			</li>
		)}
	</ul>
);

export const Empty = ({ object = "books" }) => (
	<div className="empty empty-short">
		<div>Your club hasn't added any { object } yet!</div>
	</div>
);

