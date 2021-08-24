<template>
  <div class="layout">
    <b-navbar class="header">
      <template #brand>
        <b-navbar-item>
          <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item href="/" class="item">
          Página Inicial
        </b-navbar-item>
        <b-navbar-item href="/blog" class="item">
          Blog
        </b-navbar-item>
        <b-navbar-item href="/about" class="item">
          Sobre mim
        </b-navbar-item>
      </template>
    </b-navbar>

    <main>
      <slot />
    </main>

    <b-navbar class="footer-nav">
      <template #brand>
        <b-navbar-item href="https://github.com/felipesuri" target="_blank">
          <Icon icon="bx:bxl-github" />
        </b-navbar-item>

        <b-navbar-item
          href="https://linkedin.com/in/felipesuri"
          target="_blank"
        >
          <Icon icon="bx:bxl-linkedin" />
        </b-navbar-item>

        <b-navbar-item href="https://twitter.com/_felipesuri" target="_blank">
          <Icon icon="bx:bxl-twitter" />
        </b-navbar-item>

        <b-navbar-item href="https://instagram.com/_felipesuri" target="_blank">
          <Icon icon="bx:bxl-instagram" />
        </b-navbar-item>

        <b-navbar-item href="mailto:contato@felipesuri.com" target="_blank">
          <Icon icon="bx:bx-mail-send" />
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item>
          <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { Icon } from "@iconify/vue2";

export default {
  components: { Icon }
};
</script>

<style lang="scss">
.layout {
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  .header {
    margin: 1.2rem 0;

    .item {
      border-radius: 1rem;
      padding: 0.6rem 1rem;
      transition: all 1s;

      &:hover {
        color: darken($primary, 25%);
        background: darken($primary-invert, 5%);
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 80vh;
  }

  .footer-nav {
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: $primary;
      transition: all 1s;

      &:hover {
        color: $purple;
        border-radius: 0.6rem;
      }
    }
  }
}
</style>
