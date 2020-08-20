<template>
  <div
    class="service-thumb text-dark col-lg-4 col-sm-6 py-4"
    @mouseover="isHover = true"
    @mouseout="isHover = false"
    :class="isHover ? 'shadow-lg rounded-lg' : ''"
  >
    <transition @before-enter="beforeEnter" @enter="enter" appear :css="false">
      <div :class="cardInfo.image" class="cards">
        <picture>
          <img
            :src="require(`~/assets/services/${cardInfo.image}.svg`)"
            class="img-fluid illustration"
            alt="Website development service"
          />
        </picture>

        <h2 class="title">{{cardInfo.title}}</h2>

        <p>{{cardInfo.body}}</p>
        <nuxt-link class="link" :to="`/services/${cardInfo.link}`">Read more</nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Cards',

  props: {
    cardInfo: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isHover: false,
    }
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0.8)'
    },

    enter(el, done) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: `.${this.cardInfo.image}`,
          // start: 'top 100%',
          end: 'bottom 70%',
          scrub: 1,
          stagger: 3,
          toggleActions: 'restart pause reverse none',
        },
        opacity: 1,
        duration: 1.5,
        scale: 1,
        y: 0,

        onCompleted: done,
      })
    },
  },
}
</script>

<style></style>
