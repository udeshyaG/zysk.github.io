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
      el.style.transform = 'rotate(15deg)'
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 1.5,
        opacity: 1,
        x: 0,
        rotation: 0,
        delay: 2.5,
        onComplete: done,
      })
    },
  },
}
</script>

<style>
</style>