import React from 'react';
import './UserBookList.scss';
import { BookTitleAndAuthor } from '../../../Components/Components';

const UserBookList = ({ bookData, ratings }) => {
	console.log('data:', bookData);
	console.log('ratings:', ratings);

	return (
		<div className="book-data-wrapper">
			{ bookData.map(user => (
				<section className="club-stats-wrapper">
					<div className="club-stat-books">
						<p className="big-name tinted-background user-books"> 
							<span className="name">{user.id}'s</span> books
						</p>
						<div className="book-ratings-wrapper">
							{ user.data.map(b => {
								console.log('b:', b);
								return (
									<BookTitleAndAuthor
										title={b.book}
										author={b.author}
										averageRating={b.y}
										sameLine
									/>
								);
							})}
						</div>
{/* 
								<div>
									<a class="opaque-background" href="#">
										<span class='book-title-wrapper'>
											<span class="book-title">{b.book}></span>
										</span>
										<span class='book-author-wrapper'>
											<span class="by">by</span>
											<span class="book-author">{b.author}</span>
											<span class="book-rating">{b.y}</span>
										</span>
									</a>
										
									<% @ratings.each do |rating| %>
										<% if rating.book != nil and rating.rating != nil %>
											<% if rating.book == book.book %>
												<% @rating_count += 1 %>
												<% @current_book_rating_count += 1 %>
												<% @rating_total += rating.rating %>
												<% @current_book_rating_total += rating.rating %>
												<% if rating.name == user.user %>
													<% @self_rating_count += 1 %>
													<% @self_rating_total += rating.rating %>
												<% end %>
											<% end %>
										<% end %>
									<% end %>
								
									<% @current_book_rating = nil %>
									<% if (@current_book_rating_count.present? && @current_book_rating_count != 0) %>
										<% @current_book_rating = ((@current_book_rating_total / @current_book_rating_count) * 100.00).floor / 100.00 %>
									<% end %>

									<%= render :partial => 'rating', locals: { rating: @current_book_rating } %>

									<%# Check if this book is the current highest or lowest rated %>
									<% if @current_book_rating.present? && @current_book_rating > @highest_book_rating %>
										<% @highest_book_rating = @current_book_rating %>
										<% @highest_rated_book = book.id %>
										<% @highest_rated_book_title = book.title %>
										<% @highest_rated_book_author = book.author %>
										<% @highest_rated_book_user = user.user %>
									<% end %>

									<% if @current_book_rating.present? && @current_book_rating < @lowest_book_rating %>
										<% @lowest_book_rating = @current_book_rating %>
										<% @lowest_rated_book = book.book %>
										<% @lowest_rated_book_title = book.title %>
										<% @lowest_rated_book_author = book.author %>
										<% @lowest_rated_book_user = user.user %>
									<% end %>

								</div>
							<% end %>

						<% end %> */}
					</div>
				</section>
			))}
		</div>
	);
}

export default UserBookList;
