import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";
import GlobalSyles from "../../styles/global";

import BottomBar from "../BottomBar";

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalSyles />
    <S.LayoutMain>{children}</S.LayoutMain>
    <BottomBar />
  </S.LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
