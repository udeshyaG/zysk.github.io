<template>
  <div class="container page-contents">
    <h1>Blog Posts</h1>

    <div class="d-flex flex-wrap">
      <div
        class="service-thumb text-dark col-lg-4 col-sm-6 py-4"
        v-for="article of articles"
        :key="article.slug"
      >
        <transition @before-enter="beforeEnter" @enter="enter" appear :css="false">
          <div class="cards">
            <picture>
              <img
                :src="require(`~/assets/blog-images/${article.img}`)"
                class="img-fluid illustration"
              />
            </picture>

            <h2 class="title">{{article.title}}</h2>

            <p>{{article.description}}</p>
            <nuxt-link class="link" :to="`/blog/${article.slug}`">Read Blog</nuxt-link>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0.5)'
    },

    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: 1.5,
        scale: 1,
        y: 0,

        onCompleted: done,
      })
    },
  },
}
</script>

<style scoped>
.blog-image {
  max-width: 20vw;
}

li {
  list-style-type: none;
}

.page-contents {
  min-height: 90vh;
}

.service-thumb {
  margin-top: 10px;
}

.service-thumb:hover {
  box-shadow: 5px 15px 2px rgba(0, 0, 0, 0.1);
}
</style>
