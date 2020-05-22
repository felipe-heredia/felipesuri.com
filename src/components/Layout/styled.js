import styled from "styled-components";
import media from "styled-media-query";

export const LayoutWrapper = styled.section``;

export const LayoutMain = styled.main`
  min-height: 100vh;
  margin: 5rem auto 2.2rem;
  padding-bottom: 1rem;
  max-width: 60rem;

  ${media.lessThan("large")`
    margin: 5rem 0.9rem 0;
  `}
`;
