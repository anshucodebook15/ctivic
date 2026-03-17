import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://dolci.theasylum.in/wp-json/wp/v2/";

const useAPI = () => {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  const fetchPostBySlug =
    () =>
    async (
      slug = "step-by-step-guide-to-the-perfect-classic-french-croissant",
    ) => {
      try {
        setError("");
        // const response = await axios.get('https://dolci.theasylum.in/wp-json/wp/v2/posts?slug=step-by-step-guide-to-the-perfect-classic-french-croissant&_embed=1')
        const response = await axios.get(
          `${baseURL}posts?slug=${slug}&_embed=1`,
        );

        if (!response.data || response.data.length === 0) {
          setError("No post found");
          throw new Error("Post not found");
        }

        const creactPost = {
          title: response.data[0].title.rendered,
          content: response.data[0].content.rendered,
          featuredImage: response.data[0]._embedded["wp:featuredmedia"]
            ? response.data[0]._embedded["wp:featuredmedia"][0].source_url
            : null,
          slug: response.data[0].slug,
        };
        setPost(creactPost);
        return { data: creactPost };
      } catch (error) {
        console.error("Error fetching data:", error);
        return { message: "something went wrong" };
      }
    };

  const fetchPostSlug = (slug = "sdcs") => {
    return `${baseURL}posts?slug=${slug}&_embed=1`;
  };

  const fetchAllPosts = () => {
    return `${baseURL}posts?_embed`;
  };

  useEffect(() => {
    fetchPostBySlug();
  }, []);

  // console.log(post);

  return { post, error, fetchPostBySlug, fetchPostSlug, fetchAllPosts };
};

export default useAPI;
