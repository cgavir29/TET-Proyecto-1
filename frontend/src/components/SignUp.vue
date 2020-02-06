<template>
    <form>
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Sign up</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Name">
            <b-input type="text" :value="name" placeholder="Your name" required></b-input>
          </b-field>
          <b-field label="Email">
            <b-input type="email" :value="email" placeholder="Your email" required></b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              type="password"
              :value="password"
              password-reveal
              placeholder="Your password"
              required
            ></b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot is-centered">
          <button class="button is-primary">Register</button>
          <button class="button" type="button" @click="$parent.close()">Close</button>
        </footer>
      </div>
    </form>
</template>

<script>
export default {
  name: 'SignUp',
  props: ['name', 'email', 'password']
}
</script>
