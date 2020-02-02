<template>
  <div id="home">
    <section class="hero is-fullheight is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">TET Proyecto 1</h1>
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
