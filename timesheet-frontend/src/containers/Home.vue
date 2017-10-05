<template>
  <div>
    <h1>Home</h1>
    <button ref="loginButton" @click="login" class="btn btn-default" data-toggle="tooltip" title="Tooltip on left">{{ loginText }}</button>
  </div>
</template>

<script>
// import * as Api from '../services/api'
import State from '../state'

export default {
  name: 'home',
  data () {
    return {
      loginText: 'Login'
    }
  },
  computed: {
    user () {
      return State.user
    }
  },
  methods: {
    login () {
      this.loginText = 'Logout'
      this.$nextTick(() => {
        $(this.$refs.loginButton).tooltip()
      })
      // Api.login('admin', '1234')
      //   .then(() => {
      //     this.$router.push({ name: '' })
      //   })
    }
  }
}
</script>
