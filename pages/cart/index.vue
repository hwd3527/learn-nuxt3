<template>
  <div class="container">
    <h1 class="list-title">카트 페이지입니다.</h1>
    <CartList></CartList>
    <div class="extra-panel">
      <button type="button">구메하기</button>
    </div>
  </div>
</template>

<script>
export default {
  // async asyncData({ store }) {
  //   await store.dispatch('FETCH_CARTS_PRODUCTS');
  // },
  data() {
    return {
      // cartItems: [],
    };
  },

  // created() {
  //   this.cartItems = this.$store.state.cartItems;
  // },
};
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}

.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
