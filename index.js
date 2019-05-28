const app = new Vue({
  el: '#app',
  data: {
    text: 'Hello world!',
    display: true,
    link: 'google.com',
    counter: 0,
    user: ''
  },
  created () {
    debugger
  },
  mounted () {
    debugger
    console.log(this.$el.innerHTML)
  },
  methods: {
    increment (event) {
      console.log('event: ', event)
      this.counter++
    },
    decrement () {
      this.counter--
    }
  }
})
