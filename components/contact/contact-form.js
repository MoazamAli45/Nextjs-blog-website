import React, { useEffect } from "react";
import styles from "./contact-form.module.css";
import { useRef } from "react";
import Notification from "./../ui/notification";
import { useState } from "react";
const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [showNotifation, setShowNotification] = useState(false);
  const [activeMessage, setActiveMessage] = useState();

  useEffect(() => {
    if (showNotifation && activeMessage.status !== "pending") {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 2000); // after 2 sec
      return () => {
        clearTimeout(timer);
      };
    }
  }, [showNotifation, activeMessage]);

  const showNotificationHandler = () => {
    setShowNotification(true);
  };
  const hideNotificationHandler = () => {
    setShowNotification(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const userName = nameRef.current.value;
    const userEmail = emailRef.current.value;
    const userMessage = messageRef.current.value;

    const data = {
      name: userName,
      email: userEmail,
      message: userMessage,
    };

    showNotificationHandler();

    setActiveMessage({
      status: "pending",
      title: "Sending Message",
      message: "Your message is on its way!",
    });
    //  Submitting Data
    fetch("/api/contact-util", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        setActiveMessage({
          status: "success",
          title: "Success",
          message: "Sent Message Successfully !",
        });
      })
      .catch((err) => {
        setActiveMessage({
          status: "error",
          title: "Error",
          message: err.message || "Error Sending Message !",
        });
      });
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you? </h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailRef} required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameRef} required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" ref={messageRef}></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {showNotifation && (
        <Notification
          notification={activeMessage}
          onClick={hideNotificationHandler}
        />
      )}
    </section>
  );
};

export default ContactForm;
