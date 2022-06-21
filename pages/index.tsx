import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Posts from "../components/Posts";
import Layout from "../components/Layout";
import {
  Heading,
  VStack,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import type { IPost } from "../types/post.type";

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
  // const handleSearch = () => {
  //     fetch("/api", {
  //         method: "POST",
  //         body: JSON.stringify({
  //             fullTime: true,
  //             location: "Taiwan",
  //             page: 0,
  //             term: "react",
  //         }),
  //     })
  //         .then(res => res.json())
  //         .then(console.log)
  //         .catch(console.log)
  // }
  return (
    <Layout>
      <VStack spacing={8}>
        <Heading as="h1" fontSize="8xl" maxW={{ base: "m", md: "xl" }}>
          It's{" "}
          <Box
            as="span"
            bgGradient="linear-gradient(90deg,#326199,#4fb1a1,#fcc055,#eb8d50,#df6e5b)"
            bgClip="text"
            _hover={{
              bgGradient: "linear-gradient(45deg, red, blue)",
            }}
          >
            Annabella
          </Box>
        </Heading>
      </VStack>
      {/* <SearchBox /> */}
      <Heading as="h2" justifyContent={"center"} size="lg" my={6}>
        Recent posts
      </Heading>
      <Posts posts={posts} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // get all folders' in content/portfolios
  const folders = fs.readdirSync(path.join(process.cwd(), "content", "blogs"));

  // iterate through all the files in /content/posts
  const posts = folders.map((slug) => {
    const content = fs.readFileSync(
      path.join("content", "blogs", slug, "index.mdx"),
      "utf-8"
    );
    const { data: frontMatter } = matter(content);
    return {
      frontMatter,
      slug: slug,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
