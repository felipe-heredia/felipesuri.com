<template>
  <Layout>
    <PostCard
      v-for="article in articles"
      :key="article.tite"
      :article="article"
    />
  </Layout>
</template>

<page-query>
query {
  strapi {
    articles {
      title,
      description,
      date,
      slug,
      category {
        title
      }
      cover {
        formats
      }
    }
  }
}
</page-query>

<script>
import PostCard from "@/components/PostCard.vue";

export default {
  components: { PostCard },
  data() {
    return {
      articles: {}
    };
  },
  created() {
    this.articles = this.$page.strapi.articles;
    console.log(this.articles);
  }
};
</script>

<style lang="scss" scoped></style>
