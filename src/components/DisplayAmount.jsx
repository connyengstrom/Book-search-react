import React from 'react';

/* Component to display how many search results were found.
The component is not so necessary as the same thing can be printed with one line of code in the parent,
but it makes the code more organized. */
const DisplayAmount = ({ amount, phraseBefore, phraseAfter }) => {
  // Only show the result if we have at least one hit.
  if (amount > 0) {
    return (
      <p>
        {phraseBefore} {amount} {phraseAfter}
      </p>
    );
  }
};

export default DisplayAmount;
