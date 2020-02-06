<template>
  <div id="home">
    <section class="hero is-fullheight is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">TET Proyecto 1</h1>
          <div v-if="!this.isLoggedIn">
            <SignIn />
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
  data () {
    return {
      isLoggedIn: false
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  created () {
    this.isLoggedIn = !!this.getUser
  }
}
</script>
