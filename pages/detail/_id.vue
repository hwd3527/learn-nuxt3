<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createCartItem, fetchProductById } from '@/api/index';
export default {
  data() {
    return {
      product: {},
    };
  },
  async fetch() {
    const { data } = await fetchProductById(this.$route.params.id);
    this.product = data;
  },
  // head: {
  //   title: 'Shopping Item Detail',
  //   meta: [
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: '이 상품은 ~입니다',
  //     },
  //   ],
  // },
  head() {
    return {
      title: `Shopping Item Detail - ${this.product.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `이 상품은 ${this.product.name}입니다`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `상품 상세페이지 - ${this.product.name}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `이 상품은 ${this.product.name}입니다`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.product.imageUrl}`,
        },
      ],
    };
  },
  methods: {
    async addToCart() {
      await createCartItem(this.product);
      this.$store.commit('addCartItem', this.product);
      this.$router.push('/cart');
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
