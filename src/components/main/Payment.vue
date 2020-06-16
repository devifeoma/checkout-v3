<template>
  <div class="container">
    <div class="first__div">
      <div class="checkout__form">
    <go-back></go-back>
    <display-currency></display-currency>

    <div class="transaction__details">
      <div class="transaction__details__header">
        <p>Please choose your bank to begin payment</p>
      </div>

      <div class="input-form">
        <div class="card input__icon">
          <label class="label">Phone Number</label>
          <input type="text" maxlength="11" placeholder="07086493069" />
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
                  d="M9.00008 12.6827C9.34524 12.6827 9.62504 12.4029 9.62504 12.0578C9.62504 11.7126 9.34524 11.4328 9.00008 11.4328C8.65493 11.4328 8.37512 11.7126 8.37512 12.0578C8.37512 12.4029 8.65493 12.6827 9.00008 12.6827Z"
                  fill="#D2DCE8"
                />
                <path
                  d="M10.7435 3.64011H7.25648C7.06102 3.64011 6.90198 3.79173 6.90198 3.97776V10.5693C6.90198 10.7555 7.06091 10.907 7.25648 10.907H10.7435C10.939 10.907 11.098 10.7554 11.098 10.5693V3.97776C11.0979 3.79157 10.939 3.64011 10.7435 3.64011Z"
                  fill="#D2DCE8"
                />
                <path
                  d="M9.00071 0C4.58263 0 1.00098 3.58192 1.00098 7.99984C1.00098 12.4178 4.58263 16 9.00071 16C13.4188 16 17.0009 12.418 17.0009 7.99984C17.0009 3.58171 13.4188 0 9.00071 0ZM12.1131 11.9478C12.1131 12.5589 11.6177 13.0544 11.0065 13.0544H6.99511C6.38402 13.0544 5.8885 12.5589 5.8885 11.9478V4.01723C5.8885 3.40613 6.38396 2.91061 6.99511 2.91061H11.0065C11.6176 2.91061 12.1131 3.40608 12.1131 4.01723V11.9478Z"
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

        <div class="card input__icon">
          <label class="label">Account Number</label>
          <input type="text" maxlength="11" placeholder="2345678901" />
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
              d="M1.00098 8.99984C1.00098 4.58192 4.58263 1 9.00071 1C13.4188 1 17.0009 4.58171 17.0009 8.99984C17.0009 13.418 13.4188 17 9.00071 17C4.58263 17 1.00098 13.4178 1.00098 8.99984ZM5.23466 6.78662H12.7659C12.8708 6.78662 12.9629 6.71698 12.9914 6.61609C13.0199 6.5152 12.9781 6.40759 12.8888 6.35266L9.12315 4.03479C9.04783 3.9884 8.9528 3.9884 8.87742 4.03479L5.1118 6.35266C5.0225 6.40765 4.98063 6.5152 5.0092 6.61609C5.03776 6.71698 5.12986 6.78662 5.23466 6.78662ZM8.84098 5.37854H9.15965C9.2891 5.37854 9.39402 5.48346 9.39402 5.61292C9.39402 5.74237 9.2891 5.84729 9.15965 5.84729H8.84098C8.71153 5.84729 8.60661 5.74237 8.60661 5.61292C8.60661 5.48346 8.71153 5.37854 8.84098 5.37854ZM12.4441 7.49023V7.25586H5.55588V7.49023C5.55588 7.61969 5.6608 7.72461 5.79025 7.72461H12.2097C12.3391 7.72461 12.4441 7.61969 12.4441 7.49023ZM6.80582 8.19336H5.86838V10.438H6.80582V8.19336ZM7.64359 8.19336H8.58109V10.438H7.64359V8.19336ZM10.3564 8.19336H9.41885V10.438H10.3564V8.19336ZM12.1316 8.19336H11.1941V10.438H12.1316V8.19336ZM5.23459 10.9062H12.7655C12.8949 10.9062 12.9998 11.0112 12.9998 11.1406V11.7656C12.9998 11.8951 12.8949 12 12.7655 12H5.23459C5.10513 12 5.00021 11.8951 5.00021 11.7656V11.1406C5.00021 11.0112 5.10513 10.9062 5.23459 10.9062Z"
              fill="#D2DCE8"
            />
          </svg>
        </div>
      </div>
    </div>

    <pay-button></pay-button>
    <secured-by-flutterwave></secured-by-flutterwave>
    </div>
    </div>

    <div class="second__div">
      <div class="pay">
        <div class="payment__options__header"><h4>Payment Options</h4></div>
        <div class="hover ">
          <div class="ul">
            <a href="#">
              <!-- <img src="../assets/img/barter.svg" /> -->
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3202 6.84745C12.2786 5.36687 16.3075 0.0752677 10.0125 1.00747C7.27064 1.39132 3.87172 3.63461 3.06036 6.43122C2.63706 5.68337 2.16998 4.9602 1.66147 4.26521C0.906062 3.30559 -0.591153 4.24276 0.248181 5.2298C2.6263 8.05382 4.27701 11.4536 4.27701 14.8808C4.47283 13.1809 4.79498 10.9003 4.06758 8.8714C4.33374 9.05094 4.35304 9.06443 4.53832 9.2834C5.82529 11.2026 7.80219 12.7971 10.0125 13.5648C12.0269 14.305 14.7127 13.8664 13.6216 10.9053"
                  fill="#959EA9"
                />
              </svg>

              <span>Card</span>
            </a>
          </div>
        </div>
        <div class="hover">
          <div class="ul">
            <a href="# "
              ><img src="../assets/img/barter.svg" /> <span>USSD</span></a
            >
          </div>
        </div>
        <div class="hover">
          <div class="ul">
            <a href="#"
              ><img src="../assets/img/barter.svg" /> <span>Bank</span></a
            >
          </div>
        </div>
        <div class="hover">
          <div class="ul">
            <a href="#"
              ><img src="../assets/img/barter.svg" /> <span>QR</span></a
            >
          </div>
        </div>
        <div class="hover">
          <div class="ul">
            <a href="#">
              <img src="../assets/img/barter.svg" />
              <span>Barter</span>
              <button
                style="background: #219653; padding: 5px; color: white; border: none; border-radius: 2px; margin-left: 104px;"
              >
                0.5% cash back
              </button>
            </a>
          </div>
        </div>
        <div class="more__payment__options"><p>More payment options</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from "../components/common/GoBack.vue";
import DisplayCurrency from "../components/common/DisplayCurrency.vue";
import PayButton from "../components/common/PayButton.vue";
import SecuredByFlutterwave from "../components/common/SecuredByFlutterwave.vue";

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

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
}

.first__div {
  flex: 1;
  /* padding: 1rem; */
}

.second__div {
  background-color: #e4ecf3;
  flex: 1;
  width: 40%;
}

.pay {
  width: 300px;
  margin-top: 180px;
}

.payment__options__header {
  display: flex;
  align-items: center;
  margin: 0 0 20px 40px;
}

.payment__options__header h4 {
  font-family: FLW-Regular;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #333333;
}

.hover:hover {
  background: rgba(242, 201, 76, 0.18);
}

.ul {
  display: flex;
  align-items: center;
  margin-left: 40px;
  border-bottom: 1px solid #d8d8d8;
  height: 50px;
}

.ul a {
  text-decoration: none;
}

.ul a span {
  font-size: 12px;
  line-height: 13px;
  color: #4f4f4f;
  font-family: FLW-Regular;
  margin-left: 15px;
}

.more__payment__options {
  display: flex;
  align-items: center;
  margin: 40px 0 0 40px;
}

.more__payment__options p {
  font-family: FLW-Regular;
  font-size: 13px;
  line-height: 18px;
  text-align: right;
  color: #666666;
}
</style>
