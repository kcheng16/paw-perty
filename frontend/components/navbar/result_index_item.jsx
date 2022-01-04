import React from "react";
import { Link } from "react-router-dom";

const ResultsIndexItem = ({ user, closeSearch }) => {
  return (
    <li className="results-index-item" onClick={closeSearch}>
      <Link to={`/users/${user.id}`}>
        <div className="search-titles">

        </div>
      </Link>
    </li>
  );
}

export default ResultsIndexItem;