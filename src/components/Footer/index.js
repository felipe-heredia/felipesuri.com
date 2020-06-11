import React from "react";

import * as S from "./styled";

const Footer = () => (
  <S.FooterWrapper>
    <S.Container>
      felipesuri.com © 2020
      <S.InternalLink
        cover
        direction="right"
        duration={0.6}
        bg="#373636"
        title="Política de Privacidade"
        to="/policies"
      >
        Política de Privacidade
      </S.InternalLink>
      <S.ExternalLink
        href="https://github.com/felipesuri/felipesuri.com/blob/master/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
      >
        Termos de Uso
      </S.ExternalLink>
    </S.Container>
  </S.FooterWrapper>
);

export default Footer;
