<template>
  <div class="list-wrapper">
    <ul v-if="cartItems.length">
      <li v-for="cartItem in cartItems" :key="cartItem.id" class="list-item">
        <img :src="cartItem.imageUrl" :alt="cartItem.name" class="thumbnail" />
        <div class="description">
          <p>{{ cartItem.name }}</p>
          <p>{{ cartItem.price }}</p>
        </div>
      </li>
    </ul>
    <p v-else>카트가 비었습니다.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  async fetch() {
    await this.$store.dispatch('FETCH_CARTS_PRODUCTS');
    this.cartItems = await this.$store.state.cartItems;
  },
};
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>
