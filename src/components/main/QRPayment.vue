<template>
  <div class="checkout__form">
    <go-back></go-back>
    <display-currency></display-currency>

    <div class="transaction__details">
      <div class="transaction__details__header">
        <p>
          Scan the QR Code below on your Bank’s mobile app to complete the
          payment
        </p>
      </div>

      <div class="qr__display">
        <img src="/assets/img/qr.svg" />
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
