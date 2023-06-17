import React from 'react';
import Link from '../Link/Link';
// import Parse from 'parse';
// import { useParseQuery } from '@parse/react';
import './Home.scss';
import Books from '../Books/Books';
import Book from '../Books/Book/Book';

const Home = () => {
	// const parseQuery = new Parse.Query('Books');
	const results = [
		{
				"createdAt": "2023-04-23T17:15:02.183Z",
				"updatedAt": "2023-04-23T17:15:02.183Z",
				"book_id": "QfbS_rl5VsoC",
				"title": "Strangers on a Train",
				"author": "Patricia Highsmith",
				"Asdf": 14,
				"created_at": "2019-04-12 02:38:39.545419",
				"updated_at": "2019-04-12 02:38:39.545419",
				"club": "BRIjNbcPR9",
				"user": "Andrew",
				"objectId": "7XMpAeXYVi"
		},
		{
				"createdAt": "2023-04-23T17:15:02.183Z",
				"updatedAt": "2023-04-23T17:15:02.183Z",
				"book_id": "4ZQnDwAAQBAJ",
				"title": "Conversations with Friends",
				"author": "Sally Rooney",
				"Asdf": 18,
				"created_at": "2019-04-12 03:48:30.254486",
				"updated_at": "2019-04-12 03:48:30.254486",
				"club": "BRIjNbcPR9",
				"user": "Mike",
				"objectId": "kEi4Um89JY"
		}
	]
	// console.log(`parseQuery: ${JSON.stringify(parseQuery, null, 4)}`);
	// const {
  //   isLive, // Indicates that Parse Live Query is connected
  //   isLoading, // Indicates that the initial load is being processed
  //   isSyncing, // Indicates that the library is getting the latest data from Parse Server
  //   results, // Stores the current results in an array of Parse Objects
  //   count, // Stores the current results count
  //   error, // Stores any error
  //   reload // Function that can be used to reload the data
  // } = useParseQuery(
  //   parseQuery, // The Parse Query to be used
  //   {
  //     enabled: true, // Enables the parse query (default: true)
  //     enableLocalDatastore: true, // Enables cache in local datastore (default: true)
  //     enableLiveQuery: true // Enables live query for real-time update (default: true)
  //   }
  // );
	return (
		<main>
		{/* <% if session['brand'] == 'Book Babes' %>
			<img id="logo" class="logo-appear" src="/assets/bookbabes_logo.png" alt="Book Babes">
		<% else %> */}
			<img id="logo" className="logo-appear" src="bookbros_logo.png" alt="Book Bros" />
		{/* <% end %> */}
		
		{/* <% if session['club'] != 10 %>
			<% if @books.length == 0 %> */}
			{ !results && (
				<div className="empty empty-short">
					<div>Your club hasn't added any books yet!</div>
				</div>
			)}
			{results && (
				<ul>
			{results?.map(
				book => {
					// console.log(`book: ${JSON.stringify(book.id, null, 4)}`);
					// console.log(`book.id: ${JSON.stringify(book.id, null, 4)}`);
					// console.log(`book.book_id: ${JSON.stringify(book.book_id, null, 4)}`);
					// console.log(`book objCount: ${JSON.stringify(book._objCount, null, 4)}`);
					console.log(`typeof: ${typeof(book)}`);
					// console.log(`typeof book.id: ${typeof(book.id)}`);
					// console.log(`typeof book.book_id: ${typeof(book.book_id)}`);
					// console.log(`typeof book.createdAt: ${typeof(book.createdAt)}`);
					console.log(`keys: ${Object.keys(book)}`);
					console.log(`values: ${Object.values(book)}`);
					// console.log(`book: ${JSON.stringify(book, null, 4)}`);

					// console.log(`id: ${book.id}`);
					// console.log(`objCount: ${book._objCount}`);
					// console.log(`className: ${book.className}`);
					// console.log(`createdAt: ${book.createdAt}`);
					// console.log(`title: ${book.title}`);

					// console.log(`book.title: ${book.title}`);

					// console.log(`book.book_id: ${book.book_id}`);
					// console.log(`book[book_id: ${book['book_id']}`);


					return (
						
						// <li>
						// 	<section>
						// 		<figure className="book-cover" id={book.book_id}>	
						// 			<a href={`/posts/${book['book_id']}`} className="book-cover-link">
						// 				<span className='selected-by'>
						// 					Selected by <span className='name opaque-background'>{book.user}</span>
						// 				</span>
						// 				<span className="book-image">
						// 					<img src={`https://books.google.com/books/content/images/frontcover/${book['book_id']}?fife=w1200-h800`}
						// 						alt={`${book['title']} by ${book['author']} (No book cover available)`} />
						// 				</span>
						// 			</a>	
						// 		</figure>
						// 	</section>
						// </li>
							
						<Book
							book_id = {book.book_id}
							title = {book.title}
							user = {book.user}
							author = {book.author}
							created_at = {book.created_at}
						/>
					);
				}
			)}
		</ul>
				// <>
				// 	{/* <Link url='/books' text = 'Find a book' />	 */}
				// 	<Books
				// 		books={results}
				// 	/>
				// </>
			)}

			{/* <% end %>
		<% else %> */}
			<div className='what-is'>
				<Link url="/about" text="What is BookBros?" />
			</div>
			<div className="empty">
				<div className="button-group">
					<Link url='/clubs' text = 'Start a club now' />
					<Link url='/books' text = 'Try a quick demo' />	
				</div>
			</div>

	{/* <% end %>	 */}
{/* 
	<% @books.each_with_index do |book, count| %>

		<% if count == 0 %>
			<div class="book-text current-book-text">
				| Current book |
			</div>
		<% end %>	
		<section>
			<figure class="book-cover" id="<%= book.book %>">	
				<a href="/posts/<%= book.id %>" class="book-cover-link">
					<span class='selected-by'>
						Selected by <span class='name opaque-background'><%= book.user %></span>
					</span>
					<span class="book-image">
						<img src="https://books.google.com/books/content/images/frontcover/<%= book.book %>?fife=w1200-h800"
							alt="<%= book.title %> by <%= book.author %> (No book cover available)">
					</span>
				</a>	
			
				<figcaption>
							
					<button type="button" class="rounded-link add-rating " id = "form-<%= book.book %>-button"
						onclick="getForm('form-<%= book.book %>')">
						<span>Add rating</span>
					</button>

					<div class="rating-form-wrapper " id="form-<%= book.book %>">
						<%= form_for :rating, url: ratings_path do |f| %>
							<%= f.label :book %>
							<%= f.hidden_field :book, :value => book.book %>	
							<p>	
								<%= f.label :name %>
								<%= f.text_field :name, placeholder: "Name", autocomplete: "off", required: "true",
								value: session['name'], maxLength: 24 %>
							</p>
							<span class="range-output">
								<output name="output" for = "rating_rating">?</output>
							</span>
							<p>
								<%= f.label :rating, autocomplete: "off" %>
								<input min="0" max="10" type="range" step="0.5" name="rating[rating]" id="rating_rating" 
								required="true" oninput="output.value=parseFloat(rating_rating.value)">
							</span>
							</p>
						</p>
							<%= f.text_area :notes, placeholder: "Notes (optional)", autocomplete: "off", maxLength: 400 %>
						<p>
							<%= f.submit %>
						</p>

						<% end %>	
					</div>
				</figcaption>
			</figure>

			<div class="book-details-and-ratings">
				<ul>
					<li class='book-title-wrapper'>
						<span class="book-title"><%= book.title %></span>
					</li>

					<% if book.author != 'undefined' %>
						<li class='book-author-wrapper'>
							<span class="by">by</span>
							<span class="book-author"><%= book.author %></span>
						</li>
					<% end %>
				</ul>	
				<ul class="ratings">
					<% if @ratings and @rating_count %>
						<% @ratings.each do |rating| %>
							<% if rating.book == book.book and rating != nil  and @rating_count != nil %>
								<% if @rating_count < 5 %>
									<li class="rating">
										<p class="name opaque-background"><%= rating.name %></p>:
										<span class="rating-number rating-<% if rating.rating.present? %><%= Integer(rating.rating) %><% end %>">
											<%= rating.rating %>
										</span>	
										<% if rating.notes and rating.notes != '' %>
											&nbsp;📖
											<span class="rating-notes">
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

								<span class="more">...<%= @rating_count - 5 %> more</span> 
								<a href="/posts/<%= book.id %>" class="rounded-link small-link">See all</a>
								
								<% end %>
							</li>
						<% if @rating_total == 0 %>
							<li><em>No ratings yet</em></li>	
						<% else %>
						<!-- <input type="number" value='<%= (@rating_total / @rating_count) %>' id="average_output"> -->
							<li class="average-rating">
								<div class="average-rating-text">Average rating:</div>
								<!-- <output name="average_output" for="average_output" onload="average_output.value=parseFloat(average_output.value)"></output> -->
								<p class="rating-number average-rating-number rating-<%= Integer(((@rating_total / @rating_count) * 10).floor / 10.0) %>">
									<%= (((@rating_total / @rating_count) * 100.00).floor / 100.00) %>
								</p>
							</li>
						<% end %>

					<% end %>
					<li>
						<div class="search-links book-search-links">
							<a class="rounded-link fixed-width-link" href="https://www.amazon.com/s?k=<%= book.title %>+<%= book.author %>
								&ref=as_li_tl?ie=UTF8&tag=bookbros03-20&camp=15121&creative=330641&linkCode=as2&creativeASIN=1405206276"
							target="_blank">
								<img class="icon" src="/assets/amazon_icon.png" alt=""> 
								<span class="text-after-icon">Amazon search</span>
							</a>
							<a class="rounded-link fixed-width-link" href="https://books.google.ca/books?id=<%= book.book %>"
							target="_blank">
								<img class="icon" src="/assets/google_icon.png" alt=""> 
								<span class="text-after-icon">Google search</span>
							</a>
							<a class="rounded-link fixed-width-link" href="https://www.torontopubliclibrary.ca/search.jsp?Ntt=<%= book.title %>+<%= book.author %>" target="_blank">
								<img class="icon library" src="/assets/library_icon.svg" alt=""> 
								<span class="text-after-icon">Library search</span>
							</a>
						</div>
					</li>

					<% @rating_count = 0 %>
					<% @rating_total = 0 %>	
				</ul>
			</div>
		</section>
		<% if count == 0 %>
			<% if @books.length > 1 %>
				<div class="book-text previous-books">| Previous books |</div>
			<% end %>
		<% end %>
	<% end %> */}

	</main>
	)
};

export default Home;
