<template>
  <div class="wrapper">
    <Icon :icon="skill.icon" class="image" />

    <span>{{ skill.title }}</span>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  components: { Icon },
  props: {
    skill: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 1rem 1rem;

  border: 1px solid $purple;
  color: $purple;
  border-radius: 1rem;
  width: 10rem;
  height: 7.5rem;
  cursor: pointer;
  transition: all 1.5s;

  .image {
    width: 3.75rem;
    height: 3.75rem;
  }

  span {
    font-weight: 500;
  }

  &:hover {
    background: $purple;
    color: $white;
  }
}
</style>
