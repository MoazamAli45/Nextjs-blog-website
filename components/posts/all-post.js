import React from "react";
import classes from "./all-post.module.css";
import PostGrid from "./post-grid";

const AllPost = (props) => {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPost;
