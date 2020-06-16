<template>
  <div class="checkout__form">
    <go-back></go-back>
    <display-currency></display-currency>

    <div class="transaction__details">
      <div class="transaction__details__header">
        <p>Please choose your bank to begin payment</p>
      </div>

      <div class="input-form">
        <div class="card input__icon">
          <label class="label">Voucher Pin</label>
          <input type="text" maxlength="11" placeholder="07086493069" />
          <!-- <img src="/assets/img/credit__card.svg"> -->
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.00101 8.99984C1.00101 4.58192 4.58266 1 9.00074 1C13.4188 1 17.0009 4.58171 17.0009 8.99984C17.0009 13.418 13.4188 17 9.00074 17C4.58266 17 1.00101 13.4178 1.00101 8.99984ZM14 7.84615C14 8.00545 13.8709 8.13461 13.7115 8.13461C13.2344 8.13461 12.8461 8.52281 12.8461 9C12.8461 9.47719 13.2344 9.86539 13.7115 9.86539C13.8708 9.86539 14 9.99453 14 10.1538V11.6923C14 11.8516 13.8708 11.9808 13.7115 11.9808H7.36537V10.5385C7.36537 10.3792 7.23621 10.25 7.07691 10.25C6.91762 10.25 6.78846 10.3791 6.78846 10.5385V11.9808H4.28846C4.12916 11.9808 4 11.8516 4 11.6923V10.1538C4 9.99453 4.12916 9.86539 4.28846 9.86539C4.76564 9.86539 5.15385 9.47719 5.15385 9C5.15385 8.52281 4.76562 8.13461 4.28846 8.13461C4.12916 8.13461 4 8.00547 4 7.84615V6.3077C4 6.14838 4.12916 6.01924 4.28848 6.01924H6.78848V7.46154C6.78848 7.62084 6.91764 7.75 7.07693 7.75C7.23623 7.75 7.36539 7.62086 7.36539 7.46154V6.01924H13.7115C13.8708 6.01924 14 6.14838 14 6.3077V7.84615ZM7.07693 9.67307C7.23623 9.67307 7.36539 9.54393 7.36539 9.38461V8.61537C7.36539 8.45607 7.23623 8.32691 7.07693 8.32691C6.91764 8.32691 6.78848 8.45605 6.78848 8.61537V9.38461C6.78848 9.54391 6.91764 9.67307 7.07693 9.67307Z"
              fill="#D2DCE8"
            />
          </svg>
        </div>

        <div class="card input__icon">
          <label class="label">Phone Number</label>
          <input type="text" maxlength="11" placeholder="2345678901" />
          <!-- <img src="/assets/img/credit__card.svg"> -->
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <g clip-path="url(#clip1)">
                <path
                  d="M9.00005 12.6827C9.34521 12.6827 9.62501 12.4029 9.62501 12.0578C9.62501 11.7126 9.34521 11.4328 9.00005 11.4328C8.6549 11.4328 8.37509 11.7126 8.37509 12.0578C8.37509 12.4029 8.6549 12.6827 9.00005 12.6827Z"
                  fill="#D2DCE8"
                />
                <path
                  d="M10.7435 3.6401H7.25645C7.06099 3.6401 6.90195 3.79173 6.90195 3.97776V10.5693C6.90195 10.7555 7.06088 10.907 7.25645 10.907H10.7435C10.939 10.907 11.098 10.7554 11.098 10.5693V3.97776C11.0979 3.79157 10.939 3.6401 10.7435 3.6401Z"
                  fill="#D2DCE8"
                />
                <path
                  d="M9.00074 0C4.58266 0 1.00101 3.58192 1.00101 7.99984C1.00101 12.4178 4.58266 16 9.00074 16C13.4188 16 17.0009 12.418 17.0009 7.99984C17.0009 3.58171 13.4188 0 9.00074 0ZM12.1132 11.9478C12.1132 12.5589 11.6177 13.0544 11.0066 13.0544H6.99514C6.38405 13.0544 5.88853 12.5589 5.88853 11.9478V4.01723C5.88853 3.40613 6.38399 2.91061 6.99514 2.91061H11.0066C11.6176 2.91061 12.1132 3.40608 12.1132 4.01723V11.9478Z"
                  fill="#D2DCE8"
                />
              </g>
              <path
                d="M14.996 -143C-67.843 -143 -134.999 -75.839 -134.999 6.99699C-134.999 89.833 -67.843 157 14.996 157C97.835 157 164.999 89.837 164.999 6.99699C164.999 -75.843 97.835 -143 14.996 -143ZM73.354 81.021C73.354 92.479 64.064 101.77 52.605 101.77H-22.609C-34.067 101.77 -43.358 92.48 -43.358 81.021V-67.677C-43.358 -79.135 -34.068 -88.426 -22.609 -88.426H52.605C64.063 -88.426 73.354 -79.136 73.354 -67.677V81.021Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect x="1" width="16" height="16" fill="white" />
              </clipPath>
              <clipPath id="clip1">
                <rect x="1" width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
import PayButton from "../components/PayButton.vue";
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
