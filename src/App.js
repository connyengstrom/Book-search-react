// Import React, hooks, CSS styles, and components
import React, { useEffect, useState } from 'react';
import './style.css';
import Search from './components/Search.jsx';
import View from './components/View.jsx';

export default function App() {
  //// Hooks ////
  // Input from the search field
  const [searchPhrase, setSearchPhrase] = useState('');

  // The first 30 results
  const [searchResult, setSearchResult] = useState([]);

  // The number of books that match the user's input
  const [amountFound, setAmountFound] = useState(0);

  // Determines which view is used. false = list, true = detailed information.
  // The second value in the array is the book's position in the search results array, necessary for the detailed view.
  const [detailedView, setDetailedView] = useState([false, 0]);

  // Holds the value for the drop-down list, start with title
  const [searchType, setSearchType] = useState('title');

  //// Functions ////
  // Asynchronous call to fetch data from the API.
  async function fetchRequest() {
    // Check that we actually have a string to search for so that we do not send unnecessary API requests
    if (searchPhrase !== '') {
      // URI that determines the subject and search phrase. searchType is the value from the drop-down list.
      let uri =
        'https://openlibrary.org/search.json?' +
        searchType +
        '=' +
        searchPhrase;
      const response = await fetch(uri);
      const books = await response.json();

      // Return JSON object with all results
      return books;
    }
  }

  // Function that runs when the user clicks the search button
  function searchBooks() {
    // Remove the old search results and set the view to list
    setSearchResult([]);
    setAmountFound(0);
    setDetailedView([false, 0]);

    if (searchPhrase.length > 0) {
      // Perform a new fetch
      fetchRequest()
        .then((books) => {
          // Save the first 30 books in searchResult
          setSearchResult(books.docs.slice(0, 50));
          // Also save the number of books found
          setAmountFound(books.numFound);
        })
        // Log error messages if we get any
        .catch((error) => console.log('Error: ', error));
    }
  }

  //// App component ////
  // Render all components and JSX in our app
  return (
    <div className="container">
      <div className="mainWrapper">
        <h1>Search Books</h1>

        {/* Component for the search function */}
        <Search
          newSearchPhrase={(i) => setSearchPhrase(i)}
          setSearchType={(e) => setSearchType(e)}
          clicked={() => searchBooks()}
        />

        {/* Component for the views */}
        <View
          searchResult={searchResult}
          detailedView={detailedView}
          amountFound={amountFound}
          goToDetails={(i) => setDetailedView(i)}
        />
      </div>
    </div>
  );
}
