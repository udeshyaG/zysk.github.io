<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="read-more"
    >◀ Previous</NuxtLink>
    <span style="display: inline-block"></span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="read-more next"
    >Next ▶</NuxtLink>
    <span></span>
  </div>
</template>


<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style >
.read-more {
  font-size: 1.5rem;
  text-decoration: none;
}
.read-more:hover {
  text-decoration: none;
}

.read-more.next {
  float: right;
}
</style>