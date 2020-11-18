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
                price: 5,
            },
            {
              id: "2",
              image:
                "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/h83/ha8/8909892976670.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
                price: 8,
            },
            {
              id: "3",
              image:
                "https://bulbiromania.ro/wp-content/uploads/2018/04/Castraveti-cornisor-600x600.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
                price: 7,
            },
            {
              id: "4",
              image:
                "https://www.csid.ro/wp-content/uploads/2014/03/11661848/1-leustean.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
                price: 10,
            },
            {
              id: "5",
              image:
                "https://prod-bonduelle.s3.eu-central-1.amazonaws.com/ro-ro/vegetables/Fasolea-alb%C4%83-boabe-1511272872_tmb.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
                price: 5,
            },
            {
              id: "6",
              image:
                "https://s13emagst.akamaized.net/products/1671/1670985/images/res_97fc3aaa78ed61bbb3d1de0bd387c30a.jpg",
              title: "Lorem ipsum dolor sit amet consectetur.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
                price: 3,
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
        },
        getTotalPrice (state) {
          let price = 0;
          state.cart.forEach(item => {
            price += item.product.price * item.quantity
          })
          return price;
        },
        product (state) {
          return (productId) => {
            return state.products.find(item => {
              return item.id === productId;
            })
          }
        },
        featuredProducts (state, getters) {
          return getters.products.slice(0,5);
        }
    } 
});