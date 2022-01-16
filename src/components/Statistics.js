import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.ul__style}>
      {total !== 0 && (
        <li className={css.statistics__good}>
          Good:&nbsp;<span className={css.span_statistics}>{good}</span>
        </li>
      )}
      {total !== 0 && (
        <li className={css.statistics__neutral}>
          Neutral:&nbsp;<span className={css.span_statistics}>{neutral}</span>
        </li>
      )}
      {total !== 0 && (
        <li className={css.statistics__bad}>
          Bad:&nbsp;<span className={css.span_statistics}>{bad}</span>
        </li>
      )}
      {total !== 0 && (
        <li className={css.statistics__total}>
          Total:&nbsp;
          <span className={css.span_statistics}>{total}</span>
        </li>
      )}
      {total !== 0 && (
        <li className={css.statistics__persent}>
          Positive feedback:&nbsp;
          <span className={css.span_statistics}>
            {positivePercentage}&nbsp;%
          </span>
        </li>
      )}
    </ul>
  );
};
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
