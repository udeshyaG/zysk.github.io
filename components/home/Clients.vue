<template>
  <transition @before-enter="beforeEnter" @enter="enterClients" appear :css="false">
    <a :href="clientInfo.url" rel="noreferrer noopener" target="_blank" class="clients-animation">
      <figure class="client">
        <img
          :src="require(`~/assets/clients/${clientInfo.image}`)"
          class="img-fluid illustration"
          alt="Mozilla"
        />
        <figcaption class="title sr-only">{{clientInfo.caption}}</figcaption>
      </figure>
    </a>
  </transition>
</template>

<script>
export default {
  props: {
    clientInfo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translate(50px, 0)'
    },
    enterClients(el, done) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1,
          toggleActions: 'restart complete reverse none',
        },
        duration: 1.5,
        opacity: 1,
        x: 0,
        stagger: 5,
        onComplete: done,
      })
    },
  },
}
</script>

<style>
</style>