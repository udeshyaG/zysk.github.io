<template>
  <nav class="navbar navbar-light navbar-expand-lg">
    <nuxt-link class="navbar-brand" to="/">
      <img class="logo" src="~/assets/logo.png" alt="Zysk Technologies Logo" />
    </nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="ml-lg-auto navbar-nav">
        <li class="nav-item active">
          <nuxt-link class="nav-link" to="/">
            Home
            <span class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about-us">About</nuxt-link>
        </li>
        <li class="nav-item dropdown">
          <nuxt-link
            class="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Services</nuxt-link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <nuxt-link class="dropdown-item" to="/services/web-development">Websites</nuxt-link>
            <nuxt-link class="dropdown-item" to="/services/custom-applications">Custom Applications</nuxt-link>
            <nuxt-link class="dropdown-item" to="/services/ui-development">Front-end Development</nuxt-link>
            <nuxt-link class="dropdown-item" to="#">QA Services</nuxt-link>
            <nuxt-link
              class="dropdown-item"
              to="/services/hybrid-mobile-apps"
            >Hybrid Apps Development</nuxt-link>
            <nuxt-link class="dropdown-item" to="#">Support & Maintenance</nuxt-link>
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/blog">Blogs</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Navbar',
}
</script>

<style></style>
