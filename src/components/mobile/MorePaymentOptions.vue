<template>
  <div class="mobile__container">
    <div class="mobile__top__wrapper">
      <div class="payment__methods__close__div">
        <div class="payment__methods">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.59204 8.50003L13.2866 1.80563C13.4 1.69209 13.4568 1.56143 13.4568 1.41383C13.4568 1.26622 13.4001 1.13556 13.2866 1.02226L12.4348 0.170456C12.3212 0.0569779 12.1906 0 12.0433 0C11.8956 0 11.765 0.0569779 11.6515 0.170456L3.71343 8.10816C3.59989 8.2217 3.54327 8.35236 3.54327 8.49997C3.54327 8.64764 3.59989 8.77824 3.71343 8.89178L11.6511 16.8295C11.7648 16.9432 11.8955 16.9999 12.0431 16.9999C12.1906 16.9999 12.3212 16.9432 12.4347 16.8295L13.2865 15.9783C13.4 15.8647 13.4566 15.734 13.4566 15.5863C13.4566 15.4388 13.4 15.3082 13.2865 15.1947L6.59204 8.50003Z"
              fill="black"
            />
          </svg>

          <span>Payment Methods</span>
        </div>
        <button class="mobile__close__button">Close</button>
      </div>

      <!-- <div class="display__currency__div">
                <img src="../assets/img/logo.png" />
                <div class="mobile__display__currency__details">
                    <p>KES 234,456</p>
                    <span>tedlade.tl@gmail.com</span>
                </div>
            </div>

            <div class="switch__language__div">
                <div class="select__language__option">
                    <select class="mobile__select__style">
                        <option>English</option>
                        <option>English</option>
                    </select>
                </div>
                <span class="switch__currency">Switch Currency </span>
            </div> -->

      <div class="more__payment__option__text__div">
        <h1>Select your prefered payment option</h1>
      </div>
    </div>

    <div class="more__mobile__button__wrapper">
      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.844 6.76103C13.3947 6.73886 11.9819 7.21605 10.843 8.11245C10.7582 8.17804 10.6542 8.21363 10.547 8.21363C10.4399 8.21363 10.3358 8.17804 10.2511 8.11245C9.1121 7.21605 7.69934 6.73886 6.25009 6.76103C2.76203 6.81232 0 9.74403 0 13.2321V19.4072H4.27326V13.165C4.26742 12.6427 4.45538 12.1369 4.80083 11.7452C5.14627 11.3534 5.62467 11.1037 6.14355 11.0442C6.43086 11.0164 6.7208 11.049 6.99479 11.1398C7.26877 11.2307 7.52074 11.3778 7.73454 11.5717C7.94835 11.7656 8.11926 12.0021 8.23633 12.2659C8.35339 12.5298 8.41402 12.8152 8.41434 13.1038V19.4072H12.6876V13.165C12.6812 12.6432 12.8685 12.1376 13.2132 11.7459C13.5579 11.3542 14.0356 11.1042 14.5539 11.0442C14.8412 11.0164 15.131 11.049 15.4049 11.1398C15.6788 11.2307 15.9306 11.3778 16.1443 11.5718C16.3579 11.7657 16.5287 12.0022 16.6455 12.2661C16.7623 12.5299 16.8227 12.8153 16.8228 13.1038V19.4072H21.096V13.2321C21.094 9.74403 18.332 6.81232 14.844 6.76103Z"
              fill="#959EA9"
            />
            <path
              d="M4.66193 0.027591L8.21311 2.07741C8.24347 2.09462 8.26873 2.11957 8.2863 2.14973C8.30387 2.17988 8.31313 2.21416 8.31313 2.24905C8.31313 2.28395 8.30387 2.31823 8.2863 2.34838C8.26873 2.37854 8.24347 2.40349 8.21311 2.4207L4.66193 4.47052C4.63183 4.48837 4.59753 4.49789 4.56254 4.49811C4.52755 4.49832 4.49313 4.48923 4.46281 4.47177C4.43249 4.4543 4.40736 4.42908 4.39 4.3987C4.37264 4.36832 4.36368 4.33387 4.36402 4.29888V0.199232C4.36368 0.164243 4.37264 0.129792 4.39 0.099411C4.40736 0.0690299 4.43249 0.0438115 4.46281 0.0263432C4.49313 0.00887482 4.52755 -0.000215452 4.56254 3.87697e-06C4.59753 0.000223206 4.63183 0.00974391 4.66193 0.027591Z"
              fill="#959EA9"
            />
            <path
              d="M13.1413 0.0275924L16.6925 2.07742C16.7229 2.09462 16.7481 2.11958 16.7657 2.14973C16.7833 2.17988 16.7925 2.21416 16.7925 2.24906C16.7925 2.28396 16.7833 2.31823 16.7657 2.34838C16.7481 2.37854 16.7229 2.40349 16.6925 2.4207L13.1413 4.47052C13.1113 4.48787 13.0772 4.49699 13.0425 4.49695C13.0078 4.49692 12.9737 4.48773 12.9437 4.47032C12.9137 4.45292 12.8888 4.4279 12.8715 4.3978C12.8543 4.3677 12.8453 4.33358 12.8454 4.29888V0.199234C12.8453 0.164536 12.8543 0.130415 12.8715 0.100314C12.8888 0.0702131 12.9137 0.0451967 12.9437 0.0277881C12.9737 0.0103794 13.0078 0.00119404 13.0425 0.00115976C13.0772 0.00112548 13.1113 0.0102431 13.1413 0.0275924Z"
              fill="#959EA9"
            />
          </svg>
          <span>Migo</span>
          <!-- <p>Pay with <span>Migo</span></p> -->
        </a>
      </div>
      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="22"
            height="14"
            viewBox="0 0 22 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.8296 13.1187H1.19325C0.653255 13.1187 0.211426 12.6788 0.211426 12.1412V1.38889C0.211426 0.851272 0.653255 0.411392 1.19325 0.411392H20.8296C21.3696 0.411392 21.8114 0.851272 21.8114 1.38889V12.1412C21.8114 12.6788 21.3696 13.1187 20.8296 13.1187Z"
              fill="#959EA9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.8659 12.1412H3.15685C3.15685 11.066 2.27324 10.1863 1.19324 10.1863V3.34388C2.27324 3.34388 3.15685 2.46417 3.15685 1.38893H18.8659C18.8659 2.46417 19.7495 3.34388 20.8295 3.34388V10.1863C19.7495 10.1863 18.8659 11.066 18.8659 12.1412Z"
              fill="#959EA9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0114 11.1637C13.1803 11.1637 14.9386 9.19438 14.9386 6.76506C14.9386 4.33574 13.1803 2.36639 11.0114 2.36639C8.8424 2.36639 7.08411 4.33574 7.08411 6.76506C7.08411 9.19438 8.8424 11.1637 11.0114 11.1637Z"
              fill="#FBEED8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.1205 7.74256C5.66275 7.74256 6.10233 7.30492 6.10233 6.76506C6.10233 6.22521 5.66275 5.78757 5.1205 5.78757C4.57825 5.78757 4.13867 6.22521 4.13867 6.76506C4.13867 7.30492 4.57825 7.74256 5.1205 7.74256Z"
              fill="#FBEED8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.9022 7.74256C17.4445 7.74256 17.8841 7.30492 17.8841 6.76506C17.8841 6.22521 17.4445 5.78757 16.9022 5.78757C16.36 5.78757 15.9204 6.22521 15.9204 6.76506C15.9204 7.30492 16.36 7.74256 16.9022 7.74256Z"
              fill="#FBEED8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5023 6.27633H10.5205C10.2259 6.27633 10.0296 6.08082 10.0296 5.78761C10.0296 5.49435 10.226 5.29888 10.5205 5.29888H11.9932C12.2877 5.29888 12.4841 5.10336 12.4841 4.81015C12.4841 4.5169 12.2877 4.32142 11.9932 4.32142H11.5023C11.5023 4.02817 11.3059 3.8327 11.0114 3.8327C10.7169 3.8327 10.5205 4.02821 10.5205 4.32142C9.68596 4.32142 9.04779 4.95678 9.04779 5.78765C9.04779 6.61852 9.68596 7.25387 10.5205 7.25387H11.5023C11.7969 7.25387 11.9932 7.44939 11.9932 7.7426C11.9932 8.03585 11.7968 8.23133 11.5023 8.23133H10.0296C9.73507 8.23133 9.53873 8.42684 9.53873 8.72006C9.53873 9.01331 9.73511 9.20878 10.0296 9.20878H10.5205C10.5205 9.50204 10.7169 9.69751 11.0114 9.69751C11.306 9.69751 11.5023 9.50199 11.5023 9.20878C12.3368 9.20878 12.975 8.57343 12.975 7.74256C12.975 6.91169 12.3368 6.27633 11.5023 6.27633Z"
              fill="#333333"
            />
          </svg>
          <span>Card</span>
          <!-- <p>Pay with <span>Card</span></p> -->
        </a>
      </div>
      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.417391 6.04343L9.18261 0.199951L17.9478 6.04343H0.417391ZM10.2261 3.53908C10.2261 2.96279 9.75891 2.4956 9.18261 2.4956C8.60631 2.4956 8.13913 2.96279 8.13913 3.53908C8.13913 4.11537 8.60631 4.58256 9.18261 4.58256C9.75891 4.58256 10.2261 4.11537 10.2261 3.53908ZM2.08696 6.66952V14.8086H3.75652V6.66952L2.08696 6.66952ZM6.26087 14.8086V6.66952L7.93043 6.66952V14.8086H6.26087ZM10.4348 6.66952V14.8086H12.1043V6.66952L10.4348 6.66952ZM14.6087 14.8086V6.66952L16.2783 6.66952V14.8086H14.6087ZM0.834783 15.4347V17.1043H17.5304V15.4347H0.834783ZM0 19.4V17.7304H18.3652V19.4H0Z"
              fill="#939EAA"
            />
          </svg>
          <span>Bank</span>
          <!-- <p>Pay with <span>Bank</span></p> -->
        </a>
      </div>
      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 6.20002V0.600098H6.59992V6.20002H1ZM5.00008 4.60018V2.20018H2.60008V4.60018H5.00008Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 6.20002V0.600098H6.59992V6.20002H1ZM5.00008 4.60018V2.20018H2.60008V4.60018H5.00008Z"
              fill="black"
              fill-opacity="0.01"
            />
            <path
              d="M1 0.600098V9.76324e-05H0.4V0.600098H1ZM1 6.20002H0.4V6.80002H1V6.20002ZM6.59992 0.600098H7.19992V9.76324e-05H6.59992V0.600098ZM6.59992 6.20002V6.80002H7.19992V6.20002H6.59992ZM5.00008 2.20018H5.60008V1.60018H5.00008V2.20018ZM5.00008 4.60018V5.20018H5.60008V4.60018H5.00008ZM2.60008 2.20018V1.60018H2.00008V2.20018H2.60008ZM2.60008 4.60018H2.00008V5.20018H2.60008V4.60018ZM0.4 0.600098V6.20002H1.6V0.600098H0.4ZM6.59992 9.76324e-05H1V1.2001H6.59992V9.76324e-05ZM7.19992 6.20002V0.600098H5.99992V6.20002H7.19992ZM1 6.80002H6.59992V5.60002H1V6.80002ZM4.40008 2.20018V4.60018H5.60008V2.20018H4.40008ZM2.60008 2.80018H5.00008V1.60018H2.60008V2.80018ZM3.20008 4.60018V2.20018H2.00008V4.60018H3.20008ZM5.00008 4.00018H2.60008V5.20018H5.00008V4.00018Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 19.8001V14.1999H6.59992V19.8001H1ZM5.00008 18.2003V15.8003H2.60008V18.2003H5.00008Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 19.8001V14.1999H6.59992V19.8001H1ZM5.00008 18.2003V15.8003H2.60008V18.2003H5.00008Z"
              fill="black"
              fill-opacity="0.01"
            />
            <path
              d="M1 14.1999V13.5999H0.4V14.1999H1ZM1 19.8001H0.4V20.4001H1V19.8001ZM6.59992 14.1999H7.19992V13.5999H6.59992V14.1999ZM6.59992 19.8001V20.4001H7.19992V19.8001H6.59992ZM5.00008 15.8003H5.60008V15.2003H5.00008V15.8003ZM5.00008 18.2003V18.8003H5.60008V18.2003H5.00008ZM2.60008 15.8003V15.2003H2.00008V15.8003H2.60008ZM2.60008 18.2003H2.00008V18.8003H2.60008V18.2003ZM0.4 14.1999V19.8001H1.6V14.1999H0.4ZM6.59992 13.5999H1V14.7999H6.59992V13.5999ZM7.19992 19.8001V14.1999H5.99992V19.8001H7.19992ZM1 20.4001H6.59992V19.2001H1V20.4001ZM4.40008 15.8003V18.2003H5.60008V15.8003H4.40008ZM2.60008 16.4003H5.00008V15.2003H2.60008V16.4003ZM3.20008 18.2003V15.8003H2.00008V18.2003H3.20008ZM5.00008 17.6003H2.60008V18.8003H5.00008V17.6003Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.6001 6.20002V0.600098H20.2V6.20002H14.6001ZM18.5999 4.60018V2.20018H16.1999V4.60018H18.5999Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.6001 6.20002V0.600098H20.2V6.20002H14.6001ZM18.5999 4.60018V2.20018H16.1999V4.60018H18.5999Z"
              fill="black"
              fill-opacity="0.01"
            />
            <path
              d="M14.6001 0.600098V9.76324e-05H14.0001V0.600098H14.6001ZM14.6001 6.20002H14.0001V6.80002H14.6001V6.20002ZM20.2 0.600098H20.8V9.76324e-05H20.2V0.600098ZM20.2 6.20002V6.80002H20.8V6.20002H20.2ZM18.5999 2.20018H19.1999V1.60018H18.5999V2.20018ZM18.5999 4.60018V5.20018H19.1999V4.60018H18.5999ZM16.1999 2.20018V1.60018H15.5999V2.20018H16.1999ZM16.1999 4.60018H15.5999V5.20018H16.1999V4.60018ZM14.0001 0.600098V6.20002H15.2001V0.600098H14.0001ZM20.2 9.76324e-05H14.6001V1.2001H20.2V9.76324e-05ZM20.8 6.20002V0.600098H19.6V6.20002H20.8ZM14.6001 6.80002H20.2V5.60002H14.6001V6.80002ZM17.9999 2.20018V4.60018H19.1999V2.20018H17.9999ZM16.1999 2.80018H18.5999V1.60018H16.1999V2.80018ZM16.7999 4.60018V2.20018H15.5999V4.60018H16.7999ZM18.5999 4.00018H16.1999V5.20018H18.5999V4.00018Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.20001 0.600098V2.20018H11.3999V6.20002H13V0.600098H8.20001Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.20001 0.600098V2.20018H11.3999V6.20002H13V0.600098H8.20001Z"
              fill="black"
              fill-opacity="0.01"
              stroke="#919EAB"
              stroke-width="1.2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.80009 18.2003V14.1999H8.20001V19.8001H11.3999V18.2003H9.80009Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.80009 18.2003V14.1999H8.20001V19.8001H11.3999V18.2003H9.80009Z"
              fill="black"
              fill-opacity="0.01"
              stroke="#919EAB"
              stroke-width="1.2"
            />
            <rect
              x="18.5999"
              y="7.80009"
              width="1.60008"
              height="3.20016"
              fill="#919EAB"
            />
            <rect
              x="18.5999"
              y="7.80009"
              width="1.60008"
              height="3.20016"
              fill="black"
              fill-opacity="0.01"
              stroke="#919EAB"
              stroke-width="1.2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.0001 7.80009H11.3999V11.0003H13V9.40017H17.0001V7.80009Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.0001 7.80009H11.3999V11.0003H13V9.40017H17.0001V7.80009Z"
              fill="black"
              fill-opacity="0.01"
              stroke="#919EAB"
              stroke-width="1.2"
            />
            <rect
              x="4.19989"
              y="11.0003"
              width="5.60016"
              height="1.59984"
              fill="#919EAB"
            />
            <rect
              x="4.19989"
              y="11.0003"
              width="5.60016"
              height="1.59984"
              fill="black"
              fill-opacity="0.01"
              stroke="#919EAB"
              stroke-width="1.2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.2 3.80002V7.8001H1V12.6001H2.60008V9.40018H9.80008V3.80002H8.2Z"
              fill="#919EAB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.2 3.80002V7.8001H1V12.6001H2.60008V9.40018H9.80008V3.80002H8.2Z"
              fill="black"
              fill-opacity="0.01"
              stroke="#919EAB"
              stroke-width="1.2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2001 15.8003C12.2001 13.5906 13.9907 11.7999 16.1999 11.7999C18.4094 11.7999 20.2 13.5906 20.2 15.8003C20.2 18.0095 18.4094 19.8001 16.1999 19.8001C13.9907 19.8001 12.2001 18.0095 12.2001 15.8003ZM18.6038 14.8806L17.7554 14.0322L15.9172 15.8706L14.6445 14.5979L13.7961 15.4463L15.9172 17.5679L18.6038 14.8806Z"
              fill="#919EAB"
            />
          </svg>
          <span>QR</span>
          <!-- <p>Pay with <span>QR</span></p> -->
        </a>
      </div>
      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2825 8.36919C16.9929 6.3362 22.5685 -0.929838 13.8566 0.350189C10.0621 0.87726 5.3582 3.95757 4.23534 7.79765C3.64952 6.7708 3.00311 5.77775 2.29936 4.82347C1.25393 3.50579 -0.818118 4.79264 0.343467 6.14796C3.63463 10.0257 5.91908 14.694 5.91908 19.4C6.19011 17.0658 6.63595 13.9343 5.62924 11.1483C5.99762 11.3949 6.02431 11.4134 6.28073 11.714C8.06183 14.3494 10.7977 16.5388 13.8566 17.5929C16.6444 18.6094 20.3615 18.007 18.8514 13.9411C18.0383 11.7198 16.141 9.76216 14.2825 8.36919Z"
              fill="#919EAB"
            />
          </svg>
          <span>Barter</span>
          <!-- <p>Pay with <span>Barter</span></p> -->
        </a>
      </div>

      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.844 6.76103C13.3947 6.73886 11.9819 7.21605 10.843 8.11245C10.7582 8.17804 10.6542 8.21363 10.547 8.21363C10.4399 8.21363 10.3358 8.17804 10.2511 8.11245C9.1121 7.21605 7.69934 6.73886 6.25009 6.76103C2.76203 6.81232 0 9.74403 0 13.2321V19.4072H4.27326V13.165C4.26742 12.6427 4.45538 12.1369 4.80083 11.7452C5.14627 11.3534 5.62467 11.1037 6.14355 11.0442C6.43086 11.0164 6.7208 11.049 6.99479 11.1398C7.26877 11.2307 7.52074 11.3778 7.73454 11.5717C7.94835 11.7656 8.11926 12.0021 8.23633 12.2659C8.35339 12.5298 8.41402 12.8152 8.41434 13.1038V19.4072H12.6876V13.165C12.6812 12.6432 12.8685 12.1376 13.2132 11.7459C13.5579 11.3542 14.0356 11.1042 14.5539 11.0442C14.8412 11.0164 15.131 11.049 15.4049 11.1398C15.6788 11.2307 15.9306 11.3778 16.1443 11.5718C16.3579 11.7657 16.5287 12.0022 16.6455 12.2661C16.7623 12.5299 16.8227 12.8153 16.8228 13.1038V19.4072H21.096V13.2321C21.094 9.74403 18.332 6.81232 14.844 6.76103Z"
              fill="#959EA9"
            />
            <path
              d="M4.66193 0.027591L8.21311 2.07741C8.24347 2.09462 8.26873 2.11957 8.2863 2.14973C8.30387 2.17988 8.31313 2.21416 8.31313 2.24905C8.31313 2.28395 8.30387 2.31823 8.2863 2.34838C8.26873 2.37854 8.24347 2.40349 8.21311 2.4207L4.66193 4.47052C4.63183 4.48837 4.59753 4.49789 4.56254 4.49811C4.52755 4.49832 4.49313 4.48923 4.46281 4.47177C4.43249 4.4543 4.40736 4.42908 4.39 4.3987C4.37264 4.36832 4.36368 4.33387 4.36402 4.29888V0.199232C4.36368 0.164243 4.37264 0.129792 4.39 0.099411C4.40736 0.0690299 4.43249 0.0438115 4.46281 0.0263432C4.49313 0.00887482 4.52755 -0.000215452 4.56254 3.87697e-06C4.59753 0.000223206 4.63183 0.00974391 4.66193 0.027591Z"
              fill="#959EA9"
            />
            <path
              d="M13.1413 0.0275924L16.6925 2.07742C16.7229 2.09462 16.7481 2.11958 16.7657 2.14973C16.7833 2.17988 16.7925 2.21416 16.7925 2.24906C16.7925 2.28396 16.7833 2.31823 16.7657 2.34838C16.7481 2.37854 16.7229 2.40349 16.6925 2.4207L13.1413 4.47052C13.1113 4.48787 13.0772 4.49699 13.0425 4.49695C13.0078 4.49692 12.9737 4.48773 12.9437 4.47032C12.9137 4.45292 12.8888 4.4279 12.8715 4.3978C12.8543 4.3677 12.8453 4.33358 12.8454 4.29888V0.199234C12.8453 0.164536 12.8543 0.130415 12.8715 0.100314C12.8888 0.0702131 12.9137 0.0451967 12.9437 0.0277881C12.9737 0.0103794 13.0078 0.00119404 13.0425 0.00115976C13.0772 0.00112548 13.1113 0.0102431 13.1413 0.0275924Z"
              fill="#959EA9"
            />
          </svg>
          <span>Migo</span>
          <!-- <p>Pay with <span>Migo</span></p> -->
        </a>
      </div>
      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="22"
            height="14"
            viewBox="0 0 22 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.8296 13.1187H1.19325C0.653255 13.1187 0.211426 12.6788 0.211426 12.1412V1.38889C0.211426 0.851272 0.653255 0.411392 1.19325 0.411392H20.8296C21.3696 0.411392 21.8114 0.851272 21.8114 1.38889V12.1412C21.8114 12.6788 21.3696 13.1187 20.8296 13.1187Z"
              fill="#959EA9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.8659 12.1412H3.15685C3.15685 11.066 2.27324 10.1863 1.19324 10.1863V3.34388C2.27324 3.34388 3.15685 2.46417 3.15685 1.38893H18.8659C18.8659 2.46417 19.7495 3.34388 20.8295 3.34388V10.1863C19.7495 10.1863 18.8659 11.066 18.8659 12.1412Z"
              fill="#959EA9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0114 11.1637C13.1803 11.1637 14.9386 9.19438 14.9386 6.76506C14.9386 4.33574 13.1803 2.36639 11.0114 2.36639C8.8424 2.36639 7.08411 4.33574 7.08411 6.76506C7.08411 9.19438 8.8424 11.1637 11.0114 11.1637Z"
              fill="#FBEED8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.1205 7.74256C5.66275 7.74256 6.10233 7.30492 6.10233 6.76506C6.10233 6.22521 5.66275 5.78757 5.1205 5.78757C4.57825 5.78757 4.13867 6.22521 4.13867 6.76506C4.13867 7.30492 4.57825 7.74256 5.1205 7.74256Z"
              fill="#FBEED8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.9022 7.74256C17.4445 7.74256 17.8841 7.30492 17.8841 6.76506C17.8841 6.22521 17.4445 5.78757 16.9022 5.78757C16.36 5.78757 15.9204 6.22521 15.9204 6.76506C15.9204 7.30492 16.36 7.74256 16.9022 7.74256Z"
              fill="#FBEED8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5023 6.27633H10.5205C10.2259 6.27633 10.0296 6.08082 10.0296 5.78761C10.0296 5.49435 10.226 5.29888 10.5205 5.29888H11.9932C12.2877 5.29888 12.4841 5.10336 12.4841 4.81015C12.4841 4.5169 12.2877 4.32142 11.9932 4.32142H11.5023C11.5023 4.02817 11.3059 3.8327 11.0114 3.8327C10.7169 3.8327 10.5205 4.02821 10.5205 4.32142C9.68596 4.32142 9.04779 4.95678 9.04779 5.78765C9.04779 6.61852 9.68596 7.25387 10.5205 7.25387H11.5023C11.7969 7.25387 11.9932 7.44939 11.9932 7.7426C11.9932 8.03585 11.7968 8.23133 11.5023 8.23133H10.0296C9.73507 8.23133 9.53873 8.42684 9.53873 8.72006C9.53873 9.01331 9.73511 9.20878 10.0296 9.20878H10.5205C10.5205 9.50204 10.7169 9.69751 11.0114 9.69751C11.306 9.69751 11.5023 9.50199 11.5023 9.20878C12.3368 9.20878 12.975 8.57343 12.975 7.74256C12.975 6.91169 12.3368 6.27633 11.5023 6.27633Z"
              fill="#333333"
            />
          </svg>
          <span>Card</span>
          <!-- <p>Pay with <span>Card</span></p> -->
        </a>
      </div>
      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2825 8.36919C16.9929 6.3362 22.5685 -0.929838 13.8566 0.350189C10.0621 0.87726 5.3582 3.95757 4.23534 7.79765C3.64952 6.7708 3.00311 5.77775 2.29936 4.82347C1.25393 3.50579 -0.818118 4.79264 0.343467 6.14796C3.63463 10.0257 5.91908 14.694 5.91908 19.4C6.19011 17.0658 6.63595 13.9343 5.62924 11.1483C5.99762 11.3949 6.02431 11.4134 6.28073 11.714C8.06183 14.3494 10.7977 16.5388 13.8566 17.5929C16.6444 18.6094 20.3615 18.007 18.8514 13.9411C18.0383 11.7198 16.141 9.76216 14.2825 8.36919Z"
              fill="#919EAB"
            />
          </svg>
          <span>Barter</span>
          <!-- <p>Pay with <span>Barter</span></p> -->
        </a>
      </div>

      <!-- <div class="more__payment__options">
                <p>See all payment options </p>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M-6.67572e-06 14.6323L1.37545 16L9.01776 8.34997L1.36773 0.699932L-6.67572e-06 2.06767L6.28229 8.34997L-6.67572e-06 14.6323Z"
                        fill="#F5A623" />
                </svg>
            </div> -->
    </div>
  </div>
</template>

<style scoped>
.mobile__container {
  height: 90vh;
  width: 350px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 3rem;
}

.mobile__top__wrapper {
  padding: 15px;
}

.mobile__button__wrapper {
  background-color: #fff8ed;
  margin-top: 59px;
}

.more__mobile__button__wrapper {
  background-color: #fff8ed;
  margin-top: 40px;
}

.mobile__secured__by__flutterwave {
  display: flex;
  font-family: FLW-Regular;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.3px;
  color: #8a7a5c;
}

.mobile__secured__by__flutterwave span {
  margin-left: 8px;
}

/* .payment__methods {
            display: flex;

        } */

.payment__methods span {
  margin-left: 15px;
  font-family: FLW-Regular;
  letter-spacing: 0.3px;
  font-size: 16px;
  line-height: 11px;
  color: #000000;
}

.mobile__close__button {
  color: #eb5757;
  border: none;
  font-family: FLW-Regular;
  font-size: 14px;
  line-height: 17px;
}

.mobile__close__button:focus {
  outline: none;
  box-shadow: none;
}

.mobile__display__currency__details {
  margin-bottom: 30px;
}

.mobile__display__currency__details p {
  font-family: FLW-Regular;
  font-size: 14px;
  line-height: 11px;
  color: #000000;
  text-align: center;
}

.mobile__display__currency__details span {
  font-family: FLW-Regular;
  font-size: 11px;
  line-height: 11px;
  color: #828282;
}

.select__language__option {
  margin-bottom: 30px;
}

.select__language__option p {
  font-family: FLW-Regular;
  font-size: 14px;
  line-height: 11px;
  color: #000000;
  text-align: center;
}

.switch__language__div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -12px;
}

.select__language__option span {
  font-family: FLW-Regular;
  font-size: 11px;
  line-height: 11px;
  color: #828282;
}

.switch__currency {
  color: #2d9cdb;
  font-family: FLW-Regular;
  font-size: 14px;
  line-height: 11px;
}

.payment__option__text__div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  margin-right: 30px;
}

.payment__option__text__div h1 {
  color: #333333;
  font-family: FLW-Regular;
  font-size: 20px;
  line-height: 11px;
}

.more__payment__option__text__div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  margin-right: 30px;
}

.more__payment__option__text__div h1 {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  color: #333333;
}

.mobile__select__style {
  display: block;
  width: 100%;
  max-width: 100%;
  font-size: 12px;
  font-family: FLW-Regular;
  color: #707070;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  margin: 0 10px 0 -9px;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #ffffff;
  box-sizing: border-box;
  background-image: url("../assets/img/select-option.png");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}

.mobile__select__style:focus {
  outline: none;
  box-shadow: none;
}

.mobile__select__style option {
  font-family: FLW-Regular;
  font-size: 12.3846px;
  line-height: 15px;
  color: #707070;
  /* outline: none; */
}

.payment__option__hover:hover {
  background: rgba(242, 201, 76, 0.18);
}

.secured__close__div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
}

.payment__methods__close__div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
}

.display__currency__div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.display__currency__div img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.mobile__payment__option {
  display: flex;
  align-items: center;
  padding-left: 15px;
  border-bottom: 1px solid #d8d8d8;
  height: 70px;
  text-decoration: none;
}

/* .mobile__payment__option p {
  font-size: 14px;
  line-height: 13px;
  color: #000000;
  font-family: FLW-Regular;
  margin-left: 30px;
} */

.mobile__payment__option span {
  font-family: FLW-Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 16.8px;
  line-height: 17px;
  color: #000000;
  margin-left: 30px;
}

.more__payment__options {
  display: inline-flex;
  align-items: center;
  margin: 20px 0 20px 0;
}

.more__payment__options p {
  font-family: FLW-Bold;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #f5a623;
  padding-left: 15px;
  margin-right: 10px;
}
</style>
