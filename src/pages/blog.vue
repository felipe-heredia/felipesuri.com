<template>
  <Layout>
    <PostCard v-for="article in articles" :key="article.tite" :article="article" />
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
    blog {
      Seo {
        metaTitle,
        metaDescription,
      }
    }
  }
}
</page-query>

<script>
import PostCard from "@/components/PostCard.vue";

export default {
  components: { PostCard },
  metaInfo() {
    return {
      title: this.$page.strapi.blog.Seo.metaTitle,
      meta: [
        {
          name: "description",
          content: this.$page.strapi.blog.Seo.metaDescription,
        },
      ],
    };
  },
  data() {
    return {
      articles: {},
    };
  },
  created() {
    this.articles = this.$page.strapi.articles;
  },
};
</script>

<style lang="scss" scoped></style>
