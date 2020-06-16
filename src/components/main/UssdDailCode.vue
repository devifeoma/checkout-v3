<template>
  <div class="checkout__form">
    <go-back></go-back>
    <display-currency></display-currency>

    <div class="transaction__details">
      <div class="ussd__instruction">
        <p>
          Dial the code below on your mobile phone to complete the payment
        </p>

        <h6>*966*6*035883*794045#</h6>

        <span>Click here to copy the code</span>
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
