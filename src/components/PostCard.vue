<template>
  <g-link :to="`/article/${article.slug}`" class="post-wrapper">
    <div class="post-header" v-if="article.cover">
      <g-image :src="coverUrl" />
    </div>

    <aside class="post-content">
      <h1 class="post-title">{{ article.title }}</h1>
      <p class="post-description">{{ article.description }}</p>
      <p class="post-date">Publicado em {{ formattedDate }}</p>
      <span class="post-category">#{{ article.category.title }}</span>
    </aside>
  </g-link>
</template>

<script>
import { format, addDays } from "date-fns";
import locale from "date-fns/locale/pt-BR";

export default {
  props: {
    article: {
      required: true,
      type: Object,
    },
  },
  computed: {
    formattedDate() {
      const date = addDays(new Date(this.article.date), 1);
      const dateFormat = "dd 'de' MMMM 'de' yyyy";

      return format(date, dateFormat, { locale });
    },
    coverUrl() {
      const adminUrl = process.env.GRIDSOME_ADMIN_URL;
      const cover = this.article.cover.formats.medium.url;

      return `${adminUrl}${cover}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.post-wrapper {
  border: 1px solid $primary;
  border-radius: 2rem;
  margin: 1rem;
  width: 50rem;
  position: relative;
  will-change: border-color;

  @media (max-width: 860px) {
    width: 90%;
  }

  &:after,
  &:before {
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    content: "";
    position: absolute;
    transition: transform 0.5s;
  }

  &:before {
    border-radius: 2rem;
    border-left: 1px solid $purple;
    border-right: 1px solid $purple;
    transform: scaleY(0);
  }

  &:after {
    border-radius: 2rem;
    border-bottom: 1px solid $purple;
    border-top: 1px solid $purple;
    transform: scaleX(0);
  }

  &:hover {
    &:before {
      transform: scaleY(1);
    }

    &:after {
      transform: scaleX(1);
    }
  }

  .post-header {
    img {
      border-radius: 2rem 2rem 0 0;
      width: 100%;
      height: 100%;
    }
  }

  aside.post-content {
    padding: 1rem 5rem 5rem;
    text-align: start;

    @media (max-width: 860px) {
      padding: 1rem 2rem 2rem;
    }

    .post-title {
      font: 600 1.8rem "Poppins", sans-serif;
      margin-bottom: 1rem;
    }

    .post-description {
      font: 300 1rem "Poppins", sans-serif;
      margin-bottom: 1rem;
    }

    .post-date {
      font: 400 0.9rem "Poppins", sans-serif;
      margin-bottom: 2rem;
    }

    .post-category {
      font: 500 1rem "Poppins", sans-serif;
      background: $dark;
      padding: 0.8rem 1.4rem;
      border-radius: 1rem;
    }
  }

  aside.post-content:first-child {
    padding: 5rem;

    @media (max-width: 860px) {
      padding: 3rem;
    }
  }
}
</style>
