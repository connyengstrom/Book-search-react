import React from 'react';
import DisplayAmount from './DisplayAmount.jsx';

/* Component to display the list view, a table with all books.
Receives an array with all books to be displayed and the number of books found.
Returns goToDetails when the button for more information is clicked.
The view is then changed in the parent (App) */
const ListView = ({ listBooks, amountFound, goToDetails }) => {
  // Render the table only if we have at least one search result
  if (listBooks.length > 0) {
    return (
      <div className="listViewWrapper">
        {/* Component to display how many search results were found */}
        <DisplayAmount
          amount={amountFound}
          phraseBefore="Found: "
          phraseAfter="books in your search"
        />

        {/* Table with books. Create a row for headers */}
        <table className="table">
          <thead>
            <tr className="bold">
              <td>Title</td>
              <td>Author</td>
              <td>First Published Year</td>
            </tr>
          </thead>
          <tbody>
            {/* Loop through the book array and create a row per book */}
            {listBooks.map((data, i) => (
              <tr key={i}>
                <td className="bold">{data.title}</td>
                <td>{data.author_name[0]}</td>
                <td>{data.first_publish_year}</td>
                {/* Button to go to detailed view for this book.
                Returns goToDetails with 'i' as an argument, which is the book's position in the array of all search results. This allows the parent to know which book
                to show in detailed view when the function returns. */}
                <td>
                  <button onClick={() => goToDetails(i)}>More Information</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListView;
