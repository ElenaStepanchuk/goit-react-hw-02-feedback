import React from "react";
import PropTypes from "prop-types";
import css from "./Section.module.css";
function Section({ title, children }) {
  return (
    <div className={css.section_feedback}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
export default Section;
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
