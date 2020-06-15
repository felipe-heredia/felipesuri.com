import React from "react";
import PropTypes from "prop-types";

import { TransitionPortal } from "gatsby-plugin-transition-link";

import * as S from "./styled";
import GlobalSyles from "styles/global";

import Header from "components/Header";
import BottomBar from "components/BottomBar";
import Footer from "components/Footer";

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalSyles />
    <TransitionPortal level="top">
      <Header />
    </TransitionPortal>
    <S.LayoutMain>
      {children}
      <Footer />
    </S.LayoutMain>
    <TransitionPortal level="bottom">
      <BottomBar />
    </TransitionPortal>
  </S.LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
