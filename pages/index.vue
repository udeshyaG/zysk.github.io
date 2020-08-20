<template>
  <div>
    <DisplaySection1 />

    <DisplaySection2 :contents="banner_2" />

    <section class="container py-5">
      <header>
        <h1 class="header pb-3">What we do</h1>
      </header>
      <div class="d-flex flex-wrap">
        <Cards
          v-for="(data, index) in cardData"
          :key="index"
          :cardInfo="data"
        />
      </div>
    </section>

    <!-- Clients -->
    <section class="container py-5">
      <header>
        <h1 class="header pb-5">Our Clients</h1>
      </header>

      <div
        class="d-flex justify-content-around align-items-center mb-md-4 flex-wrap"
      >
        <Clients
          v-for="(data, index) in clientData"
          :key="index"
          :clientInfo="data"
        />
      </div>
    </section>
  </div>
</template>

<script>
import DisplaySection2 from '~/components/home/DisplaySection2.vue'
import DisplaySection1 from '~/components/home/DisplaySection1.vue'
import Cards from '~/components/home/Cards.vue'
import axios from 'axios'
import Clients from '~/components/home/Clients.vue'

export default {
  components: {
    DisplaySection2,
    DisplaySection1,
    Cards,
  },
  data() {
    return {
      cardData: [],
      clientsData: [],
      metaData: {},
    }
  },

  async asyncData() {
    const cardData = await axios.get('http://localhost:3004/card_data')
    const clientsData = await axios.get('http://localhost:3004/clients')
    const metaData = await axios.get(
      'http://localhost:3004/meta_data?page=home'
    )

    const banner_2 = await axios.get('http://localhost:3004/banner_2')

    return {
      cardData: cardData.data,
      clientData: clientsData.data,
      metaData: metaData.data[0],
      banner_2: banner_2.data,
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

<style></style>
