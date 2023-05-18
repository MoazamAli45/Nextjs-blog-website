import React from "react";
import PostItem from "./post-item";
import styles from "./post-grid.module.css";
const PostGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
