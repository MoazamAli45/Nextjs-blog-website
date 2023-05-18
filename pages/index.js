import { Fragment } from "react";
import Hero from "./../components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/featured-post";
import { getFeaturedPosts } from "@/helpers/post-data";
import Head from "next/head";
export default function Home(props) {
  // const DUMMY_POSTS = [
  //   {
  //     slug: "getting-started-with-nextjs",
  //     title: "Getting started with NextJS",
  //     image: "getting-started-nextjs.png",
  //     excerpt:
  //       "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  //     date: "2021-02-10",
  //   },
  //   {
  //     slug: "getting-started-with-nextjs2",
  //     title: "Getting started with NextJS",
  //     image: "getting-started-nextjs.png",
  //     excerpt:
  //       "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  //     date: "2021-02-10",
  //   },
  //   {
  //     slug: "getting-started-with-nextjs3",
  //     title: "Getting started with NextJS",
  //     image: "getting-started-nextjs.png",
  //     excerpt:
  //       "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  //     date: "2021-02-10",
  //   },
  // ];

  return (
    <Fragment>
      <Head>
        <title>AlSyed&apos;Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />

      </Head>

      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const FeaturedPosts = getFeaturedPosts();

  return {
    props: {
      posts: FeaturedPosts,
    },
  };
}
