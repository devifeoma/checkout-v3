<template>
  <div class="checkout__form">
    <go-back></go-back>
    <display-currency></display-currency>

    <div class="transaction__details">
      <div class="transaction__details__header">
        <p>Enter your card details to pay</p>
      </div>

      <div class="input-form">
        <div class="card input__icon">
          <label class="label">Card number</label>
          <input
            type="text"
            maxlength="16"
            data-mask="0000 0000 0000 0000"
            placeholder="0000 0000 0000 0000"
          />
          <!-- <img src="/assets/img/credit__card.svg"> -->
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 4.67579V3.8399C19 3.22604 18.5005 2.72662 17.8865 2.72662H1.1135C0.499529 2.72662 0 3.22604 0 3.8399V4.67579H19Z"
              fill="#D2DCE8"
            />
            <path
              d="M12.2835 10.617C11.6706 10.617 11.1719 11.1156 11.1719 11.7284C11.1719 12.3413 11.6706 12.8399 12.2835 12.8399C12.8965 12.8399 13.3952 12.3413 13.3952 11.7284C13.3952 11.1156 12.8965 10.617 12.2835 10.617Z"
              fill="#D2DCE8"
            />
            <rect
              x="9.5"
              y="9.5"
              width="8.14286"
              height="5.42857"
              fill="#D2DCE8"
            />
            <path d="M0 5.78906H19V7.27344H0V5.78906Z" fill="#D2DCE8" />
            <path
              d="M14.231 10.653C14.5982 11.315 14.6055 12.1287 14.231 12.8039C14.9402 12.9881 15.6226 12.4491 15.6226 11.7284C15.6226 11.0074 14.9397 10.4689 14.231 10.653Z"
              fill="#D2DCE8"
            />
            <path
              d="M0 8.38672V15.1601C0 15.774 0.499529 16.2734 1.1135 16.2734H17.8865C18.5005 16.2734 19 15.774 19 15.1601V8.38672H0ZM5.44325 13.8965H2.84558C2.5381 13.8965 2.28883 13.6473 2.28883 13.3399C2.28883 13.0325 2.5381 12.7833 2.84558 12.7833H5.44325C5.75074 12.7833 6 13.0325 6 13.3399C6 13.6473 5.75074 13.8965 5.44325 13.8965ZM13.3965 13.6537C11.9262 14.5065 10.0586 13.4448 10.0586 11.7284C10.0586 10.0151 11.9232 8.94859 13.3965 9.80315C14.8712 8.9493 16.7359 10.0145 16.7359 11.7284C16.7359 13.4397 14.8739 14.5092 13.3965 13.6537Z"
              fill="#D2DCE8"
            />
          </svg>
        </div>

        <div class="card__exp__cvv input__icon">
          <div class="card__item">
            <label class="label">Valid Till</label>
            <input type="text" data-mask="00 / 00" placeholder="MM / YY" />
            <!-- <img src="/assets/img/credit__card.svg"> -->
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4.67579V3.8399C19 3.22604 18.5005 2.72662 17.8865 2.72662H1.1135C0.499529 2.72662 0 3.22604 0 3.8399V4.67579H19Z"
                fill="#D2DCE8"
              />
              <path
                d="M12.2835 10.617C11.6706 10.617 11.1719 11.1156 11.1719 11.7284C11.1719 12.3413 11.6706 12.8399 12.2835 12.8399C12.8965 12.8399 13.3952 12.3413 13.3952 11.7284C13.3952 11.1156 12.8965 10.617 12.2835 10.617Z"
                fill="#D2DCE8"
              />
              <rect
                x="9.5"
                y="9.5"
                width="8.14286"
                height="5.42857"
                fill="#D2DCE8"
              />
              <path d="M0 5.78906H19V7.27344H0V5.78906Z" fill="#D2DCE8" />
              <path
                d="M14.231 10.653C14.5982 11.315 14.6055 12.1287 14.231 12.8039C14.9402 12.9881 15.6226 12.4491 15.6226 11.7284C15.6226 11.0074 14.9397 10.4689 14.231 10.653Z"
                fill="#D2DCE8"
              />
              <path
                d="M0 8.38672V15.1601C0 15.774 0.499529 16.2734 1.1135 16.2734H17.8865C18.5005 16.2734 19 15.774 19 15.1601V8.38672H0ZM5.44325 13.8965H2.84558C2.5381 13.8965 2.28883 13.6473 2.28883 13.3399C2.28883 13.0325 2.5381 12.7833 2.84558 12.7833H5.44325C5.75074 12.7833 6 13.0325 6 13.3399C6 13.6473 5.75074 13.8965 5.44325 13.8965ZM13.3965 13.6537C11.9262 14.5065 10.0586 13.4448 10.0586 11.7284C10.0586 10.0151 11.9232 8.94859 13.3965 9.80315C14.8712 8.9493 16.7359 10.0145 16.7359 11.7284C16.7359 13.4397 14.8739 14.5092 13.3965 13.6537Z"
                fill="#D2DCE8"
              />
            </svg>
          </div>

          <div class="card__item input__icon">
            <label class="label">Cvv</label>
            <input type="text" data-mask="0000" placeholder="123" />
            <!-- <img src="/assets/img/credit__card.svg"> -->
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4.67579V3.8399C19 3.22604 18.5005 2.72662 17.8865 2.72662H1.1135C0.499529 2.72662 0 3.22604 0 3.8399V4.67579H19Z"
                fill="#D2DCE8"
              />
              <path d="M0 5.5H19V8.48438H0V5.5Z" fill="#D2DCE8" />
              <path
                d="M0 8.38672V15.1601C0 15.774 0.499529 16.2734 1.1135 16.2734H17.8865C18.5005 16.2734 19 15.774 19 15.1601V8.38672H0ZM13 11.1133H10.4023C10.0948 11.1133 9.84558 10.8641 9.84558 10.5566C9.84558 10.2492 10.0948 10 10.4023 10H13C13.3075 10 13.5568 10.2492 13.5568 10.5566C13.5568 10.8641 13.3075 11.1133 13 11.1133Z"
                fill="#D2DCE8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <pay-button></pay-button>
    <secured-by-flutterwave></secured-by-flutterwave>
  </div>
</template>

<script>
import GoBack from "../components/GoBack.vue";
import DisplayCurrency from "../components/DisplayCurrency.vue";
import payButton from "../components/PayButton.vue";
import SecuredByFlutterwave from "../components/SecuredByFlutterwave.vue";

export default {
  name: "App",
  components: {
    GoBack,
    DisplayCurrency,
    PayButton,
    SecuredByFlutterwave,
  },
};
</script>
