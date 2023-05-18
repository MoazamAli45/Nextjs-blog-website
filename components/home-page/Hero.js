import React, { Fragment } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/moazam.png"
          alt="An image showing Syed Moazam Ali"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi I&apos;m Syed Moazam Ali</h1>
      <p>
        My blogs are related to Frontend Development-especially React and Next
        Js
      </p>
    </section>
  );
};

export default Hero;
