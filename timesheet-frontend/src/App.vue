<template>
  <div id="app">
    <Navbar ref="navbar" />
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About', query: { name: 'test' } }">About</router-link>
    <router-view />
    <div>Footer</div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Item from './components/Item'

export default {
  name: 'app',
  components: {
    Navbar,
    Item
  },
  data () {
    return {
      list: [
        { id: 1, name: 'test1', price: 10, createdAt: '2017/03/01' },
        { id: 2, name: 'test2', price: 35, createdAt: Date.now() }
      ],
      filter: 0
    }
  },
  created () {
    setInterval(() => {
      this.list[0].price++
    }, 2000)
  },
  mounted () {
    this.$refs.navbar.setTitle('My App')
  },
  computed: {
    totalPrice () {
      return this.list
        .map((item) => item.price)
        .reduce((p, v) => p + v, 0)
    },
    computedList () {
      return this.list
        .filter((item) => item.price >= this.filter)
    }
  },
  methods: {
    itemSelect (item) {
      window.alert('select ' + item.name)
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";

  .red {
    color: $primary-color;
  }
</style>
