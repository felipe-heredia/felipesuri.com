import React from "react";

import * as S from "./styled";

import Profile from "../Profile";
import MenuLinks from "../MenuLinks";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderGroup>
        <S.HeaderItem>
          <Profile />
        </S.HeaderItem>
      </S.HeaderGroup>
      <S.HeaderGroup>
        <S.HeaderItem>
          <MenuLinks />
        </S.HeaderItem>
      </S.HeaderGroup>
    </S.HeaderWrapper>
  );
};

export default Header;
