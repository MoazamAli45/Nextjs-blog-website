import React from "react";
import Link from "next/link";
import styles from "./post-item.module.css";
import Image from "next/image";
const PostItem = (props) => {
  const { slug, image, title, excerpt, date } = props.post;

  const FormatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long", // January  format
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={styles.post}>
      {/*   now we will be showing text in search engine */}
      <Link href={`/posts/${slug}`}>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{FormatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
