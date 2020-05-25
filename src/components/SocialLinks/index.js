import React from "react";

import Icons from "./Icons";

import * as S from "./styled";
import * as GA from "./trackers";

const SocialLinks = () => {
  const GithubIcon = Icons.Github;
  const LabIcon = Icons.Lab;

  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        <S.SocialLinksItem>
          <S.SocialLinksLinkExternal
            href="https://github.com/felipesuri"
            title="Meu GitHub"
            target="_blank"
            onClick={() => GA.gitHubClickTrack()}
          >
            <S.IconWrapper>
              <GithubIcon />
            </S.IconWrapper>
          </S.SocialLinksLinkExternal>
        </S.SocialLinksItem>
        <S.SocialLinksItem>
          <S.SocialLinksLinkInternal
            to="/lab"
            title="Laboratório"
            target="_self"
            onClick={() => GA.labClickTrack()}
          >
            <S.IconWrapper>
              <LabIcon />
            </S.IconWrapper>
          </S.SocialLinksLinkInternal>
        </S.SocialLinksItem>
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  );
};

export default SocialLinks;
