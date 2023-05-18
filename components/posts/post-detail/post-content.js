import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
//    for code snippet
//  this is too big third pakage now lightning version is used
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

//  lightning version
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
//   only for web development  so that other languages make it heavy
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  //   Registering languages
  SyntaxHighlighter.registerLanguage("js", js);
  SyntaxHighlighter.registerLanguage("css", css);

  //  objec conatianing all tags
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    //   all images are treated as p in markdown
    // so
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      //   if not image then return p
      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { children, className } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          // children={children}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <section className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </section>
  );
};

export default PostContent;
