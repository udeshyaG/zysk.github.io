<template>
  <transition @before-enter="beforeEnter" @enter="enter" appear :css="false">
    <div class="col-sm-6 order-2 order-md-1 py-5">
      <h1 class="header">{{title}}</h1>
      <p class="highlight">{{message}}</p>
      <div class="gmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1705213995974!2d77.50796631443322!3d12.960937990862842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f0c2e0cd7f%3A0xaa864935a9fe268!2sZysk%20Technologies!5e0!3m2!1sen!2sin!4v1571311716189!5m2!1sen!2sin"
          width="100%"
          height="384"
          frameborder="0"
          style="border: 0;"
          allowfullscreen="false"
        ></iframe>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    message: {
      type: String,
    },
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translate(20px, 0)'
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 1.5,
        opacity: 1,
        x: 0,
        delay: 1,
        onComplete: done,
      })
    },
  },
}
</script>

<style>
</style>