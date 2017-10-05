<template>
  <div>
    <h1>{{ header }}</h1>
    <input v-model="name">
    <p>Price: {{ price }}</p>
    <p>Created At: {{ data.createdAt | fromNow }}</p>
    <button @click="select">Select</button>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    data: {
      type: Object,
      required: true
    },
    header: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      name: this.data.name,
      price: 0
    }
  },
  watch: {
    'data': {
      deep: true,
      immediate: true,
      handler () {
        this.price = this.data.price
      }
    }
  },
  methods: {
    select () {
      this.$emit('select', this.data)
    }
  }
}
</script>

<style lang="scss">
  @import "../style.scss";

  p {
    color: $primary-color;
  }
</style>
