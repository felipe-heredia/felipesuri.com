<template>
  <Layout class="page-wrapper">
    <div class="title-wrapper">
      <h1>{{ $page.strapi.home.Hero.title }}!</h1>

      <p>
        {{ $page.strapi.home.Hero.presentation }}
      </p>

      <span>
        Você pode ver uma explicação mais detalhada sobre mim
        <g-link to="/about" class="link">nessa página</g-link>.
      </span>
    </div>

    <g-link class="link blog-link" to="/blog">
      Ver meu blog

      <Icon icon="akar-icons:arrow-right" />
    </g-link>

    <div class="skills">
      <h2>Skills</h2>

      <div class="skills-wrapper">
        <Skill :skill="skill" v-for="skill in skills" :key="skill.id" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  strapi {
    home {
      Hero {
        title
        presentation
      }
      Seo {
        metaTitle
        metaDescription
      }
    }
    globalSeo {
      favicon {
        url
      }
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
    skills {
      id
      title
      icon
    }
  }
}
</page-query>

<script>
import { Icon } from "@iconify/vue2";

import Skill from "@/components/Skill.vue";
import { getMetaTags } from "@/utils/seo";
import { getStrapiMedia } from "@/utils/medias";

export default {
  components: { Skill, Icon },
  metaInfo() {
    const { Seo } = this.$page.strapi.home;
    const { defaultSeo, favicon } = this.$page.strapi.globalSeo;

    const fullSeo = {
      ...defaultSeo,
      ...Seo,
    };

    return {
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
  data() {
    return {
      skills: {},
    };
  },
  created() {
    this.skills = this.$page.strapi.skills;
  },
};
</script>

<style lang="scss" scoped>
.title-wrapper {
  h1 {
    font-family: "Berkshire Swash";
    font-size: 2.2rem;
    margin-bottom: 0;
  }

  p,
  span {
    font-size: 1.2rem;
  }

  span {
    margin-top: 0.4rem;
  }
}

.blog-link {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  font: 500 1.6rem "Berkshire Swash", cursive;

  svg {
    margin-left: 5px;
    transition: all 1s;
  }

  &:hover {
    svg {
      transform: translateX(8px);
    }
  }
}

.skills {
  margin-top: 2rem;
  color: $purple;

  h2 {
    font: 800 2rem "Nunito", sans-serif;
    margin-bottom: 2rem;
  }

  .skills-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    overflow: hidden;
    max-width: 36rem;
  }
}
</style>
