import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import SEO from "components/seo";

import * as S from "components/Policies/styled";

const Policies = () => (
  <Layout>
    <SEO title="Políticas de Privacidade" />
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
    <S.PoliciesWrapper>
      <h2>
        Política de privacidade de <strong>felipesuri.com</strong>
      </h2>

      <p>
        Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar
        a sua visita nesse site o mais produtiva e agradável possível.
      </p>

      <p>
        A garantia da confidencialidade dos dados pessoais dos usuários desse site é
        importante para o <strong>felipesuri.com</strong>.
      </p>

      <p>
        Todas as informações pessoais que usem o <strong>felipesuri.com</strong> serão
        tratadas em concordância com a Lei Nº 13.709, de 14 de Agosto de 2018.
      </p>

      <p>
        A informação pessoal recolhida pode incluir o seu nome, e-mail, número de telefone
        e/ou telemóvel, morada, data de nascimento e/ou outros.
      </p>

      <p>
        O uso do <strong>felipesuri.com</strong> pressupõe a aceitação deste acordo de
        privacidade. O site <strong>felipesuri.com</strong> reserva-se ao direito de
        alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a
        nossa política de privacidade com regularidade de forma a estar sempre atualizado.
      </p>

      <p>
        O Aplicativo usa o Google Analytics, um serviço de análise prestado pelo Google,
        Inc. ("Google"). O Google Analytics utiliza cookies para nos ajudar a analisar
        como os Usuários utilizam o Aplicativo. As informações coletadas no cookie sobre o
        modo como você utiliza o Aplicativo (inclusive seu endereço IP) serão transmitidas
        ao Google e armazenadas por ele em servidores nos Estados Unidos. O Google
        utilizará essas informações com o objetivo de avaliar o modo como você utiliza o
        Aplicativo, criar relatórios sobre as atividades no Aplicativo e prestar outros
        serviços relativos às atividades no Aplicativo e ao uso da Internet. O Google
        também pode transferir essas informações a terceiros quando exigido por lei ou
        para que tais terceiros processem as informações em nome e por conta do Google. O
        Google não associará seu endereço IP a qualquer outro dado. A utilização pelo
        Google desses dados é regida pelos Termos de Uso do Google Analytics e pela{" "}
        <a href="https://policies.google.com/technologies/partner-sites">
          Política de Privacidade do Google
        </a>
        .
      </p>

      <h2>Conexões para sites de terceiros</h2>

      <p>
        O <strong>felipesuri.com</strong> possui conexões para outros sites, que podem
        conter informações úteis. A nossa política de privacidade não é aplicada a sites
        de terceiros, pelo que, caso visite outro site a partir do nosso deverá ler a
        politica de privacidade do mesmo.
      </p>

      <p>
        Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses
        mesmos sites.
      </p>
    </S.PoliciesWrapper>
  </Layout>
);

export default Policies;
