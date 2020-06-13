import styled from "styled-components";
import media from "styled-media-query";

export const LayoutWrapper = styled.section``;

export const LayoutMain = styled.main`
  margin: 5rem auto auto;
  padding-bottom: 0;
  max-width: 60rem;

  ${media.lessThan("large")`
    margin: 4.6rem 0.9rem 0;
  `}
`;
