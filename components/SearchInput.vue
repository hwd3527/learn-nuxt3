<template>
  <div class="input-wrapper flex">
    <input
      type="text"
      class="search-input"
      :value="searchKeyword"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="searchClick"
    />
    <button class="btn" @click="searchClick">search</button>
  </div>
</template>

<script>
export default {
  props: {
    searchKeyword: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    searchClick() {
      this.$emit('searchInput');
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
