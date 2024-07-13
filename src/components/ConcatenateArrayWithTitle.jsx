import React, { useState } from 'react';
import '.././style.css';

const ConcatenateArrayWithTitle = ({ title, arr = [], delimiter }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayArray = showAll ? arr : arr.slice(0, 9);
  const isTruncated = arr.length > 9;

  return (
    <p>
      <span className="bold">{title} </span>
      {displayArray.join(delimiter)}
      {isTruncated && (
        <span onClick={handleToggleShowAll} className="toggle-more">
          {showAll ? ' ...show less' : ' ...show more'}
        </span>
      )}
    </p>
  );
};

export default ConcatenateArrayWithTitle;