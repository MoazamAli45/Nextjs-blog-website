import PostGrid from "../posts/post-grid";
import styles from "./featured-post.module.css";

import React from "react";

const FeaturedPosts = (props) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
