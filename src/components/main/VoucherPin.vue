<template>
  <div class="checkout__form">
    <go-back></go-back>
    <display-currency></display-currency>

    <div class="transaction__details">
      <div class="enter__card__header">
        <p>
          Please enter the voucher PIN to complete transaction
        </p>
      </div>

      <div class="card__pin">
        <input
          id="box1"
          type="password"
          style="-webkit-text-security: square; margin-right: 20.7px;"
          maxlength="1"
          onkeyup="onKeyUpEvent(1, event)"
          onfocus="onFocusEvent(1)"
        />
        <input
          id="box2"
          style="-webkit-text-security: square; margin-right: 20.7px;"
          type="password"
          maxlength="1"
          onkeyup="onKeyUpEvent(2, event)"
          onfocus="onFocusEvent(2)"
        />
        <input
          id="box3"
          style="-webkit-text-security: square; margin-right: 20.7px;"
          type="password"
          maxlength="1"
          onkeyup="onKeyUpEvent(3, event)"
          onfocus="onFocusEvent(3)"
        />
        <input
          id="box4"
          style="-webkit-text-security: square; margin-right: 20.7px;"
          type="password"
          maxlength="1"
          onkeyup="onKeyUpEvent(4, event)"
          onfocus="onFocusEvent(4)"
        />
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
