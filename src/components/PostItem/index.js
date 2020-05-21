import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const PostItem = ({ slug, category, date, timeToRead, title, description }) => (
  <S.PostItem to={slug}>
    <S.PostItemWrapper>
      <S.PostItemDate>
        {date} • {timeToRead} min de leitura
      </S.PostItemDate>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDescription>{description}</S.PostItemDescription>
      <S.PostItemCategoryWrapper>
        <S.PostItemLabel />
        <S.PostItemCategory>{category}</S.PostItemCategory>
      </S.PostItemCategoryWrapper>
    </S.PostItemWrapper>
  </S.PostItem>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default PostItem;
