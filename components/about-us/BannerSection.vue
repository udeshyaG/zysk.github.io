<template>
  <section class="container my-5">
    <div class="row d-flex align-items-center justify-content-around">
      <div class="col-md-4">
        <h1 class="header d-block d-sm-none">About</h1>
        <picture>
          <transition @before-enter="beforeEnterImage" @enter="enterImage" appear :css="false">
            <img
              class="img-fluid"
              src="~/assets/about-us/about-zysk-technologies.svg"
              alt="About Zysk Illustration"
            />
          </transition>
        </picture>
      </div>
      <div class="col-md-8 col-lg-6">
        <transition @before-enter="beforeEnterPara" @enter="enterPara" appear :css="false">
          <div>
            <h1 class="header d-none d-sm-block">About Us</h1>
            <p class="my-5">{{aboutPara}}</p>
            <div>
              <nuxt-link to="/" class="btn btn-custom btn-black mr-lg-4 mb-2">Read More</nuxt-link>
              <nuxt-link to="/contact" class="btn btn-custom btn-red mb-2">Hire Us</nuxt-link>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    aboutPara: {
      type: String,
      required: true,
    },
  },

  methods: {
    beforeEnterImage(el) {
      el.style.opacity = 0
      el.style.transform = 'translate(-50px, 0)'
    },

    beforeEnterPara(el) {
      el.style.opacity = 0
      el.style.transform = 'translate(50px, 0)'
    },

    enterImage(el, done) {
      gsap.to(el, {
        duration: 1.5,
        opacity: 1,
        x: 0,
        onComplete: done,
      })
    },

    enterPara(el, done) {
      gsap.to(el, {
        duration: 1.5,
        opacity: 1,
        x: 0,
        onComplete: done,
      })
    },
  },
}
</script>

<style>
</style>