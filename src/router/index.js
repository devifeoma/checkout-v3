import Vue from "vue";
import VueRouter from "vue-router";
import CheckoutForm from "../components/CheckoutForm";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CheckoutForm",
    component: CheckoutForm 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
