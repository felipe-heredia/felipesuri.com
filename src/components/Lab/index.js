import React from "react";

import * as S from "./styled";

import ButtonLink from "../ButtonLink";

const Lab = () => (
  <S.LabWrapper>
    <S.LabTitle>Lab</S.LabTitle>
    <S.LabDescription>Por enquanto a página Lab está desativada.</S.LabDescription>
    <ButtonLink to="/" direction="left">
      ← Voltar para a home
    </ButtonLink>
  </S.LabWrapper>
);

export default Lab;
