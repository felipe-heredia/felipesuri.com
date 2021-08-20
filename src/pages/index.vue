<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1>{{ $page.strapi.home.Hero.title }}!</h1>

    <p>
      {{ $page.strapi.home.Hero.presentation }}
    </p>

    <b-button type="is-primary">Primary</b-button>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
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
  }
}
</page-query>

<script>
import { getMetaTags } from "@/utils/seo";
import { getStrapiMedia } from "@/utils/medias";

export default {
  metaInfo() {
    const { Seo } = this.$page.strapi.home;
    const { defaultSeo, favicon } = this.$page.strapi.globalSeo;

    const fullSeo = {
      ...defaultSeo,
      ...Seo
    };

    return {
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url)
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

h1 {
  font-family: "Berkshire Swash";
}
</style>
