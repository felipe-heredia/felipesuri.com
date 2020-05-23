import React from "react";

import * as S from "./styled";

import Profile from "../Profile";
import MenuLinks from "../MenuLinks";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderGroup>
        <Profile />
      </S.HeaderGroup>
      <S.HeaderGroup>
        <MenuLinks />
      </S.HeaderGroup>
    </S.HeaderWrapper>
  );
};

export default Header;
