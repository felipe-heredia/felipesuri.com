import React from "react";

import Author from "../components/Author";
import PostList from "../components/PostList";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Author />
    <PostList />
  </Layout>
);

export default IndexPage;
