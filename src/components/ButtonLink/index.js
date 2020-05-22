import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const ButtonLink = ({ children, to }) => (
  <S.ButtonLinkWrapper>
    <S.ButtonLink to={to}>{children}</S.ButtonLink>
  </S.ButtonLinkWrapper>
);

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
};

export default ButtonLink;
