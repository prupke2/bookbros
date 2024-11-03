import React from 'react';
import './UserBookList.scss';
import { BookTitleAndAuthor } from '../../../Components/Components';

const UserBookList = ({ bookData }) => (
	<div className="book-data-wrapper">
		{ bookData.map(user => (
			<section key={user.id} className="club-stats-wrapper">
				<div className="club-stat-books">
					<p className="big-name tinted-background user-books"> 
						<span className="name">{user.id}'s</span> books
					</p>
					<div className="book-ratings-wrapper">
						{ user.data.map(b => (
							<BookTitleAndAuthor
								key={b.book}
								title={b.book}
								author={b.author}
								averageRating={b.y}
								sameLine
							/>
						))
						}
					</div>
				</div>
			</section>
		))}
	</div>
);

export default UserBookList;
