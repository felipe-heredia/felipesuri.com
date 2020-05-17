import React from "react";

import links from "./content";

import * as S from "./styled";

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => {
        return (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink
              href={link.url}
              title={link.label}
              target={link.target}
              rel="noopener noreferrer"
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        );
      })}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
