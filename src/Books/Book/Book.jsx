import React, {FC} from 'react';

// interface bookObject {

// }

export interface BookProps {
	book_id: string,
	title: string,
	author: string,
	user: string,
	created_at: string,
}

export default function Book({ book_id, title, author, user, created_at }: BookProps) {
	// console.log(`id: ${book_id}`);
	// console.log(`title: ${title}`);
	// console.log(`book: ${JSON.stringify(book, null, 4)}`);
	// console.log(`book.book_id: ${book_id}`);
	console.log(`created_at: ${created_at}`);

	return (
		<li>
			<section>
				<figure className="book-cover" id={book_id}>	
					<a href={`/posts/${book_id}`} className="book-cover-link">
						<span className='selected-by'>
							Selected by <span className='name opaque-background'>{user}</span>
						</span>
						<span className="book-image">
							<img src={`https://books.google.com/books/content/images/frontcover/${book_id}?fife=w1200-h800`}
								alt={`${title} by ${author} (No book cover available)`} />
						</span>
					</a>	
				
					<figcaption>
								
						<button type="button" className="rounded-link add-rating " id = {`form-${title}-button`} >
							{/* onClick="getForm('form-<%= book.book %>')" */}
							<span>Add rating</span>
						</button>

						<div className="rating-form-wrapper " id={`form-${title}-button`}>
							{/* <%= form_for :rating, url: ratings_path do |f| %>
								<%= f.label :book %>
								<%= f.hidden_field :book, :value => book.book %>	 */}
								<p>	
									{/* <%= f.label :name %>
									<%= f.text_field :name, placeholder: "Name", autocomplete: "off", required: "true",
									value: session['name'], maxLength: 24 %> */}
								</p>
								{/* <span className="range-output">
									<output name="output" for = "rating_rating">?</output>
								</span> */}
								<p>
									{/* <%= f.label :rating, autocomplete: "off" %> */}
									{/* <input min="0" max="10" type="range" step="0.5" name="rating[rating]" id="rating_rating" 
									required onInput="output.value=parseFloat(rating_rating.value)" /> */}
								{/* </span> */}
								</p>
							{/* </p> */}
								{/* <%= f.text_area :notes, placeholder: "Notes (optional)", autocomplete: "off", maxLength: 400 %> */}
							<p>
								{/* <%= f.submit %> */}
							</p>

							{/* <% end %>	 */}
						</div>
					</figcaption>
				</figure>

				<div className="book-details-and-ratings">
					<ul>
						<li className='book-title-wrapper'>
							<span className="book-title">{title}</span>
						</li>

						{/* <% if book.author != 'undefined' %> */}
							<li className='book-author-wrapper'>
								<span className="by">by</span>
								<span className="book-author">{author}</span>
							</li>
						{/* <% end %> */}
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
