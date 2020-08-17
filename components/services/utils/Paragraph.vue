<template>
  <transition @before-enter="beforeEnter" @enter="enter" appear :css="false">
    <p :class="className">{{text}}</p>
  </transition>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },

  methods: {
    beforeEnter(el) {
      console.log(el.classList)
      el.style.opacity = 0
      el.style.scale = 0
    },

    animationFunction(className, delay, done) {
      gsap.to(`.${className}`, {
        duration: 2,
        opacity: 1,
        x: 0,
        delay: delay,
        onComplete: done,
      })
    },

    enter(el, done) {
      if (el.classList.contains('red')) {
        this.animationFunction('red', 0, done)
      } else if (el.classList.contains('highlight')) {
        this.animationFunction('highlight', 1, done)
      } else if (el.classList.contains('simple-para')) {
        this.animationFunction('simple-para', 2, done)
      }
      // gsap.to('simple-para', {
      //   duration: 2,
      //   opacity: 1,
      //   x: 0,
      //   onComplete: done,
      // })
    },
  },
}
</script>

<style>
</style>