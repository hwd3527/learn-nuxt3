<template>
  <div>
    <header class="title">
      <h1><NuxtLink class="logo" to="/">Nuxt Shopping</NuxtLink></h1>
      <!-- <h1>{{ name }} 페이지</h1>
      <NuxtLink to="/"> 홈페이지 </NuxtLink>
      <NuxtLink to="/main"> 메인페이지 </NuxtLink>
      <NuxtLink to="/product"> 상품페이지 </NuxtLink> -->
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '홈',
    };
  },
  watch: {
    $route(to) {
      if (to) {
        this.nameChange();
      }
    },
  },
  methods: {
    nameChange() {
      if (this.$route.name === 'index') {
        this.name = '홈';
      } else if (this.$route.name === 'main') {
        this.name = '메인';
      } else if (this.$route.name === 'product') {
        this.name = '상품';
      }
    },
  },
};
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
