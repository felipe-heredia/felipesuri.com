import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";

const Profile = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <S.ProfileWrapper>
      <S.ProfileItem>
        <S.SiteName>{title}</S.SiteName>
      </S.ProfileItem>
    </S.ProfileWrapper>
  );
};

export default Profile;
