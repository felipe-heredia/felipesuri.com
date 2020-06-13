import styled from "styled-components";

export const WarningWrapper = styled.div`
  display: flex;
  background: #090b1a;
  margin-top: 4.063rem;
  margin-bottom: 0;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
`;

export const WarningTitle = styled.p`
  color: #f22424;
`;

export const WarningText = styled.p`
  color: #b8bbd9;

  &:before {
    content: "•";
    margin: 0 1rem;
  }
`;
