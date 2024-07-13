import React from 'react';
import DetailedView from './../components/DetailedView.jsx';
import ListView from './../components/ListView.jsx';

/* This component determines which view to display and renders the view.
Receives the array with search results. detailedView is a state that determines
which view should be displayed. amountFound is a variable with the number of books
found. Returns the goToDetails function with the book's "key" as an argument to the parent, this function
runs when the user has clicked the button for more information about a book. */
const View = ({ searchResult, detailedView, amountFound, goToDetails }) => {
  // If list view should be displayed.
  if (detailedView[0] === false) {
    /* Object for the list view. When goToDetails is run, the view should change to the detailed view. Pass the function to the parent (App) with the arguments 'true' and the book's position in the array */
    return (
      <ListView
        listBooks={searchResult}
        goToDetails={(i) => goToDetails([true, i])}
        amountFound={amountFound}
      />
    );
  } else {
    // If detailed view should be displayed.
    /* Object for the detailed view. When goToDetails is run, the view should change to the list view. Pass the function to the parent (App). */
    return (
      <DetailedView
        book={searchResult[detailedView[1]]}
        goToDetails={() => goToDetails([false, 0])}
      />
    );
  }
};

export default View;
