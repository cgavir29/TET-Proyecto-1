<template>
  <div id="home">
    <section class="hero is-fullheight is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <div v-if="!this.getUser">
            <h1 class="title">TET Proyecto 1</h1>
            <SignIn />
          </div>
          <div v-else>
            <h1 class="title">Bienvenido</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SignIn from '@/components/SignIn.vue'

export default {
  name: 'Home',
  components: {
    SignIn
  },
  computed: {
    ...mapGetters(['getUser'])
  }
}
</script>
