import styled from "styled-components";
import media from "styled-media-query";

export const PoliciesWrapper = styled.div`
  margin: 0 6rem 2rem;

  ${media.lessThan("large")`
    margin: 0 0.9rem 2rem;
  `}

  p,
  h1,
  h2,
  h3 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
  }

  p {
    margin: 0 auto 1.6rem;
    text-align: justify;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  strong {
    font-weight: 700;
  }

  a {
    border-bottom: 1px dashed #aa52cc;
    color: #aa52cc;
    text-decoration: none;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
