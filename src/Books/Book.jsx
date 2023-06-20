import React from 'react';
import './Book.scss';
import RatingForm from './RatingForm/RatingForm';
import { useState } from 'react';

const Book = ({ book }) => {
	const objectId = book.id;
	const bookId = book.get('book_id');
	const user = book.get('user');
	const author = book.get('author');
	const title = book.get('title');
	const [ratingFormOpen, setRatingFormOpen] = useState(false);

	return (
		<li>
			<section>
				<figure className="book-cover" id={bookId}>	
					<a href={`/posts/${bookId})}`} className="book-cover-link">
						<span className='selected-by'>
							Selected by <span className='name opaque-background'>{user}</span>
						</span>
						<span className="book-image">
							<img src={`https://books.google.com/books/content/images/frontcover/${bookId}?fife=w1200-h800`}
								alt={`${title} by ${author} (No book cover available)`} />
						</span>
					</a>	
				
					<figcaption>
								
						<button 
							type="button" 
							className="rounded-link add-rating" 
							id = {`form-${title}-button`} 
							onClick={() => setRatingFormOpen(!ratingFormOpen)}
						>
							Add rating
						</button>

						<div className={`rating-form-wrapper ${ratingFormOpen && 'form-show'}`} id={`form-${title}-button`}>
							<RatingForm
								objectId={objectId}
								open={ratingFormOpen}
							/>
						</div>
					</figcaption>
				</figure>

				<div className="book-details-and-ratings">
					<ul>
						<li className='book-title-wrapper'>
							<span className="book-title">{title}</span>
						</li>
						{ author && (
							<li className='book-author-wrapper'>
								<span className="by">by</span>
								<span className="book-author">{author}</span>
							</li>
						)}
					</ul>	
					{/* <ul className="ratings">
						<% if @ratings and @rating_count %>
							<% @ratings.each do |rating| %>
								<% if rating.book == book.book and rating != nil  and @rating_count != nil %>
									<% if @rating_count < 5 %>
										<li className="rating">
											<p className="name opaque-background"><%= rating.name %></p>:
											<span className="rating-number rating-<% if rating.rating.present? %><%= Integer(rating.rating) %><% end %>">
												<%= rating.rating %>
											</span>	
											<% if rating.notes and rating.notes != '' %>
												&nbsp;📖
												<span className="rating-notes">
													<%= rating.notes %>
												</span>	
											<% end %>
										</li>
									<% end %>
									
									<% @rating_count += 1 %>
									<% if rating.rating.present? %>
										<% @rating_total += rating.rating %>
									<% end %>
								<% end %>							
							<% end %>	
								<li>
									<% if @rating_count > 5 %>

									<span className="more">...<%= @rating_count - 5 %> more</span> 
									<a href="/posts/<%= book.id %>" className="rounded-link small-link">See all</a>
									
									<% end %>
								</li>
							<% if @rating_total == 0 %>
								<li><em>No ratings yet</em></li>	
							<% else %>
							<!-- <input type="number" value='<%= (@rating_total / @rating_count) %>' id="average_output"> -->
								<li className="average-rating">
									<div className="average-rating-text">Average rating:</div>
									<!-- <output name="average_output" for="average_output" onload="average_output.value=parseFloat(average_output.value)"></output> -->
									<p className="rating-number average-rating-number rating-<%= Integer(((@rating_total / @rating_count) * 10).floor / 10.0) %>">
										<%= (((@rating_total / @rating_count) * 100.00).floor / 100.00) %>
									</p>
								</li>
							<% end %>

						<% end %>
						<li>
							<div className="search-links book-search-links">
								<a className="rounded-link fixed-width-link" href="https://www.amazon.com/s?k=<%= book.title %>+<%= book.author %>
									&ref=as_li_tl?ie=UTF8&tag=bookbros03-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=1405206276"
								target="_blank">
									<img className="icon" src="/assets/amazon_icon.png" alt=""> 
									<span className="text-after-icon">Amazon search</span>
								</a>
								<a className="rounded-link fixed-width-link" href="https://books.google.ca/books?id=<%= book.book %>"
								target="_blank">
									<img className="icon" src="/assets/google_icon.png" alt=""> 
									<span className="text-after-icon">Google search</span>
								</a>
								<a className="rounded-link fixed-width-link" href="https://www.torontopubliclibrary.ca/search.jsp?Ntt=<%= book.title %>+<%= book.author %>" target="_blank">
									<img className="icon library" src="/assets/library_icon.svg" alt=""> 
									<span className="text-after-icon">Library search</span>
								</a>
							</div>
						</li>

						<% @rating_count = 0 %>
						<% @rating_total = 0 %>	
					</ul> */}
				</div>
			</section>
		</li>
	);
}

export default Book;
