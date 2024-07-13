import React from 'react';

/* Component for an input field. newSearchPhrase runs when the input changes and the value is sent
back to the parent.
The component is not so necessary as the same thing can be done with one line of code in the parent,
but it makes the code more organized. 
'ph' is used as a placeholder in the input field */
const StandardInputField = ({ ph, newSearchPhrase, onEnterPress }) => {
  return (
    <input
      type="text"
      placeholder={ph}
      onChange={(e) => newSearchPhrase(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onEnterPress();
        }
      }}
    ></input>
  );
};

export default StandardInputField;
