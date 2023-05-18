import ContactForm from "@/components/contact/contact-form";
import React from "react";
import Head from "next/head";
const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me </title>
        <meta name="description" content="Contact me " />
      </Head>
      <ContactForm />
    </>
  );
};

export default contact;
