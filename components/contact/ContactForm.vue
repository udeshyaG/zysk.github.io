<template>
  <transition @before-enter="beforeEnter" @enter="enter" appear :css="false">
    <div class="col-sm-6 col-lg-5 order-1 order-md-2 py-5">
      <h1 class="header">Write to us!</h1>

      <form
        action="https://usebasin.com/f/ab2214293c2b"
        name="contact"
        autocomplete="off"
        method="POST"
      >
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" class="form-control" id="name" name="name" placeholder="John Doe" />
        </div>
        <div class="form-group d-none">
          <label for="only_for_bots">Your Name</label>
          <input
            type="text"
            class="form-control"
            id="only_for_bots"
            name="only_for_bots"
            placeholder="John Doe"
          />
        </div>
        <div class="form-group">
          <label for="email">Email ID</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="test@example.com"
          />
        </div>
        <div class="form-group">
          <label for="mobile">Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            class="form-control"
            id="mobile"
            name="mobile"
            placeholder="xxxxx xxxxx"
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Please enter your message"
          ></textarea>
        </div>
        <button class="btn btn-custom btn-black" type="submit">Submit form</button>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translate(-20px, 0)'
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 1.5,
        opacity: 1,
        x: 0,

        onComplete: done,
      })
    },
  },
}
</script>

<style>
</style>