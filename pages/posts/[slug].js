import PostContent from "@/components/posts/post-detail/post-content";
import React from "react";
import { getSinglePost } from "@/helpers/post-data";
import { getFilesNames } from "@/helpers/post-data";
import Head from "next/head";
const PostDetail = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
};
export async function getStaticPaths() {
  // prerendering all pages in advance
  const fileNames = getFilesNames();
  const slugs = fileNames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    //  paths consist of arrays of objects
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { params } = context;
  // console.log(params);

  const Post = getSinglePost(params.slug);
  return {
    props: {
      post: Post,
    },
    revalidate: 600, // every 10 minutes
  };
}

export default PostDetail;
