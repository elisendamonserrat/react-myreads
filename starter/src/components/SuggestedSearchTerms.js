import React from "react";
import { validSearchTerms } from "../data";

export const SuggestedSearchTerms = ({ message, updateQuery }) => {
  return (
    <div className="suggested-queries-container">
      <div>
        <h3>{message} Try with one of the following terms:</h3>
        <div className="suggested-queries-list">
          {validSearchTerms.map((term, i) => {
            return (
              <div
                key={i}
                onClick={() => updateQuery(term)}
                className="suggested-queries-el"
              >
                {term}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
