(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221bf6"],{cc55:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"cart"}},[r("Cart")],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-12"},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{attrs:{src:r("5fbe"),contain:"",height:"150"}})],1),t.productsInCart.length?t._e():a("v-col",{staticClass:"mt-12",attrs:{cols:"12",justify:"center"}},[a("div",{staticClass:"text-h4 text-md-h2 text-center"},[t._v(" Costul tau este momentan gol!"),a("br"),a("router-link",{attrs:{tag:"button",to:"/products"}},[a("v-btn",[t._v(" EXPLOREAZA PRODUSE ")])],1)],1)]),t.productsInCart.length?a("v-col",{staticClass:"my-12",attrs:{cols:"12",justify:"center"}},[a("div",{staticClass:"text-h3 text-md-h3 text-center"},[a("strong",[t._v("Cosul tau")])]),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"my-12",attrs:{cols:"12"}},t._l(t.productsInCart,(function(t){return a("CardEntry",{key:t.product.id,attrs:{items:t}})})),1)],1)],1):t._e()],1)],1),t.productsInCart.length?a("v-container",[a("v-row",{attrs:{justify:"end"}},[a("v-col",{staticClass:"text-h6",attrs:{cols:"auto"}},[t._v(" Pret total: "+t._s(t.getTotalPrice)+" RON ")])],1),a("v-row",{attrs:{justify:"center"}},[a("router-link",{attrs:{tag:"button",to:"/order"}},[a("v-btn",{attrs:{"x-large":"",color:"green"}},[t._v(" Plaseaza comanda ")])],1)],1)],1):t._e()],1)},i=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"my-6 rounded-xl pa-6",attrs:{flat:""}},[r("v-img",{attrs:{height:"100",contain:"",src:t.items.product.image}}),r("v-card-title",[t._v(" "+t._s(t.items.product.title)+" ")]),r("v-card-subtitle",[t._v(" Lorem, ipsum. ")]),r("v-card-text",[t._v(" "+t._s(t.items.product.description)+" ")]),r("v-card-action",[r("v-container",[r("v-row",[r("v-text",{staticClass:"text-h6"},[t._v("Cantitate: "+t._s(t.items.quantity)+" ")])],1)],1),r("v-btn",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.handleQuantity(t.items,!1)}}},[r("v-icon",[t._v("mdi-plus")])],1),r("v-btn",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.handleQuantity(t.items,!0)}}},[r("v-icon",[t._v("mdi-minus")])],1),r("v-row",{attrs:{justify:"end"}},[r("v-btn",{staticClass:"red accent-2",on:{click:function(e){return e.preventDefault(),t.deleteCartItem(t.items.product.id)}}},[t._v(" Sterge ")])],1)],1)],1)},o=[],u={name:"CardEntry",props:["items"],methods:{deleteCartItem:function(t){this.$store.dispatch("removeProductFromCart",t)},deleteNoQuantity:function(t){0===t.quantity&&this.deleteCartItem(t.product.id)},handleQuantity:function(t,e){if(!e)return t.quantity++;while(t.quantity>1)return t.quantity--;this.deleteCartItem(t.product.id)}}},l=u,d=r("2877"),v=r("6544"),m=r.n(v),f=r("8336"),C=r("b0af"),p=r("99d9"),h=r("a523"),_=r("132d"),y=r("adda"),g=r("0fd9"),b=Object(d["a"])(l,c,o,!1,null,"aea3f130",null),w=b.exports;m()(b,{VBtn:f["a"],VCard:C["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VContainer:h["a"],VIcon:_["a"],VImg:y["a"],VRow:g["a"]});var x={name:"Cart",components:{CardEntry:w},data:function(){return{price:100}},computed:{productsInCart:function(){return this.$store.getters.productsInCart},getTotalPrice:function(){return this.$store.getters.getTotalPrice}}},V=x,I=r("62ad"),j=Object(d["a"])(V,s,i,!1,null,"26a69f80",null),k=j.exports;m()(j,{VBtn:f["a"],VCol:I["a"],VContainer:h["a"],VImg:y["a"],VRow:g["a"]});var E={name:"CartView ",components:{Cart:k}},P=E,O=Object(d["a"])(P,a,n,!1,null,"ff92884e",null);e["default"]=O.exports}}]);
//# sourceMappingURL=chunk-2d221bf6.62f8fb9b.js.map