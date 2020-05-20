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

  border-radius: 10px;
  height: 100%;
  position: relative;
  will-change: border-color;

  &:after,
  &:before {
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.5s;
  }

  &:before {
    border-radius: 10px;
    border-left: 1px solid #8e4dff;
    border-right: 1px solid #8e4dff;
    transform: scaleY(0);
  }

  &:after {
    border-radius: 10px;
    border-bottom: 1px solid #8e4dff;
    border-top: 1px solid #8e4dff;
    transform: scaleX(0);
  }

  &:hover {
    &:before {
      transform: scaleY(1);
    }
    &:after {
      transform: scaleX(1);
    }
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
