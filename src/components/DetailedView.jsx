import React from 'react';
import ConcatenateArrayWithTitle from './ConcatenateArrayWithTitle.jsx';

/* Component to display more details about a book.
Receives the book as an object. The function goToDetails runs when the user clicks
on go back. */
const DetailedView = ({ book, goToDetails }) => {
  // Declare variable for URL to book cover
  let coverUrl;
  // If the book has an ISBN number, create URL as a text string, otherwise create an empty string
  book.isbn != undefined
    ? (coverUrl =
        'https://covers.openlibrary.org/b/isbn/' + book.isbn[0] + '-M.jpg')
    : (coverUrl = '');

  return (
    <>
      {/* Button to go back to the list view,
      sends back the goToDetails function to the "View" component */}
      <button className="back-button" onClick={() => goToDetails()}>Back</button>
    <div className="detailed-view-wrapper">
      {/* Print the book's title */}
      <p>
        <span className="bold">Title: </span>
        {book.title}
      </p>

      {/* Print all authors, publishers, languages, and subjects of the book */}
      <ConcatenateArrayWithTitle
        title="Authors:"
        arr={book.author_name}
        delimiter=", "
      />
      <ConcatenateArrayWithTitle
        title="Publishers:"
        arr={book.publisher}
        delimiter=", "
      />
      <ConcatenateArrayWithTitle
        title="Languages:"
        arr={book.language}
        delimiter=", "
      />
      <ConcatenateArrayWithTitle
        title="Subjects:"
        arr={book.subject}
        delimiter=", "
      />

      {/* Show the book cover image.
      Not all books have ISBN or image, in that case an empty element is printed. */}
      <img src={coverUrl} alt="Book Cover"></img>
    </div>
    </>
  );
};

export default DetailedView;
