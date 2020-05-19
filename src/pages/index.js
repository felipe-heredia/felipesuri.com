import React from "react";

import Author from "../components/Author";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Author />
    </Layout>
  );
};

export default IndexPage;
