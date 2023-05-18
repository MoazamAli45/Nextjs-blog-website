import fs from "fs";
import path from "path";
import matter from "gray-matter";

const FilesPath = path.join(process.cwd(), "post-content");

export const getFilesNames = () => {
  return fs.readdirSync(FilesPath); // returns the array of file names
};

const getPostData = (fileName) => {
  const postSlug = fileName.replace(/\.md$/, ""); // removes the .md extensi
  const filePath = path.join(FilesPath, `${postSlug}.md`); // creates the path to the file

  const fileContent = fs.readFileSync(filePath, "utf-8"); // reads the file content

  //    matter extracts the metadata and content data from the file

  const { data, content } = matter(fileContent); // extracts the data and content from the file

  const postData = {
    slug: postSlug,
    ...data,
    content, // content as it is
  };

  return postData;
};

export const getALLPosts = () => {
  //  reading all the files present in the post-content folder
  const allFiles = getFilesNames(); // returns the array of file names
  // console.log("FilesName" + allFiles);

  //     as map returns a  new array, we are mapping the array of file names to the array of post data
  const allPosts = allFiles.map((fileName) => getPostData(fileName));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  // console.log("Posts " + sortedPosts);
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getALLPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};

export const getSinglePost = (slug) => {
  const allPosts = getALLPosts();
  const singlePost = allPosts.find((post) => post.slug === slug);
  return singlePost;
};
