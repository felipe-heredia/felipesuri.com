import React from "react";

import * as S from "./styled";

const Warning = ({ text }) => (
  <S.WarningWrapper>
    <S.WarningTitle>Aviso!</S.WarningTitle>
    <S.WarningText>{text}</S.WarningText>
  </S.WarningWrapper>
);

export default Warning;
