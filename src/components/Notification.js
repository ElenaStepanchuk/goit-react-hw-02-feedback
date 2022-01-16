import React from "react";
import PropTypes from "prop-types";
import css from "./Notification.module.css";
const Notification = ({ message, total }) => {
  return (
    <div className={css.notification_message}>
      {total === 0 && <h2>{message}</h2>}
    </div>
  );
};
export default Notification;
Notification.propTypes = {
  message: PropTypes.string,
  total: PropTypes.number,
};
