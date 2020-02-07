<template>
  <form @submit.prevent>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Sign up</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Name">
          <b-input type="text" v-model="user.name" placeholder="Your name" required></b-input>
        </b-field>
        <b-field label="Email">
          <b-input type="email" v-model="user.email" placeholder="Your email" required></b-input>
        </b-field>
        <b-field label="Password">
          <b-input
            type="password"
            v-model="user.password"
            password-reveal
            placeholder="Your password"
            required
          ></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot is-centered">
        <button class="button is-primary" type="submit" @click="handleSubmit">Register</button>
        <button class="button" type="button" @click="$parent.close()">Close</button>
      </footer>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      axios.post('/api/users', this.user)
        .then(res => {
          console.log(res)
          this.$parent.close()
        })
        .then(err => console.log(err))
    }
  }
}
</script>
