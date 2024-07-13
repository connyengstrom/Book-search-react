import React from 'react';
import StandardInputField from './../components/StandardInputField.jsx';
import DropDownList from './../components/DropDownList.jsx';

/* Component that serves as a wrapper for everything related to the search function.
Returns the search phrase, the type selected by the user, and button clicks to the parent. */
const Search = ({ newSearchPhrase, setSearchType, clicked }) => {

  // An array of objects for the selections we want to have in the drop-down list
  const dropDownListSelections = [
    { value: "title", text: "Title" },
    { value: "author", text: "Author" },
    { value: "subject", text: "Subject" }
  ];
  
  return (
    <div className="searchWrapper">
      {/* Component for text field */}
      <div className="searchFieldsWrapper">
        <StandardInputField
          ph="Search..."
          newSearchPhrase={(e) => newSearchPhrase(e)}
          onEnterPress={clicked}
        />

        {/* Component for drop-down list */}
        <DropDownList selections={dropDownListSelections} setSearchType={(e) => setSearchType(e)} />
      </div>
      
      {/* Search button */}
      <button onClick={clicked}>Search</button>
    </div>
  );
}

export default Search;
