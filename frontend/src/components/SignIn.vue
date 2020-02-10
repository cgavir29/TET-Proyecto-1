<template>
  <form @submit.prevent>
    <b-field>
      <b-input v-model="user.email" type="text" placeholder="Email" required></b-input>
    </b-field>
    <b-field>
      <b-input v-model="user.password" type="password" placeholder="Password" required password-reveal></b-input>
    </b-field>
    <b-field>
      <b-button v-on:click="handleSubmit" class="is-light" type="submit">Sign in</b-button>
    </b-field>
  </form>
</template>

<script>
import axios from 'axios'
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
      if (this.user.email === '' || this.user.password === '') return

      axios.post('/signin', this.user)
        .then(res => {
          this.logUser(res.data)
          this.$router.push('/metrics')
        })
        .catch(error => {
          this.$buefy.dialog.alert({
            title: 'Error',
            message: error.response.data.error,
            type: 'is-danger',
            hasIcon: true,
            icon: 'times-circle',
            iconPack: 'fa',
            ariaRole: 'alertdialog',
            ariaModal: true
          })
        })
    }
  }
}
</script>
