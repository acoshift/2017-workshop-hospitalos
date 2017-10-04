<template>
  <div>
    <h1>User: {{ userId }}</h1>
    <router-link :to="{ name: 'User' }">Info</router-link>
    <router-link :to="{ name: 'UserEdit' }">Edit</router-link>
    <router-view />
    <br>
    <button @click="next">Next</button>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userId: 0
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler () {
        this.userId = +this.$route.params.id
        // get user
      }
    }
  },
  methods: {
    next () {
      this.$router.push({ params: { id: this.userId + 1 } })
    }
  }
}
</script>
