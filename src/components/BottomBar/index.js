import React from "react";

import * as S from "./styled";

import SocialLinks from "../SocialLinks";

const BottomBar = () => (
  <S.BottomBarWrapper>
    <S.BottomBarGroup>
      <S.BottomBarItem>
        <SocialLinks />
      </S.BottomBarItem>
    </S.BottomBarGroup>
  </S.BottomBarWrapper>
);

export default BottomBar;
