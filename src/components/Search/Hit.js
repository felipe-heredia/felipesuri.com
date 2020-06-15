import React from "react";
import PostItem from "components/PostItem";

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    category={hit.category}
    date={hit.date}
    title={hit.title}
    description={hit.description}
  />
);

export default Hit;
