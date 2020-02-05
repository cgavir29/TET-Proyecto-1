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
import { mapMutations } from 'vuex'
import axios from 'axios'

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
    ...mapMutations(['setUser']),
    handleSubmit () {
      axios.post('/signin', this.user)
        .then(user => {
          console.log(user)
          this.setUser(user)
        })
        .catch(err => (console.log(err)))
    }
  }
}
</script>
