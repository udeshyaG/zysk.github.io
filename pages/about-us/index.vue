<template>
  <div>
    <BannerSection :aboutPara="aboutPara" />

    <section id="why-us" class="container-fluid py-5">
      <header>
        <h1 class="header">Why Us</h1>
      </header>

      <DisplaySections
        v-for="(data,index) in aboutDisplaySections"
        :key="index"
        :displayData="data"
        :number="index"
        :position="index % 2 === 0 ? 'start' : 'end'"
      />
    </section>
  </div>
</template>

<script>
import DisplaySections from '~/components/about-us/DisplaySections.vue'
import BannerSection from '~/components/about-us/BannerSection.vue'
import axios from 'axios'

export default {
  components: {
    DisplaySections,
  },

  data() {
    return {
      aboutPara: '',
      aboutDisplaySections: [],
      metaData: {},
    }
  },

  async asyncData() {
    const aboutPara = await axios.get('http://localhost:3004/about_para')
    const aboutDisplaySections = await axios.get(
      'http://localhost:3004/about_display_sections'
    )
    const metaData = await axios.get(
      'http://localhost:3004/meta_data?page=about-us'
    )

    return {
      aboutPara: aboutPara.data[0].body,
      aboutDisplaySections: aboutDisplaySections.data,
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