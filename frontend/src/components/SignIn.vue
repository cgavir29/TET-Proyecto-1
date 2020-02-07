<template>
    <form @submit.prevent>
    <b-field>
      <b-input v-model="user.email" type="email" placeholder="Email"></b-input>
    </b-field>
    <b-field>
      <b-input v-model="user.password" type="password" placeholder="Password" password-reveal></b-input>
    </b-field>
    <b-field>
      <b-button v-on:click="handleSubmit" class="is-light" type="submit">Sign in</b-button>
    </b-field>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignIn',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['logUser']),
    handleSubmit () {
      this.logUser(this.user)
      // If success -> Redirect
      // this.$router.push('/metrics')
      // If erros show warning... later
    }
  }
}
</script>
