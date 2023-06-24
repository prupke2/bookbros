import React, {FC} from 'react';
import './BookSearch.scss';
import { useSearchParams } from "react-router-dom";
import Form from '../Form/Form';

const BookSearch = ({ }) => {
	let [searchParams, setSearchParams] = useSearchParams();
	const bookSearch = searchParams.get('book_search');

	return (
		<div>
			 <span>.</span>
			{/* <% if !params[:book_search] %> */}
			{ !bookSearch &&
				<>
					<h2>Find a book</h2>
					<p className="tinted-background">Search by title, author, or both.</p>
				</>	
			}
			
			<form id="book_search_form">
				<input type="text" id="book_search" name="book_search" required value={bookSearch || ''} />
				<input className="rounded-link solid-link" type="submit" value="Search books" />
			</form>
		</div>
	);
}

export default BookSearch;

// <% content_for :title, "Book Search" %>

// <main>
// 	<% if !params[:book_search]  %>
// 		<h2>Find a book</h2>
// 		<p class="tinted-background">Search by title, author, or both.</p>
// 	<% end %>

// 	<form action="/books" method="GET" id="book_search_form">
// 		<input type="text" id="book_search" name="book_search" required="true" minlength="3" maxlength="50" 
// 		value="<%= @search %>" autofocus>
// 		<input class="rounded-link solid-link" type="submit" value="Search books">
// 	</form>

// 	<% if params[:book_search] %>
// 		<p class="tinted-background">
// 			Showing results for '<%= @search %>'. Now select a book for your club!
// 	<% end %>

// 	<%= form_with model: @book, id: 'template' do |f| %>
// 	<% end %>

// 	<ul id="book-search-results"></ul>
// 	<% if @search %>
// 		<script src="https://www.googleapis.com/books/v1/volumes?q=<%= @search %>&callback=googleBooksApiResponse"></script>
// 	<% end %>
// </main>
