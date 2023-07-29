<template>
  <div class="app">
    <main>
      <!-- <SearchInput
        :search-keyword="searchKeyword"
        @input="updateSearchKeyword"
      ></SearchInput> -->
      <SearchInput
        v-model="searchKeyword"
        @searchInput="searchList"
      ></SearchInput>

      <ProductList :products="products"></ProductList>
    </main>
    <div class="cart-wrapper">
      <button type="button" class="btn" @click="moveToCartPage">CART</button>
    </div>
  </div>
</template>

<script>
import { fetchProductsByKeyword, fetchProducts } from '~/api';
export default {
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    const { data } = await fetchProducts();
    const products = data.map(item => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.floor(Math.random() * 100)}`,
      };
    });
    return { products };
  },
  data() {
    return {
      searchKeyword: '',
    };
  },
  methods: {
    // updateSearchKeyword(value) {
    //   this.searchKeyword = value;
    // },
    async searchList() {
      const { data } = await fetchProductsByKeyword(this.searchKeyword);
      this.products = data.map(item => {
        return {
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.floor(
            Math.random() * 100,
          )}`,
        };
      });
    },
    moveToCartPage() {
      this.$router.push('/cart');
    },
  },
  // async created() {
  //   const { data } = await axios.get('http://localhost:3000/products');
  //   this.products = data;
  // },
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  justify-content: center;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
p {
  padding: 0;
  margin: 0;
}
.cart-layer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff0000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.cart-layer span {
  color: #fff;
}
</style>
