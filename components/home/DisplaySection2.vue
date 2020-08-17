<template>
  <section class="container py-5">
    <div class="row d-flex align-items-center justify-content-around">
      <div class="col-sm-5 col-lg-4">
        <!-- <h1 class="header d-block d-sm-none" id="title-animation">Who we are</h1> -->

        <picture>
          <transition @before-enter="beforeEnterImage" @enter="enterImage" appear :css="false">
            <img
              class="img-fluid image-animation"
              :src="require('~/assets/about-us/about-zysk-technologies.png')"
              alt="About Zysk"
            />
          </transition>
        </picture>
      </div>

      <div class="col-sm-7 col-lg-6">
        <h1 class="header d-none d-sm-block title">{{contents.title}}</h1>
        <transition @before-enter="beforeEnter" @enter="enterPara" appear :css="false">
          <div>
            <p class="mt-4 highlight checker">{{contents.body}}</p>
            <nuxt-link to="/about-us" class="btn btn-custom btn-red mt-4">Read More</nuxt-link>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    contents: {
      type: Object,
      required: true,
    },
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translate(20px, 0)'
    },

    beforeEnterImage(el) {
      el.style.opacity = 0
      el.style.transform = 'rotate(-20deg)'
    },

    enterPara(el, done) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: '.checker',
          //start: 'top 100%',
          end: 'bottom 70%',
          scrub: 1,
          toggleActions: 'restart pause reverse none',
        },
        duration: 1.5,
        opacity: 1,
        x: 0,
        onComplete: done,
      })
    },

    enterImage(el, done) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: '.checker',
          start: 'top 100%',
          end: 'bottom 70%',
          scrub: 1,
          toggleActions: 'restart reverse reverse none',
        },
        duration: 1.5,
        opacity: 1,

        rotation: 0,
        onComplete: done,
      })
    },
  },
}
</script>

<style></style>
