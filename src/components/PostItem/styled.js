import styled from "styled-components";

import { Label } from "@styled-icons/material-outlined/Label";
import { Link } from "gatsby";

export const PostItem = styled(Link)`
  padding-top: 160px;
  text-decoration: none;
`;

export const PostItemWrapper = styled.article`
  border: 1px solid #161616;
  margin-bottom: 15px;
  padding: 35px;
  color: #d0d4f5;
  transition: 1s all;

  &:hover {
    color: #7e8094;
  }
`;

export const PostItemDate = styled.p`
  font-size: 16px;
  padding-bottom: 15px;
  text-align: left;
`;

export const PostItemTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 15px;
`;

export const PostItemDescription = styled.p`
  font-size: 18px;
  font-weight: 30px;
  margin-bottom: 36px;
`;

export const PostItemCategoryWrapper = styled.div`
  display: flex;
  flex-direction: inline-block;
  text-align: center;
`;

export const PostItemLabel = styled(Label)`
  display: block;
  width: 15px;
  height: 15px;
`;

export const PostItemCategory = styled.p`
  margin-left: 15px;
  text-transform: lowercase;
`;
