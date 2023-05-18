import React from "react";
import classes from "./notification.module.css";
import ReactDOM from "react-dom";
const Notification = (props) => {
  const { title, status, message } = props.notification;
  let notificationStatus = "";
  if (status === "success") {
    notificationStatus = classes.success;
  } else if (status == "error") {
    notificationStatus = classes.error;
  }

  return ReactDOM.createPortal(
    <div
      className={`${classes.notification} ${notificationStatus}`}
      onClick={props.onClick}
    >
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notification")
  );
};

export default Notification;
