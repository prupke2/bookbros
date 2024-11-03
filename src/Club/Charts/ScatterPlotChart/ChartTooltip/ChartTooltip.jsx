import './ChartTooltip.scss';

const ChartTooltip = ({ slice }) => (
	<aside className="tooltip-wrapper">
		<div className='tooltip-name'>{slice.serieId}</div>
		<div className='tooltip-book book-title'>{slice.data.book}</div>
		<div className='book-author-wrapper'>
			<span className="by">by </span>
			<span className="book-author">{slice.data.author}</span>
		</div>
		{ slice.data?.min && (
			<div className='lowest-rated'>🤡 Lowest-rated book</div>
		)}
		{ slice.data?.max && (
			<div className='highest-rated'>⭐ Highest rated book</div>
		)}
		<div>Avg. Rating:&nbsp;
			<div className={`rating-number average-rating-number rating-${Math.floor(slice.data.y)}`}>
				{slice.data.y?.toFixed(2)}
			</div>
		</div>
	</aside>
);

export default ChartTooltip;
