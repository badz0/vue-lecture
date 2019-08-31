<template>
  <div>
    
    <select @change="$emit('dog-select', $event.target.value)">
      <option value="">Select</option>
      <option :value="breed"
              v-for="(_, breed) in breeds"
              :key="breed">
        {{ breed }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectBreed',
  data() {
    return {
      breeds: null
    }
  },
  created() {
    this.getBreeds();
  },
  methods: {
    getBreeds() {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => this.breeds = data.message);
    },
  }
}
</script>
<style scoped lang="scss">
select {
  margin-bottom: 10px;
}
</style>
