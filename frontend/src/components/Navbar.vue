<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <strong>TET Proyecto 1</strong>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/metrics' }">Metrics</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <div v-if="!this.getUser">
            <a class="button is-primary" @click="isComponentModalActive = true">Sign up</a>
            <b-modal
              :active.sync="isComponentModalActive"
              has-modal-card
              trap-focus
              aria-role="dialog"
              aria-modal
            >
              <SignUp />
            </b-modal>
            <!-- <a class="button is-light">Log in</a> -->
          </div>
          <div v-else>
            <a class="button is-light">Log out</a>
          </div>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'Navbar',
  components: {
    SignUp
  },
  data () {
    return {
      isComponentModalActive: false
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  }
}
</script>
