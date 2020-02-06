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
          <a class="button is-primary" @click="isComponentModalActive = true">Sign up</a>
          <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus aria-role="dialog" aria-modal>
          <SignUp />
  </b-modal>
          <!-- <a class="button is-light">Log in</a> -->
        </div>

      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'Navbar',
  components: {
    SignUp
  },
  data () {
    return {
      isComponentModalActive: false,
      formProps: {
        name: '',
        email: 'pepito@gmail.com',
        password: ''
      }
    }
  }
}
</script>
