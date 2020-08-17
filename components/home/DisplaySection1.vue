<template>
  <section class="container py-5">
    <div class="banner row d-flex justify-content-between align-items-center flex-wrap">
      <div class="col-lg-6">
        <h1 id="typedtext" class="header" ref="typedtext">
          Great Service
          <br />Great Results
        </h1>
        <p>
          Unleash the power of the web with our expertise to grow your
          business.
        </p>
        <div class="mt-5">
          <nuxt-link to="/about-us" class="btn btn-custom btn-black mr-lg-4 mb-2">Read More</nuxt-link>
          <nuxt-link to="/contact" class="btn btn-custom btn-red mb-2">Hire Us</nuxt-link>
        </div>
      </div>

      <transition @before-enter="beforeEnter" @enter="enter" :css="false" appear>
        <figure class="col-lg-5 d-none d-lg-block">
          <img src="~/assets/banner-image.png" class="img-fluid" alt="Great Service, Great Results" />
          <figcaption class="title sr-only">Great Service, Great Results</figcaption>
        </figure>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.checker()
  },

  methods: {
    checker() {
      var aText = new Array('Great Service', 'Great Results')
      var iSpeed = 100 // time delay of print out
      var iIndex = 0 // start printing array at this posision
      var iArrLength = aText[0].length // the length of the text array
      var iScrollAt = 20 // start scrolling up at this many lines

      var iTextPos = 0 // initialise text position
      var sContents = '' // initialise contents variable
      var iRow // initialise current row

      typewriter = () => {
        sContents = ' '
        iRow = Math.max(0, iIndex - iScrollAt)
        var destination = this.$refs.typedtext

        while (iRow < iIndex) {
          sContents += aText[iRow++] + '<br />'
        }
        destination.innerHTML =
          sContents + aText[iIndex].substring(0, iTextPos) + '|'
        if (iTextPos++ == iArrLength) {
          iTextPos = 0
          iIndex++
          if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length
            setTimeout('typewriter()', 500)
          }
        } else {
          setTimeout('typewriter()', iSpeed)
        }
      }

      typewriter()
    },

    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translate(50px, 0)'
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 3,
        opacity: 1,
        x: 0,
        rotation: 0,
        onComplete: done,
      })
    },
  },
}
</script>

<style>
</style>