import React from "react";
import PropTypes from "prop-types";

export const Title = ({ title }) => {
  return (
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
