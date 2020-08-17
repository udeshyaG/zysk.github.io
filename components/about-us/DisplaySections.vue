<template>
  <div
    :class="`why-us py-5 d-flex justify-content-sm-${position} justify-content-center align-items-center flex-wrap flex-md-nowrap`"
  >
    <transition @before-enter="beforeEnter" @enter="enterPara" appear :css="false">
      <div
        :class="`d-flex justify-content-around order-2 order-sm-1 ${displayData.animation_class}`"
      >
        <h2 class="number mr-4 mr-xl-5">0{{number + 1}}</h2>
        <div class="mr-5">
          <h3 class="title">{{displayData.title}}</h3>
          <p class="description">{{displayData.body}}</p>
        </div>
      </div>
    </transition>

    <transition @before-enter="beforeEnterImage" @enter="enterImage" appear :css="false">
      <img
        :class="`img-fluid illustration order-1 order-sm-2 mb-5 mb-sm-0 ${displayData.image}`"
        :src="require(`~/assets/about-us/${displayData.image}.svg`)"
        alt="Upto date with Technology"
      />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    displayData: {
      type: Object,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'rotate(20deg)'
    },

    enterPara(el, done) {
      gsap.to(`.${this.displayData.animation_class}`, {
        scrollTrigger: {
          trigger: `.${this.displayData.animation_class}`,
          start: 'top 80%',
          end: 'bottom 90%',
          scrub: 1,

          toggleActions: 'restart pause reverse none',
        },
        opacity: 1,
        duration: 1.5,
        rotation: 0,
        x: 20,

        onCompleted: done,
      })
    },

    beforeEnterImage(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(1.2)'
    },

    enterImage(el, done) {
      gsap.to(`.${this.displayData.image}`, {
        scrollTrigger: {
          trigger: `.${this.displayData.image}`,
          //start: 'top 80%',
          //end: 'bottom 90%',
          scrub: 1,

          toggleActions: 'restart pause reverse none',
        },
        opacity: 1,
        duration: 1.5,

        scale: 1,

        onCompleted: done,
      })
    },
  },
}
</script>

<style>
</style>