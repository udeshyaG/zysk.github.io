<template>
  <div>
    <section class="container-fluid my-5 display-area">
      <div class="service d-flex justify-content-around flex-wrap">
        <div class="mb-4">
          <picture>
            <transition @before-enter="beforeEnter" @enter="enter" appear :css="false">
              <img
                class="img-fluid illustration"
                :src="require(`../../assets/services/${pageContents.banner_img}`)"
                alt="Website development illustration"
              />
            </transition>
          </picture>
        </div>

        <div class="w-100 d-lg-none"></div>

        <div class="description">
          <h1 class="header">Services</h1>
          <h2 class="title my-4">{{pageContents.title}}</h2>

          <Paragraph
            v-for="(para,index) in pageContents.paragraphs_col_1"
            :key="index"
            :text="para.text"
            :className="para.class"
          />
        </div>

        <div class="description">
          <Paragraph
            v-for="(para,index) in pageContents.paragraphs_col_2"
            :key="index"
            :text="para.text"
            :className="para.class"
          />

          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <ImageComponent
              v-for="(image,index) in pageContents.images"
              :key="index"
              :imageURL="image.url"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Paragraph from '~/components/services/utils/Paragraph'
import ImageComponent from '~/components/services/utils/ImageComponent'
export default {
  props: {
    pageContents: {
      type: Object,
      required: true,
    },
  },

  components: {
    Paragraph,
    ImageComponent,
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(2)'
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 1.5,
        opacity: 1,
        x: 0,
        scale: 1,

        onComplete: done,
      })
    },
  },
}
</script>

<style>
.display-area {
  min-height: 80vh;
}
</style>