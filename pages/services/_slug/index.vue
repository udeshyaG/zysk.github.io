<template>
  <DisplayLayout :pageContents="pageContents" />
</template>

<script>
import DisplayLayout from '~/components/services/DisplayLayout.vue'
import axios from 'axios'
export default {
  components: {
    DisplayLayout,
  },

  data() {
    return {
      pageContents: {},
      metaData: {},
    }
  },

  async asyncData({ params }) {
    const pageContents = await axios.get(
      `http://localhost:3004/services?type=${params.slug}`
    )
    const metaData = await axios.get(
      `http://localhost:3004/meta_data?page=${params.slug}`
    )

    return {
      pageContents: pageContents.data[0],
      metaData: metaData.data[0],
    }
  },

  head() {
    return {
      title: this.metaData.title,
      meta: [
        {
          charset: 'utf-8',
        },
        {
          property: 'og:title',
          content: this.metaData.title,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:description',
          content: this.metaData.description,
        },
        {
          property: 'og:url',
          content: 'https://zysk.in/',
        },
        {
          property: 'og:image',
          content: '~/assets/facebook_banner.jpg',
        },
        //Twitter
        {
          property: 'twitter:title',
          content: this.metaData.title,
        },
        {
          property: 'twitter:description',
          content: this.metaData.description,
        },
        {
          property: 'twitter:url',
          content: 'https://zysk.in/',
        },
        {
          property: 'twitter:image',
          content: '~/assets/twitter_banner.jpg',
        },
        {
          property: 'twitter:card',
          content: this.metaData.description,
        },
        //
      ],
    }
  },
}
</script>

<style>
</style>