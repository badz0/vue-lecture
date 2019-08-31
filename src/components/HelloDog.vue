<template>
  <div>
    <h3>Hello Dog</h3>

    <select-breed @dog-select="onDogSelected" />

    <button @click="getDog">
      <img v-show="dogUrl" :src="dogUrl" alt="Dog image">
    </button>
  </div>
</template>

<script>
import SelectBreed from './SelectBreed';

export default {
  name: 'HelloDog',
  components: {
    SelectBreed
  },
  data() {
    return {
      dogUrl: null,
      breeds: null,
      selectedBreed: ''
    }
  },
  created() {
    this.getDog();
  },
  methods: {
    onDogSelected(breed) {
      this.selectedBreed = breed;
      this.getDog();
    },
    getDog() {
      let api;
      if (this.selectedBreed) {
        api = `https://dog.ceo/api/breed/${this.selectedBreed}/images/random`;
      } else {
        api = 'https://dog.ceo/api/breeds/image/random';
      }
      fetch(api)
        .then(res => res.json())
        .then(data => this.dogUrl = data.message);
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  color: red;
}
button {
  background: none;
  border: none;
}
</style>
