<template>
  <Layout>
    <h1 class="page-title">{{ $page.strapi.about.title }}</h1>

    <aside class="page-content">
      <VueMarkdown :source="$page.strapi.about.content" />
    </aside>
  </Layout>
</template>

<page-query>
query {
  strapi {
    about {
      title
      content
    }
  }
}
</page-query>

<script>
import VueMarkdown from "vue-markdown";

export default {
  components: { VueMarkdown },
  metaInfo() {
    return {
      title: this.$page.strapi.about.title,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-title {
  font: 600 2rem "Berkshire Swash", cursive;
  margin-bottom: 2rem;
}

.page-content {
  font-size: 1.2rem;
  text-align: start;
  width: 50rem;
  background: $dark;
  border-radius: 2rem;
  padding: 3rem;

  @media (max-width: 860px) {
    width: 95%;
    text-align: center;
  }
}
</style>
