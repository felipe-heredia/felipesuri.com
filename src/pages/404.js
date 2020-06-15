import React from "react";

import Layout from "components/Layout";
import SEO from "components/seo";

import PostList from "components/PostList";
import ButtonLink from "components/ButtonLink";

import * as S from "components/NotFound/styled.js";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Página não encontrada" />
    <S.NotFoundWrapper>
      <S.NotFoundTitle>
        Não tem nada aqui...
        <span className="small" role="img" aria-label="Emoji assustado">
          😱
        </span>
      </S.NotFoundTitle>
      <S.NotFoundContent>
        Mas não se preocupe!
        <span className="small" role="img" aria-label="Emoji festa">
          🎉
        </span>
      </S.NotFoundContent>
      <S.NotFoundContent>
        Você pode ver os artigos do meu blog!
        <span className="small" role="img" aria-label="Emoji professor">
          👨‍🏫
        </span>
      </S.NotFoundContent>

      <ButtonLink direction="left" to="/blog">
        Ver meu blog
      </ButtonLink>
      <PostList />
    </S.NotFoundWrapper>
  </Layout>
);

export default NotFoundPage;
