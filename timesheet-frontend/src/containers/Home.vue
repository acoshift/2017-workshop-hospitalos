<template>
  <div>
    <h1>Home</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import * as Api from '../services/api'
import State from '../state'

export default {
  name: 'home',
  computed: {
    user () {
      return State.user
    }
  },
  methods: {
    login () {
      Api.login('admin', '1234')
        .then(() => {
          this.$router.push({ name: '' })
        })
    }
  }
}
</script>
