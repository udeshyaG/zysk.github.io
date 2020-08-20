<template>
  <picture class="my-1 mx-2">
    <transition @before-enter="beforeEnter" @enter="enter" appear :css="false">
      <img
        :src="require(`../../../assets/services/${imageURL}`)"
        alt="Bootstrap logo"
        title="Bootstrap"
        class="img-fluid"
      />
    </transition>
  </picture>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      required: true,
    },
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0)'
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        delay: 2.5,
        onComplete: done,
      })
    },
  },
}
</script>

<style>
</style>