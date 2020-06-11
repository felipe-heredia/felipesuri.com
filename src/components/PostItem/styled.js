import styled from "styled-components";
import media from "styled-media-query";

import { Label } from "@styled-icons/material-outlined/Label";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const PostItem = styled(AniLink)`
  text-decoration: none;
`;

export const PostItemWrapper = styled.article`
  border: 1px solid #161616;
  margin-bottom: 0.938rem;
  padding: 1.563rem;
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
  font-size: 1rem;
  padding-bottom: 0.938rem;
  text-align: left;
  font-family: "Open Sans", sans-serif;

  ${media.lessThan("large")`
    font-size: 0.8rem;
  `}
`;

export const PostItemTitle = styled.h1`
  font-size: 1.625rem;
  margin-bottom: 0.938rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;

  ${media.lessThan("large")`
    font-size: 1.3rem;
  `}
`;

export const PostItemDescription = styled.p`
  font-size: 1.125rem;
  font-weight: 1.875rem;
  margin-bottom: 2.25rem;
  font-family: "Noto Sans", sans-serif;

  ${media.lessThan("large")`
    font-size: 0.9rem;
    margin-bottom: 1.3rem;
    line-height: 1.2rem;
  `}
`;

export const PostItemCategoryWrapper = styled.div`
  display: flex;
  flex-direction: inline-block;
  text-align: center;
`;

export const PostItemLabel = styled(Label)`
  display: block;
  width: 0.938rem;
  height: 0.938rem;
`;

export const PostItemCategory = styled.p`
  margin-left: 0.938rem;
  text-transform: lowercase;
  font-family: "Roboto", sans-serif;
`;
