<template>
  <section class="container my-5">
    <div class="row d-flex align-items-start justify-content-around">
      <Map :title="pageContents.contact_title" :message="pageContents.contact_para" />

      <ContactForm />
    </div>
  </section>
</template>

<script>
import Map from '~/components/contact/Map.vue'
import ContactForm from '~/components/contact/ContactForm.vue'
import axios from 'axios'
export default {
  components: {
    Map,
    ContactForm,
  },

  data() {
    return {
      pageContents: {},
      metaData: {},
    }
  },

  async asyncData() {
    const pageContents = await axios.get('http://localhost:3004/contact')
    const metaData = await axios.get(
      'http://localhost:3004/meta_data?page=contact'
    )

    return {
      pageContents: pageContents.data,
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