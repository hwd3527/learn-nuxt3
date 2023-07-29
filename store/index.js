import { fetchCartItems } from '~/api';

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  addCartItem(state, cartItems) {
    const newCartItem = {
      ...cartItems,
      imageUrl: `${cartItems.imageUrl}?random=${Math.floor(
        Math.random() * 100,
      )}`,
    };
    state.cartItems.push(newCartItem);
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  SET_CART_PRODUCT(state, payload) {
    const newCartItem = payload.map(item => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.floor(Math.random() * 100)}`,
      };
    });
    state.cartItems = newCartItem;
  },
};

export const actions = {
  async FETCH_CARTS_PRODUCTS({ commit }) {
    // commit('SET_CART_PRODUCT', JSON.parse(localStorage.getItem('cartItems')));
    const { data } = await fetchCartItems();
    commit('SET_CART_PRODUCT', data);
  },
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch('FETCH_CARTS_PRODUCTS');
  // },
};
