<template>
  <div>
    <h3>
      Hello dog
    </h3>

    <select-dog v-on:breed-change="onBreedChange"></select-dog>

    <button @click="getDog">
      <img v-bind:src="dogImage"
        v-show="dogImage"
        alt="Dog image">
    </button>
  </div>
</template>

<script>
import SelectDog from './SelectDog';

export default {
  name: 'HelloDog',
  components: {
    SelectDog
  },
  data() {
    return {
      dogImage: '',
      breeds: {},
      selectedBreed: '',
    }
  },
  created() {
    this.getDog();
  },
  methods: {
    getDog() {
      let api;
      if (this.selectedBreed) {
        api = `https://dog.ceo/api/breed/${this.selectedBreed}/images/random`;
      } else {
        api = 'https://dog.ceo/api/breeds/image/random';
      }
      fetch(api)
        .then(res => res.json())
        .then(data => this.dogImage = data.message);
    },
    onBreedChange(breed) {
      this.selectedBreed = breed;
      this.getDog();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
}


.hello-leave-active,
.hello-enter-active  {
  transition: all 1s;
}

.hello-leave-to,
.hello-enter {
  opacity: 0;
}
</style>
