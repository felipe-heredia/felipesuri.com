import React from "react";

import Layout from "components/Layout";
import SEO from "components/seo";

import ButtonLink from "components/ButtonLink";
import Search from "components/Search";

const BlogList = props => (
  <Layout>
    <SEO title="Blog" />
    <ButtonLink to="/" direction="left">
      ← Voltar para a home
    </ButtonLink>
    <Search />
  </Layout>
);

export default BlogList;
