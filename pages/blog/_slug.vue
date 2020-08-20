<template>
  <article class="blog-container">
    <!-- <pre>{{ article }}</pre> -->

    <div class="blog-content">
      <h1>{{ article.title }}</h1>
      <hr />
      <h5 class="mb-4">Penned By 📝 {{article.author}}</h5>
      <p>{{ article.description }}</p>

      <nav>
        <ul>
          <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="image-container">
      <transition @before-enter="beforeEnter" @enter="enterImage" appear :css="false">
        <img
          :src="require(`~/assets/blog-images/${article.img}`)"
          :alt="article.alt"
          class="blog-image"
        />
      </transition>
    </div>

    <div class="blog-content">
      <nuxt-content :document="article" />

      <p
        class="display-date"
      >Post last updated: {{ new Date(article.updatedAt).toLocaleDateString() }}</p>

      <prev-next :prev="prev" :next="next" />
    </div>
  </article>
</template>

<script>
import PrevNext from '~/components/blog/PrevNext.vue'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },

  components: {
    PrevNext,
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0.8)'
    },

    enterImage(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: 1.5,
        scale: 1,

        onCompleted: done,
      })
    },
  },
}
</script>

<style scoped>
.blog-container {
  margin: 3vh 5vw;
}

.image-container {
  text-align: center;
}

.blog-image {
  max-width: 80vw;
}

.blog-content {
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (min-width: 600px) {
  .blog-content {
    max-width: 60vw;
  }
  .blog-image {
    max-width: 70vw;
  }
}

li {
  list-style-type: none;
}

hr {
  background-color: #ff4b4b;
  height: 1px;
  margin-bottom: 30px;
}

.display-date {
  margin-left: auto;
}
</style>
