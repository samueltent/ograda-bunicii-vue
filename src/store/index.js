import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            {
              id: "1",
              image:
                "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
            },
            {
              id: "2",
              image:
                "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
            },
            {
              id: "3",
              image:
                "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
            },
            {
              id: "4",
              image:
                "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
            },
            {
              id: "5",
              image:
                "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
            },
            {
              id: "6",
              image:
                "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
            },
          ],
          cart: [
          ],
    },
    mutations: {
        addToCart (state, payload) {
            let productsInCart = state.cart.find(item => {
              return item.product.id === payload.product.id
            });

            if(productsInCart) {
              productsInCart.quantity += payload.quantity;
              return;
            }
            state.cart.push(payload);
        },
        removeProductFromCart (state, id) {
          state.cart = state.cart.filter(item => {
            return item.product.id !== id;
          })
        }
    },
    actions: {
        addToCart ({commit}, payload) {
            commit('addToCart', payload);
        },
        removeProductFromCart ({commit}, id) {
          commit('removeProductFromCart', id);
        }
    },
    getters: {
        products (state) {
            return state.products;
        },
        productsInCart (state) {
            return state.cart;
        }
    } 
});