<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Navbar'
    }
  },
  methods: {
    setTitle (title) {
      this.title = title
    }
  }
}
</script>
