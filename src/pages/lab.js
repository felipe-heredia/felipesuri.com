import React from "react";

import Layout from "components/Layout";
import SEO from "components/seo";
import Lab from "components/Lab";

import Warning from "components/Warning";

const LabPage = () => (
  <>
    <Warning text="Esta página está em construção!" />
    <Layout>
      <SEO title="Lab" />
      <Lab />
    </Layout>
  </>
);

export default LabPage;
