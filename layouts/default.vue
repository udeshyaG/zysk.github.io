<template>
  <div>
    <Navbar />
    <Nuxt />
    <footer class="footer pt-3 text-center">
      <p>&copy; 2020 Zysk Technologies</p>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import axios from 'axios'
export default {
  components: {
    Navbar,
  },
}
</script>

<style>
</style>
