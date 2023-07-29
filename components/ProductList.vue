<template>
  <div>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
        class="item flex"
        @click="moveToDetailPage(product.id)"
      >
        <img
          :src="product.imageUrl"
          :alt="product.name"
          class="product-image"
        />
        <p>{{ product.name }}</p>
        <span>{{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
p {
  padding: 0;
  margin: 0;
}
</style>
