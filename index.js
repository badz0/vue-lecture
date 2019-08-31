const app = new Vue({
  el: '#app',
  data: {
    text: 'Hello world!',
    show: true,
    link: 'google.com',
    input: 'hi',
    users: ['ivan', 'valera', 'oleh'],
    counter: 0,
    accent: false,
    size: 20
  },
  methods: {
    increaseCounter (event) {
      console.log('event: ', event)
      this.counter++
    },
    userClick (user) {
      console.log('user: ', user)
    }
  },
  created () {
  },
  mounted () {
  }
})
