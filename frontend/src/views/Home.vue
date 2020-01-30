<template>
  <div id="home">
    <section class="hero is-fullheight is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Sign In</h1>
          <SignIn />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue'

export default {
  name: 'Home',
  components: {
    SignIn
  }
}
</script>
