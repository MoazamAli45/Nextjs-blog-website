import AllPost from "@/components/posts/all-post";
import React from "react";

import { getALLPosts } from "./../../helpers/post-data";
import Head from "next/head";
const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        ></meta>
      </Head>
      <AllPost posts={props.posts} />;
    </>
  );
};

export function getStaticProps() {
  const allPosts = getALLPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
