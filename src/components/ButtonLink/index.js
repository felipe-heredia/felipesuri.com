import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const ButtonLink = ({ children, to, direction }) => (
  <S.ButtonLinkWrapper>
    <S.ButtonLink cover direction={direction} duration={0.6} to={to} bg="#373636">
      {children}
    </S.ButtonLink>
  </S.ButtonLinkWrapper>
);

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
  direction: PropTypes.node.isRequired,
};

export default ButtonLink;
