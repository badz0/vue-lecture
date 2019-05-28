<template>
  <div>
    <select @change="onChange">
      <option value="">Select</option>
      <option :value="breed" v-for="(_, breed) in breeds" :key="breed">
        {{breed}}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'SelectDog',
  data() {
    return {
      breeds: {},
    }
  },
  created() {
    this.getBreeds();
  },
  methods: {
    onChange(event) {
      this.$emit('breed-change', event.target.value);
    },
    getBreeds() {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => {
          this.breeds = data.message
        });
    },
  }
}
</script>
