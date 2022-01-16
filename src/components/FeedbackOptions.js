import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btn_section}>
      {Object.keys(options).map((option) => (
        <button
          className={css.btn}
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
