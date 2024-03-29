<template>
  <Layout>
    <div class="return">
      <g-link :to="lastRoute">
        <Icon icon="akar-icons:arrow-left" />
        Voltar para a listagem
      </g-link>
    </div>

    <h1 class="post-title">{{ article.title }}</h1>
    <p>Publicado em {{ formattedDate }}</p>
    <span class="post-category">#{{ article.category.title }}</span>

    <article class="content">
      <div class="post-header" v-if="article.cover">
        <g-image :src="coverUrl" />
      </div>

      <div class="markdown">
        <p class="description">{{ article.description }}</p>

        <VueMarkdown
          :source="article.content"
          class="text"
          :anchorAttributes="{
            target: '_blank',
            rel: 'nofollow noopener noreferrer',
          }"
        />
      </div>
    </article>
  </Layout>
</template>

<page-query>
query($slug: String!) {
  strapi {
    articles(where: { slug: $slug }) {
      title,
      description,
      content,
      date,
      cover {
        url
      }
      category {
        title
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Icon } from "@iconify/vue2";
import VueMarkdown from "@adapttive/vue-markdown";
import { format, addDays } from "date-fns";
import locale from "date-fns/locale/pt-BR";

import { getMetaTags } from "~/utils/seo";

export default {
  components: { Icon, VueMarkdown },
  metaInfo() {
    const { title, description, image } = this.article;

    const seo = {
      metaTitle: title,
      metaDescription: description,
      shareImage: image,
    };

    return {
      title,
      meta: getMetaTags(seo),
    };
  },
  data() {
    return {
      article: [],
      lastRoute: "",
    };
  },
  created() {
    this.article = this.$page.strapi.articles[0];
  },
  computed: {
    formattedDate() {
      const date = addDays(new Date(this.article.date), 1);
      const dateFormat = "dd 'de' MMMM 'de' yyyy";

      return format(date, dateFormat, { locale });
    },
    coverUrl() {
      const adminUrl = process.env.GRIDSOME_ADMIN_URL;
      const cover = this.article.cover;

      return `${adminUrl}${cover.url}`;
    },
  },
  beforeRouteEnter(_, from, next) {
    next(vm => {
      vm.lastRoute = from;
    });
  },
};
</script>

<style lang="scss">
.return {
  display: flex;
  width: 60%;

  a {
    color: $purple;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    will-change: transform;

    &:after {
      background-color: $purple;
      content: "";
      height: 2px;
      margin-top: 0.2rem;
      left: 0;
      position: absolute;
      top: 100%;
      transform: scaleX(0);
      transition: transform 0.5s;
      width: 100%;
    }

    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }

    svg {
      margin-right: 5px;
    }
  }
}

.post-title {
  font: 600 2rem "Poppins", sans-serif;
}

.post-category {
  font: 500 1rem "Poppins", sans-serif;
  background: $dark;
  padding: 0.8rem 1.4rem;
  margin-top: 1rem;
  border-radius: 1rem;
}

.content {
  width: 50rem;
  background: darken($white, 5%);
  border-radius: 2rem;
  box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.02), 4px 4px 15px 0 rgba(0, 0, 0, 0.03);
  margin-top: 2rem;

  text-align: start;

  .post-header {
    width: 100%;
    height: 100%;

    img {
      border-radius: 2rem 2rem 0 0;
    }
  }

  .markdown:first-child {
    padding: 5rem;
  }

  .markdown {
    padding: 2rem 5rem 5rem;

    .description {
      margin-bottom: 1.2rem;
      font: 500 1.25rem "Poppins", sans-serif;
    }

    .text {
      font-size: 1.1rem;

      a {
        transition: all 1s;
        color: $purple;

        &:hover {
          color: darken($purple, 25%);
        }
      }
    }
  }

  @media (max-width: 860px) {
    width: 95%;
    text-align: justify;

    .markdown:first-child {
      padding: 2rem;
    }

    .markdown {
      padding: 1rem 2rem;
    }
  }
}
</style>
