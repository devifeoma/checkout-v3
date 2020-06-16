<template>
  <div class="checkout__form">
    <go-back></go-back>
    <display-currency></display-currency>

    <div class="transaction__details">
      <div class="transaction__successful__header">
        <!-- <img src="/assets/img/success.svg"> -->
        <svg
          width="76"
          height="75"
          viewBox="0 0 76 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.9775 75C58.6882 75 75.4775 58.2107 75.4775 37.5C75.4775 16.7893 58.6882 0 37.9775 0C17.2669 0 0.477539 16.7893 0.477539 37.5C0.477539 58.2107 17.2669 75 37.9775 75Z"
            fill="#D8EBE4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.4168 52L20.4775 39.5484L23.3124 35.4345L34.3652 41.0557L52.8583 23L56.4775 25.9526L35.4168 52Z"
            fill="#6BBEBE"
          />
        </svg>

        <h3 class="success__payment__text">Thank you for your payment!</h3>
        <p class="card__header">Your transaction was completed successfully.</p>
      </div>
    </div>

    <secured-by-flutterwave></secured-by-flutterwave>
  </div>
</template>

<script>
import GoBack from "../components/GoBack.vue";
import DisplayCurrency from "../components/DisplayCurrency.vue";
import SecuredByFlutterwave from "../components/SecuredByFlutterwave.vue";

export default {
  name: "App",
  components: {
    GoBack,
    DisplayCurrency,
    SecuredByFlutterwave,
  },
};
</script>
