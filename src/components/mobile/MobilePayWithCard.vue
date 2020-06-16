<template>
  <div class="mobile__container">
    <div class="mobile__top__wrapper">
      <div class="secured__close__div">
        <div class="mobile__secured__by__flutterwave">
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

          <span
            style="font-size: 16.8px; line-height: 17px; color: #333333; font-family: FLW-Bold; margin-left: 15px;"
            >Card</span
          >
        </div>
        <span class="customer__email">tedlade.tl@gmail.com</span>
      </div>

      <div class="display__currency__div">
        <img src="../assets/img/logo.png" />
        <div class="mobile__display__currency__details">
          <p>KES 234,456</p>
          <span class="switch__currency">Switch Currency </span>
        </div>
      </div>

      <div
        style="height: 380px; background-color: #ffffff; padding: 15px; border-radius: 4px; box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);"
      >
        <div class="card__details">
          <div
            style="border-bottom: 1px solid #E4ECF3; height: 50px; margin-bottom: 30px;"
          >
            <p
              style="padding-top: 14px; font-family: FLW-Regular; font-size: 11px; line-height: 11px; color: #4D4D4D;"
            >
              Conversion Rate:
              <span
                style="font-family: FLW-Bold; font-size: 14px; line-height: 11px; color: #4D4D4D; margin-left: 2px;"
                >NGN 1 = KES 22</span
              >
            </p>
          </div>

          <div class="input-form">
            <div class="card input__icon">
              <label class="label">Card number</label>
              <input
                type="text"
                maxlength="16"
                data-mask="0000 0000 0000 0000"
                placeholder="4242 4242 4242 4242"
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
              <div class="card-item">
                <label class="label">Valid Till</label>
                <input type="text" data-mask="00 / 00" placeholder="MM / YY" />
                <img src="/assets/img/credit__card.svg" /><svg
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

              <div class="card-item input__icon">
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

          <div
            style="display:flex; flex-direction: row; justify-content: space-between;"
          >
            <span
              style="font-family: FLW-Regular;  font-size: 14px; line-height: 17px; color: #5A5A5A;"
              >Remember this card next time</span
            >
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
          </div>
          <button type="submit" class="pay__button">Pay KES 234,456</button>
        </div>
      </div>
    </div>

    <div class="more__mobile__button__wrapper">
      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9984 7.42206C14.9963 7.20272 14.9852 6.98493 14.9645 6.77053C14.8951 6.05576 14.7242 5.37061 14.4681 4.72834C14.449 4.68052 14.4314 4.63209 14.4111 4.58489C14.0699 3.77881 13.5908 3.04491 13.0043 2.41159C12.9658 2.37025 12.9266 2.32953 12.8874 2.28942C12.7767 2.17436 12.6628 2.06207 12.545 1.95441C11.2117 0.740502 9.44099 -0.000488281 7.49998 -0.000488281C5.54262 -0.000488281 3.75924 0.753767 2.42225 1.98618C2.11068 2.27338 1.8244 2.58681 1.56466 2.92244C0.584895 4.18972 0 5.7772 0 7.49949C0 11.6354 3.36469 14.9998 7.50029 14.9998C10.4093 14.9998 12.9349 13.3339 14.1781 10.9067C14.4441 10.3879 14.6511 9.83475 14.7905 9.2551C14.826 9.10795 14.8565 8.96019 14.883 8.81057C14.9586 8.38455 15 7.94649 15 7.49949C15.0003 7.47358 14.9987 7.44797 14.9984 7.42206ZM13.5868 4.42447L13.6303 4.37573C13.6873 4.48648 13.7407 4.59908 13.7916 4.71322L13.7207 4.71044L13.5868 4.72895V4.42447V4.42447ZM12.5031 3.11587L12.5043 2.78085C12.6221 2.90578 12.7357 3.03442 12.8442 3.16769L12.7091 3.36883L12.2368 3.36451L12.2072 3.2661L12.5031 3.11587ZM3.45569 2.28325V2.27061H3.60593L3.61888 2.21909H3.86475V2.32644L3.7941 2.42084H3.45538L3.45569 2.28325ZM3.6957 2.61796C3.6957 2.61796 3.84593 2.59236 3.85889 2.59236C3.87184 2.59236 3.85889 2.74229 3.85889 2.74229L3.52017 2.76357L3.45569 2.68645L3.6957 2.61796ZM14.0646 5.59519H13.5158L13.1814 5.34624L12.8294 5.38048V5.59519H12.7181L12.5978 5.50943L11.9882 5.35488V4.96001L11.2157 5.02017L10.9763 5.14881H10.6697L10.5195 5.13369L10.1471 5.34038V5.72938L9.38608 6.27849L9.44932 6.51294H9.60357L9.56315 6.73629L9.45457 6.77608L9.4487 7.35975L10.1064 8.10876H10.3927L10.41 8.0631H10.9245L11.0729 7.92582H11.3647L11.5248 8.08624L11.9598 8.13128L11.9021 8.70969L12.3849 9.56205L12.1307 10.0479L12.148 10.2768L12.3482 10.4764V11.0268L12.611 11.3803V11.8375H12.8381C11.5745 13.3889 9.65138 14.3825 7.49967 14.3825C3.70464 14.3828 0.616978 11.2948 0.616978 7.49949C0.616978 6.5441 0.813176 5.63344 1.1664 4.80577V4.59106L1.41257 4.29213C1.49802 4.13079 1.58964 3.97346 1.68743 3.82015L1.69854 3.94508L1.41288 4.29213C1.32434 4.45933 1.24167 4.63024 1.1667 4.80577V5.19755L1.45267 5.33513V5.87962L1.72692 6.34759L1.94996 6.38184L1.97865 6.22142L1.71551 5.81545L1.66399 5.42089H1.81823L1.88332 5.82686L2.26369 6.38184L2.16559 6.56107L2.40745 6.93095L3.00807 7.07964V6.98246L3.24839 7.01671L3.22556 7.18823L3.41435 7.22278L3.70588 7.30237L4.11771 7.77158L4.64368 7.81137L4.6952 8.24048L4.33519 8.49221L4.31823 8.87535L4.26671 9.1098L4.78744 9.76164L4.82723 9.98499C4.82723 9.98499 5.01603 10.0362 5.03916 10.0362C5.06199 10.0362 5.46241 10.3394 5.46241 10.3394V11.5176L5.60524 11.5577L5.50807 12.1012L5.74838 12.4217L5.70396 12.9604L6.02139 13.5184L6.42891 13.8744L6.83858 13.8818L6.87868 13.7501L6.5776 13.4965L6.59487 13.3707L6.64886 13.2164L6.66027 13.0591L6.45667 13.0529L6.35394 12.924L6.523 12.7614L6.54582 12.6386L6.35703 12.5846L6.36813 12.4705L6.63714 12.4298L7.04619 12.2333L7.18347 11.9815L7.61258 11.4324L7.5151 11.003L7.64682 10.7744L8.04138 10.7864L8.30699 10.576L8.39275 9.74745L8.68735 9.37325L8.73887 9.13294L8.47018 9.04687L8.2928 8.75597L7.68662 8.7498L7.20599 8.56655L7.18316 8.22382L7.02275 7.94341L6.58809 7.93693L6.33698 7.54268L6.11394 7.43378L6.10253 7.55409L5.69655 7.57816L5.54786 7.37116L5.12431 7.28509L4.77541 7.68829L4.2263 7.59512L4.1865 6.97629L3.78577 6.90781L3.9465 6.60426L3.90053 6.42996L3.37394 6.78195L3.04263 6.74153L2.92447 6.48271L2.99666 6.21587L3.17929 5.87931L3.59976 5.66645L4.4117 5.66614L4.40954 5.91386L4.70137 6.04959L4.67823 5.62635L4.88862 5.41472L5.3131 5.13585L5.3421 4.93965L5.76535 4.49913L6.21543 4.24987L6.17564 4.21717L6.48042 3.93028L6.5921 3.95989L6.64331 4.02406L6.75899 3.89573L6.78737 3.88308L6.66058 3.86518L6.53194 3.8223V3.69891L6.60012 3.64307H6.75035L6.81915 3.6733L6.87868 3.79362L6.95149 3.78251V3.77202L6.97246 3.77912L7.18347 3.74673L7.21339 3.64369L7.3337 3.67392V3.78559L7.22203 3.86241H7.22234L7.23869 3.98488L7.62091 4.10272C7.62091 4.10272 7.62122 4.10426 7.62183 4.10735L7.70975 4.09994L7.71561 3.93429L7.41268 3.79639L7.3954 3.7168L7.64682 3.63104L7.65793 3.39042L7.39509 3.23031L7.37782 2.82465L7.0175 3.00172H6.88609L6.92064 2.69293L6.43014 2.57724L6.22716 2.73056V3.19823L5.86221 3.31392L5.71599 3.6187L5.55743 3.64431V3.25438L5.21439 3.20687L5.04287 3.0952L4.97376 2.84254L5.58735 2.48346L5.88751 2.39215L5.91774 2.5939L6.08494 2.58526L6.0979 2.48377L6.27281 2.45878L6.2759 2.42331L6.20063 2.39215L6.18335 2.2848L6.39837 2.2666L6.52824 2.13148L6.53534 2.12161L6.53688 2.12222L6.57636 2.0815L7.0283 2.02443L7.2282 2.1941L6.70408 2.47328L7.37103 2.63061L7.45741 2.40758H7.74893L7.85197 2.21323L7.6459 2.16171V1.91584L6.99961 1.62957L6.55354 1.68108L6.30181 1.81281L6.31908 2.13302L6.05594 2.09292L6.01553 1.91584L6.26757 1.68695L5.81008 1.66412L5.67866 1.70391L5.62159 1.85816L5.79311 1.88715L5.75887 2.05867L5.46735 2.07595L5.42169 2.19009L4.99875 2.20181C4.99875 2.20181 4.98703 1.96181 4.97006 1.96181C4.9531 1.96181 5.30169 1.95595 5.30169 1.95595L5.55372 1.70977L5.41614 1.64098L5.2332 1.81867L4.92965 1.80139L4.74672 1.54967H4.35771L3.95174 1.85291H4.32378L4.35771 1.96181L4.26116 2.05158L4.67299 2.06299L4.73592 2.21168L4.27226 2.19441L4.24974 2.07996L3.95822 2.01703L3.80367 1.93127L3.45662 1.93404C4.59278 1.10637 5.98993 0.616489 7.49998 0.616489C9.24047 0.616489 10.8307 1.26709 12.044 2.33601L11.9623 2.48223L11.6448 2.60655L11.511 2.75185L11.5418 2.92121L11.7056 2.94404L11.8043 3.19083L12.0869 3.077L12.1335 3.40708H12.0483L11.8164 3.37284L11.5591 3.41602L11.3101 3.7677L10.9541 3.82354L10.9026 4.12833L11.0528 4.1638L11.0093 4.35969L10.6558 4.28874L10.3316 4.35969L10.2628 4.54016L10.319 4.91898L10.5093 5.00814L10.8286 5.00628L11.0442 4.98685L11.1099 4.81533L11.4468 4.37758L11.6686 4.42293L11.887 4.2255L11.9277 4.37974L12.4651 4.74222L12.3994 4.83045L12.1572 4.81749L12.2504 4.94952L12.3994 4.98222L12.574 4.90942L12.5703 4.69903L12.6477 4.66016L12.5854 4.59414L12.227 4.39424L12.1326 4.12863H12.4306L12.5259 4.22303L12.7825 4.44422L12.7933 4.71168L13.0593 4.99487L13.1583 4.60679L13.3424 4.50622L13.377 4.82366L13.5568 5.02109L13.9156 5.01492C13.985 5.19354 14.0473 5.37524 14.1019 5.56064L14.0646 5.59519ZM4.09087 3.40708L4.27103 3.32132L4.43391 3.36019L4.37776 3.57891L4.20193 3.63474L4.09087 3.40708ZM5.04688 3.92195V4.06354H4.63535L4.48111 4.02066L4.51967 3.92195L4.71741 3.8402H4.98765V3.92195H5.04688ZM5.23629 4.11938V4.25666L5.13325 4.32298L5.00492 4.34674C5.00492 4.34674 5.00492 4.14097 5.00492 4.11938H5.23629ZM5.1203 4.06354V3.90035L5.26189 4.0293L5.1203 4.06354ZM5.18477 4.39363V4.5272L5.08636 4.62592H4.86765L4.90189 4.47599L5.00523 4.46705L5.02652 4.41553L5.18477 4.39363ZM4.63998 4.11938H4.86734L4.57581 4.52689L4.4555 4.46242L4.48142 4.2909L4.63998 4.11938ZM5.571 4.34674V4.48H5.35228L5.29243 4.39363V4.26961H5.30971L5.571 4.34674ZM5.36894 4.16349L5.43125 4.09809L5.53645 4.16349L5.45223 4.2329L5.36894 4.16349ZM14.1763 5.94255L14.1979 5.91725C14.2068 5.95612 14.2164 5.99499 14.225 6.03448L14.1763 5.94255Z"
              fill="#858585"
            />
          </svg>
          <p
            style="text-align: center; font-family: FLW-Regular; margin-left: 8px; font-size: 13px; line-height: 16px; color: #707070;"
          >
            ENGLISH (CHANGE)
          </p>
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
            <g clip-path="url(#clip0)">
              <path
                d="M8.65731 17.292C11.5391 17.9282 14.5094 16.6822 16.0747 14.1804L15.1661 13.6135C13.4442 16.3737 9.81082 17.2154 7.05067 15.4935C5.23386 14.3602 4.17527 12.3302 4.28574 10.1918L5.8983 11.6681L6.62209 10.8782L4.25018 8.70606C4.03209 8.50627 3.69326 8.52096 3.49331 8.73914L1.3212 11.1111L2.11112 11.835L3.20843 10.6378C3.27699 13.8455 5.52618 16.5922 8.65731 17.292Z"
                fill="black"
                fill-opacity="0.4"
              />
              <path
                d="M13.7074 10.1068L16.0793 12.2789C16.2973 12.4788 16.6362 12.464 16.8361 12.2459L19.0083 9.87387L18.2183 9.15008L17.121 10.3473C17.0437 6.5037 13.8652 3.45053 10.0216 3.52784C7.66896 3.57514 5.49966 4.80784 4.25474 6.80449L5.16342 7.37141C6.88528 4.61126 10.5186 3.76956 13.2788 5.49142C15.0956 6.62474 16.1542 8.65474 16.0437 10.7933L14.4312 9.31681L13.7074 10.1068Z"
                fill="black"
                fill-opacity="0.4"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="17"
                  height="17"
                  fill="white"
                  transform="translate(20.2765 3.99979) rotate(102.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <p
            style="font-size: 14px; margin-left: 7px; line-height: 17px; color: #F5A623;"
          >
            Change payment method
          </p>
        </a>
      </div>

      <div class="payment__option__hover ">
        <a href="#" class="mobile__payment__option">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M5.88439 5.0009L9.81676 1.06853C10.0611 0.824421 10.0611 0.428349 9.81676 0.184243C9.57245 -0.0600715 9.17679 -0.0600715 8.93248 0.184243L5.0001 4.11662L1.06752 0.184243C0.823206 -0.0600715 0.42755 -0.0600715 0.183236 0.184243C-0.0610786 0.428349 -0.0610786 0.824421 0.183236 1.06853L4.11582 5.0009L0.183236 8.93328C-0.0610786 9.17738 -0.0610786 9.57346 0.183236 9.81756C0.305393 9.93951 0.46549 10.0006 0.625378 10.0006C0.785266 10.0006 0.945363 9.93951 1.06752 9.81736L5.0001 5.88498L8.93248 9.81736C9.05464 9.93951 9.21473 10.0006 9.37462 10.0006C9.53451 10.0006 9.69461 9.93951 9.81676 9.81736C10.0611 9.57325 10.0611 9.17718 9.81676 8.93307L5.88439 5.0009Z"
                fill="black"
                fill-opacity="0.4"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="10" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p
            style="font-size: 14px; margin-left: 7px; line-height: 17px; color: #C5C5C5;"
          >
            Cancel payment
          </p>
        </a>
      </div>
      <!-- <div class="payment__option__hover ">
                <a href="#" class="mobile__payment__option">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.2825 8.36919C16.9929 6.3362 22.5685 -0.929838 13.8566 0.350189C10.0621 0.87726 5.3582 3.95757 4.23534 7.79765C3.64952 6.7708 3.00311 5.77775 2.29936 4.82347C1.25393 3.50579 -0.818118 4.79264 0.343467 6.14796C3.63463 10.0257 5.91908 14.694 5.91908 19.4C6.19011 17.0658 6.63595 13.9343 5.62924 11.1483C5.99762 11.3949 6.02431 11.4134 6.28073 11.714C8.06183 14.3494 10.7977 16.5388 13.8566 17.5929C16.6444 18.6094 20.3615 18.007 18.8514 13.9411C18.0383 11.7198 16.141 9.76216 14.2825 8.36919Z"
                            fill="#919EAB" />
                    </svg>
        
                    <p>Pay with <span>Barter</span></p>
                </a>
            </div> -->
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Flutterwave";
  src: url(assets/Flutterwave/Flutterwave/OpenType-TT/Flutterwave-Black.ttf)
    format("truetype");
}

@font-face {
  font-family: "Flw-black-italic";
  src: url(assets/Flutterwave/Flutterwave/OpenType-TT/FLW-Black-Italic.ttf)
    format("truetype");
}

@font-face {
  font-family: "FLW-Bold-Italic";
  src: url(assets/Flutterwave/Flutterwave/OpenType-TT/FLW-Bold-Italic.ttf)
    format("truetype");
}

@font-face {
  font-family: "FLW-Bold";
  src: url(assets/Flutterwave/Flutterwave/OpenType-TT/FLW-Bold.ttf)
    format("truetype");
}

@font-face {
  font-family: "FLW-Regular";
  src: url(assets/Flutterwave/Flutterwave/OpenType-TT/FLW-Regular.ttf)
    format("truetype");
}

@font-face {
  font-family: "FLW-Italic";
  src: url(assets/Flutterwave/Flutterwave/OpenType-TT/FLW-Italic.ttf)
    format("truetype");
}

.mobile__container {
  height: 92vh;
  width: 350px;
  background-color: #fff8ed;
  margin: 0 auto;
  margin-top: 3rem;
}

.mobile__top__wrapper {
  padding: 15px;
}

.mobile__button__wrapper {
  /* background-color: #fff8ed; */
  margin-top: 59px;
}

.mobile__secured__by__flutterwave {
  display: flex;
  font-family: FLW-Regular;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.3px;
  color: #8a7a5c;
}

.customer__email {
  font-family: FLW-Regular;
  font-size: 11px;
  line-height: 11px;
  color: #828282;
}

/* .mobile__secured__by__flutterwave span {
             font-family: FLW-Regular;
            font-size: 11px;
            line-height: 11px;
            color: #828282;
        } */

/* .mobile__close__button {
             font-family: FLW-Regular;
            font-size: 11px;
            line-height: 11px;
            color: #828282;
        }
    
        .mobile__close__button:focus {
            outline: none;
            box-shadow: none;
        } */

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

/* .mobile__display__currency__details span {
            font-family: FLW-Regular;
            font-size: 11px;
            line-height: 11px;
            color: #828282;
        } */

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
  justify-content: center;
  align-items: center;
  /* padding-left: 15px; */
  border-bottom: 1px solid #d8d8d8;
  height: 70px;
  text-decoration: none;
}

.mobile__payment__option p {
  font-size: 14px;
  line-height: 13px;
  color: #000000;
  font-family: FLW-Regular;
  /* margin-left: 30px; */
}

.mobile__payment__option p span {
  font-family: FLW-Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 16.8px;
  line-height: 17px;
  color: #000000;
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

.input__icon input {
  padding-left: 40px;
}

.input__icon {
  position: relative;
}

/* .input__icon i { 
    color: #D2DCE8;
    position: absolute; 
    left: 0;
    top: 25px;
    padding: 9px 9px;
}  */

.input__icon svg {
  color: #d2dce8;
  position: absolute;
  left: 0;
  top: 26px;
  padding: 9px 9px;
}

.input__icon svg {
  color: #d2dce8;
  position: absolute;
  left: 0;
  top: 26px;
  padding: 9px 9px;
}

.label {
  font-family: FLW-Regular;
  font-size: 10px;
  line-height: 9px;
  color: #919dab;
  text-transform: uppercase;
}

.card__details input {
  margin: 0.3rem 0;
  width: 100%;
  border: none;
  border-bottom: 1px solid gainsboro;
  font-size: 1rem;
  padding: 10px;
}

.label {
  font-family: FLW-Regular;
  font-size: 10px;
  line-height: 9px;
  color: #919dab;
  text-transform: uppercase;
}

input::placeholder {
  font-family: FLW-Regular;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.72px;
  color: #828282;
}

input:focus {
  outline: none;
}

.form__control {
  margin-bottom: 15px;
}

.form__row {
  display: flex;
  flex-direction: row;
}

.card__exp__cvv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-item {
  width: 100%;
}

.input__icon input {
  padding-left: 40px;
}

.input__icon {
  position: relative;
}

/* .input__icon i { 
    color: #D2DCE8;
    position: absolute; 
    left: 0;
    top: 25px;
    padding: 9px 9px;
}  */

.input__icon svg {
  color: #d2dce8;
  position: absolute;
  left: 0;
  top: 26px;
  padding: 9px 9px;
}

.input__icon svg {
  color: #d2dce8;
  position: absolute;
  left: 0;
  top: 26px;
  padding: 9px 9px;
}

.pay__button {
  background-color: #f5a623;
  width: 100%;
  height: 42px;
  display: block;
  border: none;
  border-radius: 5px;
  padding: 14px 28px;
  /* margin-top: 30px; */
  cursor: pointer;
  font-family: FLW-Regular;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
}

.switch {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 23px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: -6px;
  left: 3px;
  right: -3px;
  bottom: -1px;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #e4ecf3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #e4ecf3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
