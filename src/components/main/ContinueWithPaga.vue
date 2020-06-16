<template>
  <div class="checkout__form">
    <go-back></go-back>
    <display-currency></display-currency>

    <div class="transaction__details">
      <div class="ussd__instruction">
        <p>
          You will be redirected to Paga to complete this payment
        </p>
      </div>

      <div class="card input__icon">
        <label class="label">Select Bank</label>
        <!-- <input type="text" maxlength="16" data-mask="0000 0000 0000 0000" placeholder="0000 0000 0000 0000"> -->
        <!-- <i class="fa fa-credit-card-alt" aria-hidden="true" ></i>  -->
        <!-- <img src="/assets/img/credit__card.svg"> -->

        <div class="language__option">
          <select class="select__bank">
            <option>Click here to choose</option>
            <option>Click here to choose</option>
          </select>
        </div>
      </div>
    </div>
    <paga-button></paga-button>
    <secured-by-flutterwave></secured-by-flutterwave>
  </div>
</template>

<script>
import GoBack from "../components/GoBack.vue";
import DisplayCurrency from "../components/DisplayCurrency.vue";
import pagaButton from "../components/pagaButton.vue";
import SecuredByFlutterwave from "../components/SecuredByFlutterwave.vue";

export default {
  name: "App",
  components: {
    GoBack,
    DisplayCurrency,
    PagaButton,
    SecuredByFlutterwave,
  },
};
</script>
