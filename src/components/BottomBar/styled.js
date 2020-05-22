import styled from "styled-components";
import media from "styled-media-query";

export const BottomBarWrapper = styled.aside`
  align-items: center;
  background: #070708;
  border-top: 1px solid #9194ab;
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: center;
  padding: 0;
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 2.5rem;
`;

export const BottomBarGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BottomBarItem = styled.span`
  cursor: pointer;
  display: block;
  height: 3.2rem;
  padding: 0.9rem;
  position: relative;
  width: 3.2rem;

  ${media.lessThan("large")`
    padding: 0.9rem 0;
  `}
`;
