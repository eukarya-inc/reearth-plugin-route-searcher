reearth.ui.show(`
<style>
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  body {
    margin: 0;
    height: auto;
    width: 100%;
    overflow: hidden;
    color: white;
    font-family: "Noto Sans";
    font-size: 12px;
  }

  #wrapper {
    height: auto;
    max-height: 500px;
    border-radius: 5px;
  }

  #header {
    height: 44px;
    position: relative;
    overflow: hidden;
    font-family: "Roboto";
    font-style: normal;
    font-size: 14px;
    border-radius: 5px;
    background: #141414;
  }

  #header div {
    display: inline-block;
  }

  #plugin-icon-div {
    width: 44px;
    height: 44px;
    position: relative;
  }

  #plugin-icon {
    padding-left: 12px;
    padding-top: 12px;
  }

  #close-plugin-btn {
    float: right;
    padding-top: 10px;
    padding-right: 12px;
  }

  .vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  #container {
    margin: 8px;
    padding-bottom: 7px;
    border-radius: 4px;
    height: auto;
  }

  #content {
    height: auto;
    min-height: 85px;
    background-color: #141414;
    border-radius: 4px;
    margin: 10px;
  }

  .cursor-btn {
    cursor: pointer;
  }

  /**/
  .search-row {
    height: 40px;
  }

  .search-input-div {
    float: right;
    width: 175px;
    height: 26px;
    border: 1px solid #C7C5C5;
    background-color: #141414;
    display: inline-block;
  }

  .marker-svg {
    position: absolute;
    margin-top: 5px;
    margin-left: 150px;
  }


  .coordinate-input {
    border: none;
    width: 150px;
    height: 24px;
    color: #BFBFBF;
    background-color: #141414;
    padding-left: 5px;
  }

  .coordinate-input::placeholder {
    font-size: 12px;
    padding-left: 4px;
  }

  .coordinate-input:focus {
    outline: none;
  }

  .coordinate-input:-webkit-autofill {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #BFBFBF;
  }

  #search-btn {
    float: right;
    width: 135px;
    height: 30px;
    background-color: #3B3CD0;
    color: #FFFFFF;
    border-radius: 4px;
    border: none;
  }

  #delete-btn {
    float: left;
    width: 135px;
    height: 30px;
    background-color: transparent;
    color: #3B3CD0;
    border-radius: 4px;
    border: 1px solid #3B3CD0;
  }

  .export-btn {
    width: 100%;
    height: 30px;
    background-color: #3B3CD0;
    color: #FFFFFF;
    border-radius: 4px;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .export-btn-inactive {
    width: 100%;
    height: 30px;
    background-color: transparent;
    color: #3B3CD0;
    border: 1px solid #3B3CD0; 
    border-radius: 4px;
    margin-bottom: 10px;
    cursor: not-allowed;
  }

  .btn-group {
    margin-bottom: 10px;
    height: 30px;
  }

  .license {
    height: 11px;
    color: #4A4A4A;
    text-align: right;
    font-size: 8px;
    line-height: 11px;
    margin-bottom: 12px;
  }

  .transportation-div {
    height: 50px;
    background-color: #262626;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    display: none;
  }

  .transport-type span {
    position: absolute;
    margin-top: 4px;
    padding-left: 4px;
  }

  .duration-display {
    float: right;
    padding-top: 2px;
  }

  .distance-display {
    float: right;
    padding-top: 3px;
  }
</style>
<div id="wrapper">
  <div id="header">
    <div class="cursor-btn" id="plugin-icon-div" onclick="openClosePlugin()">
      <svg width="20" id="plugin-icon" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.9244 12.7391C16.2422 12.7398 15.5795 12.9706 15.04 13.3955C14.5006 13.8203 14.1149 14.4152 13.9434 15.087H4.61574C3.79963 15.087 3.01694 14.7571 2.43986 14.1701C1.86278 13.583 1.53858 12.7868 1.53858 11.9565C1.53858 11.1263 1.86278 10.33 2.43986 9.74297C3.01694 9.1559 3.79963 8.82609 4.61574 8.82609H13.8472C14.8674 8.82609 15.8457 8.41382 16.5671 7.67998C17.2884 6.94615 17.6937 5.95085 17.6937 4.91304C17.6937 3.87524 17.2884 2.87994 16.5671 2.1461C15.8457 1.41227 14.8674 1 13.8472 1H4.61574C4.41171 1 4.21604 1.08245 4.07177 1.22922C3.9275 1.37599 3.84645 1.57505 3.84645 1.78261C3.84645 1.99017 3.9275 2.18923 4.07177 2.336C4.21604 2.48276 4.41171 2.56522 4.61574 2.56522H13.8472C14.4593 2.56522 15.0463 2.81258 15.4791 3.25288C15.9119 3.69318 16.1551 4.29036 16.1551 4.91304C16.1551 5.53573 15.9119 6.1329 15.4791 6.57321C15.0463 7.01351 14.4593 7.26087 13.8472 7.26087H4.61574C3.39157 7.26087 2.21754 7.75559 1.35192 8.63619C0.4863 9.5168 0 10.7112 0 11.9565C0 13.2019 0.4863 14.3962 1.35192 15.2768C2.21754 16.1575 3.39157 16.6522 4.61574 16.6522H13.9434C14.0873 17.219 14.3845 17.7335 14.8013 18.1371C15.2182 18.5407 15.7379 18.8173 16.3015 18.9355C16.8651 19.0537 17.45 19.0088 17.9898 18.8058C18.5296 18.6028 19.0026 18.2499 19.3551 17.7872C19.7076 17.3244 19.9255 16.7704 19.984 16.188C20.0426 15.6056 19.9394 15.0182 19.6863 14.4925C19.4331 13.9667 19.0401 13.5237 18.5519 13.2138C18.0637 12.9039 17.4999 12.7394 16.9244 12.7391ZM16.9244 17.4348C16.6201 17.4348 16.3226 17.343 16.0696 17.171C15.8166 16.999 15.6194 16.7546 15.5029 16.4685C15.3865 16.1825 15.356 15.8678 15.4154 15.5642C15.4747 15.2606 15.6213 14.9817 15.8364 14.7628C16.0516 14.5439 16.3258 14.3948 16.6242 14.3344C16.9227 14.274 17.232 14.305 17.5132 14.4235C17.7943 14.542 18.0346 14.7426 18.2037 15C18.3727 15.2574 18.463 15.56 18.463 15.8696C18.463 16.2847 18.3009 16.6828 18.0123 16.9763C17.7238 17.2699 17.3324 17.4348 16.9244 17.4348Z"
          fill="#BFBFBF" />
      </svg>
    </div>
    <div class="vertical-center" id="plugin-title">
      Route Searcher
    </div>

    <span class="cursor-btn" id="close-plugin-btn" onclick="openClosePlugin()">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.625 4.375L4.375 15.625" stroke="#595959" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M15.625 15.625L4.375 4.375" stroke="#595959" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </span>
  </div>
  <div id="container">
    <input type="hidden" id="data-store" data-markerlayerid="" />
    <div id="content">
      <div id="search-box">
        <div class="search-row">
          <label class="common-text">Start Point</label>
          <div class="search-input-div">
            <span class="cursor-btn marker-svg " onclick="placePointOnMap('startPoint', this)">
              <svg id="start-point-icon" width="14" height="14" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.47949 12.6875C2.47949 12.3653 2.74066 12.1041 3.06283 12.1041H10.9378C11.26 12.1041 11.5212 12.3653 11.5212 12.6875C11.5212 13.0096 11.26 13.2708 10.9378 13.2708H3.06283C2.74066 13.2708 2.47949 13.0096 2.47949 12.6875Z"
                  fill="#C7C5C5" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.00033 4.52079C6.35599 4.52079 5.83366 5.04313 5.83366 5.68746C5.83366 6.33179 6.35599 6.85413 7.00033 6.85413C7.64466 6.85413 8.16699 6.33179 8.16699 5.68746C8.16699 5.04313 7.64466 4.52079 7.00033 4.52079ZM4.66699 5.68746C4.66699 4.39879 5.71166 3.35413 7.00033 3.35413C8.28899 3.35413 9.33366 4.39879 9.33366 5.68746C9.33366 6.97612 8.28899 8.02079 7.00033 8.02079C5.71166 8.02079 4.66699 6.97612 4.66699 5.68746Z"
                  fill="#C7C5C5" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.00033 1.89579C5.99471 1.89579 5.03029 2.29527 4.31921 3.00635C3.60814 3.71742 3.20866 4.68185 3.20866 5.68746C3.20866 7.44618 4.19265 9.06184 5.25301 10.2813C5.77607 10.8828 6.30062 11.3681 6.69453 11.703C6.80895 11.8002 6.91199 11.8845 7.00032 11.9549C7.08866 11.8845 7.1917 11.8002 7.30612 11.703C7.70003 11.3681 8.22458 10.8828 8.74764 10.2813C9.808 9.06184 10.792 7.44618 10.792 5.68746C10.792 4.68185 10.3925 3.71742 9.68144 3.00635C8.97036 2.29527 8.00594 1.89579 7.00033 1.89579ZM7.00033 12.6875C6.66581 13.1653 6.66565 13.1652 6.66547 13.1651L6.66388 13.164L6.66036 13.1615L6.64865 13.1532C6.6388 13.1461 6.62491 13.1361 6.60725 13.1233C6.57194 13.0975 6.5215 13.0601 6.45811 13.0116C6.33139 12.9148 6.15255 12.7735 5.93894 12.5919C5.51253 12.2294 4.94333 11.7031 4.37264 11.0468C3.2455 9.75058 2.04199 7.86624 2.04199 5.68746C2.04199 4.37243 2.56439 3.11126 3.49425 2.18139C4.42412 1.25152 5.68529 0.729126 7.00033 0.729126C8.31536 0.729126 9.57653 1.25152 10.5064 2.18139C11.4363 3.11126 11.9587 4.37243 11.9587 5.68746C11.9587 7.86624 10.7552 9.75058 9.62801 11.0468C9.05732 11.7031 8.48812 12.2294 8.06171 12.5919C7.84811 12.7735 7.66926 12.9148 7.54254 13.0116C7.47915 13.0601 7.42871 13.0975 7.3934 13.1233C7.37574 13.1361 7.36185 13.1461 7.352 13.1532L7.3403 13.1615L7.33678 13.164L7.33561 13.1648C7.33544 13.1649 7.33485 13.1653 7.00033 12.6875ZM7.00033 12.6875L7.33485 13.1653C7.13399 13.3059 6.86633 13.3057 6.66547 13.1651L7.00033 12.6875Z"
                  fill="#C7C5C5" />
              </svg>
            </span>
            <input type="text" id="start-point-input" class="coordinate-input" placeholder="Input or click on map">
          </div>
        </div>

        <div class="search-row">
          <label class="common-text">End Point</label>
          <div class="search-input-div">
            <span class="cursor-btn marker-svg" onclick="placePointOnMap('endPoint', this)">
              <svg id="end-point-icon" width="14" height="14" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.47949 12.6875C2.47949 12.3653 2.74066 12.1041 3.06283 12.1041H10.9378C11.26 12.1041 11.5212 12.3653 11.5212 12.6875C11.5212 13.0096 11.26 13.2708 10.9378 13.2708H3.06283C2.74066 13.2708 2.47949 13.0096 2.47949 12.6875Z"
                  fill="#C7C5C5" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.00033 4.52079C6.35599 4.52079 5.83366 5.04313 5.83366 5.68746C5.83366 6.33179 6.35599 6.85413 7.00033 6.85413C7.64466 6.85413 8.16699 6.33179 8.16699 5.68746C8.16699 5.04313 7.64466 4.52079 7.00033 4.52079ZM4.66699 5.68746C4.66699 4.39879 5.71166 3.35413 7.00033 3.35413C8.28899 3.35413 9.33366 4.39879 9.33366 5.68746C9.33366 6.97612 8.28899 8.02079 7.00033 8.02079C5.71166 8.02079 4.66699 6.97612 4.66699 5.68746Z"
                  fill="#C7C5C5" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.00033 1.89579C5.99471 1.89579 5.03029 2.29527 4.31921 3.00635C3.60814 3.71742 3.20866 4.68185 3.20866 5.68746C3.20866 7.44618 4.19265 9.06184 5.25301 10.2813C5.77607 10.8828 6.30062 11.3681 6.69453 11.703C6.80895 11.8002 6.91199 11.8845 7.00032 11.9549C7.08866 11.8845 7.1917 11.8002 7.30612 11.703C7.70003 11.3681 8.22458 10.8828 8.74764 10.2813C9.808 9.06184 10.792 7.44618 10.792 5.68746C10.792 4.68185 10.3925 3.71742 9.68144 3.00635C8.97036 2.29527 8.00594 1.89579 7.00033 1.89579ZM7.00033 12.6875C6.66581 13.1653 6.66565 13.1652 6.66547 13.1651L6.66388 13.164L6.66036 13.1615L6.64865 13.1532C6.6388 13.1461 6.62491 13.1361 6.60725 13.1233C6.57194 13.0975 6.5215 13.0601 6.45811 13.0116C6.33139 12.9148 6.15255 12.7735 5.93894 12.5919C5.51253 12.2294 4.94333 11.7031 4.37264 11.0468C3.2455 9.75058 2.04199 7.86624 2.04199 5.68746C2.04199 4.37243 2.56439 3.11126 3.49425 2.18139C4.42412 1.25152 5.68529 0.729126 7.00033 0.729126C8.31536 0.729126 9.57653 1.25152 10.5064 2.18139C11.4363 3.11126 11.9587 4.37243 11.9587 5.68746C11.9587 7.86624 10.7552 9.75058 9.62801 11.0468C9.05732 11.7031 8.48812 12.2294 8.06171 12.5919C7.84811 12.7735 7.66926 12.9148 7.54254 13.0116C7.47915 13.0601 7.42871 13.0975 7.3934 13.1233C7.37574 13.1361 7.36185 13.1461 7.352 13.1532L7.3403 13.1615L7.33678 13.164L7.33561 13.1648C7.33544 13.1649 7.33485 13.1653 7.00033 12.6875ZM7.00033 12.6875L7.33485 13.1653C7.13399 13.3059 6.86633 13.3057 6.66547 13.1651L7.00033 12.6875Z"
                  fill="#C7C5C5" />
              </svg>
            </span>
            <input type="text" id="end-point-input" class="coordinate-input" placeholder="Input or click on map">
          </div>
        </div>

        <div class="btn-group">
          <button id="delete-btn" class="cursor-btn" onclick="deleteAll()"> Delete </button>
          <button id="search-btn" class="cursor-btn" onclick="search()"> Search </button>
        </div>
        <div>
          <button class="export-btn-inactive" id="export-route-btn" onclick="exportRoute()" disabled> Export </button>
        </div>
      </div>

      <div class="transportation-div cursor-btn" id="driving-type" onclick="highlightRoute('car')" data-type="car">
        <div>
          <span class="transport-type">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.5 10.5H21.4875L18.8831 4.64062C18.7653 4.37553 18.5731 4.15029 18.3298 3.99222C18.0865 3.83414 17.8026 3.75 17.5125 3.75H6.4875C6.19738 3.75 5.91349 3.83414 5.67022 3.99222C5.42695 4.15029 5.23474 4.37553 5.11688 4.64062L2.5125 10.5H1.5C1.30109 10.5 1.11032 10.579 0.96967 10.7197C0.829018 10.8603 0.75 11.0511 0.75 11.25C0.75 11.4489 0.829018 11.6397 0.96967 11.7803C1.11032 11.921 1.30109 12 1.5 12H2.25V19.5C2.25 19.8978 2.40804 20.2794 2.68934 20.5607C2.97064 20.842 3.35218 21 3.75 21H6C6.39782 21 6.77936 20.842 7.06066 20.5607C7.34196 20.2794 7.5 19.8978 7.5 19.5V18H16.5V19.5C16.5 19.8978 16.658 20.2794 16.9393 20.5607C17.2206 20.842 17.6022 21 18 21H20.25C20.6478 21 21.0294 20.842 21.3107 20.5607C21.592 20.2794 21.75 19.8978 21.75 19.5V12H22.5C22.6989 12 22.8897 11.921 23.0303 11.7803C23.171 11.6397 23.25 11.4489 23.25 11.25C23.25 11.0511 23.171 10.8603 23.0303 10.7197C22.8897 10.579 22.6989 10.5 22.5 10.5ZM6.4875 5.25H17.5125L19.8459 10.5H4.15406L6.4875 5.25ZM6 19.5H3.75V18H6V19.5ZM18 19.5V18H20.25V19.5H18ZM20.25 16.5H3.75V12H20.25V16.5ZM5.25 14.25C5.25 14.0511 5.32902 13.8603 5.46967 13.7197C5.61032 13.579 5.80109 13.5 6 13.5H7.5C7.69891 13.5 7.88968 13.579 8.03033 13.7197C8.17098 13.8603 8.25 14.0511 8.25 14.25C8.25 14.4489 8.17098 14.6397 8.03033 14.7803C7.88968 14.921 7.69891 15 7.5 15H6C5.80109 15 5.61032 14.921 5.46967 14.7803C5.32902 14.6397 5.25 14.4489 5.25 14.25ZM15.75 14.25C15.75 14.0511 15.829 13.8603 15.9697 13.7197C16.1103 13.579 16.3011 13.5 16.5 13.5H18C18.1989 13.5 18.3897 13.579 18.5303 13.7197C18.671 13.8603 18.75 14.0511 18.75 14.25C18.75 14.4489 18.671 14.6397 18.5303 14.7803C18.3897 14.921 18.1989 15 18 15H16.5C16.3011 15 16.1103 14.921 15.9697 14.7803C15.829 14.6397 15.75 14.4489 15.75 14.25Z"
                fill="white"></path>
            </svg>
            <span>Driving</span>
          </span>
          <span class="duration-display">0 km</span>
        </div>
        <div>
          <span class="distance-display">0 h 0 m</span>
        </div>
      </div>

      <div class="transportation-div cursor-btn" id="cycling-type" onclick="highlightRoute('bike')" data-type="bike">
        <div>
          <span class="transport-type">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
              <path
                d="M14.375 5.5C14.8942 5.5 15.4017 5.34605 15.8334 5.05761C16.2651 4.76917 16.6015 4.3592 16.8002 3.87954C16.9989 3.39989 17.0508 2.87209 16.9496 2.36289C16.8483 1.85369 16.5983 1.38596 16.2312 1.01885C15.864 0.651733 15.3963 0.401726 14.8871 0.30044C14.3779 0.199154 13.8501 0.251137 13.3705 0.449817C12.8908 0.648497 12.4808 0.98495 12.1924 1.41663C11.904 1.84831 11.75 2.35583 11.75 2.875C11.75 3.57119 12.0266 4.23887 12.5188 4.73116C13.0111 5.22344 13.6788 5.5 14.375 5.5ZM14.375 1.75C14.5975 1.75 14.815 1.81598 15 1.9396C15.185 2.06321 15.3292 2.23892 15.4144 2.44448C15.4995 2.65005 15.5218 2.87625 15.4784 3.09448C15.435 3.31271 15.3278 3.51316 15.1705 3.6705C15.0132 3.82783 14.8127 3.93498 14.5945 3.97838C14.3762 4.02179 14.1501 3.99951 13.9445 3.91437C13.7389 3.82922 13.5632 3.68502 13.4396 3.50002C13.316 3.31501 13.25 3.09751 13.25 2.875C13.25 2.57663 13.3685 2.29048 13.5795 2.07951C13.7905 1.86853 14.0766 1.75 14.375 1.75ZM17.75 10.75C17.0083 10.75 16.2833 10.9699 15.6666 11.382C15.0499 11.794 14.5693 12.3797 14.2855 13.0649C14.0016 13.7502 13.9274 14.5042 14.0721 15.2316C14.2168 15.959 14.5739 16.6272 15.0984 17.1517C15.6228 17.6761 16.291 18.0333 17.0184 18.1779C17.7458 18.3226 18.4998 18.2484 19.1851 17.9645C19.8703 17.6807 20.456 17.2001 20.868 16.5834C21.2801 15.9667 21.5 15.2417 21.5 14.5C21.5 13.5054 21.1049 12.5516 20.4017 11.8484C19.6984 11.1451 18.7446 10.75 17.75 10.75ZM17.75 16.75C17.305 16.75 16.87 16.618 16.5 16.3708C16.13 16.1236 15.8416 15.7722 15.6713 15.361C15.501 14.9499 15.4564 14.4975 15.5432 14.061C15.6301 13.6246 15.8443 13.2237 16.159 12.909C16.4737 12.5943 16.8746 12.38 17.311 12.2932C17.7475 12.2064 18.1999 12.251 18.611 12.4213C19.0222 12.5916 19.3736 12.88 19.6208 13.25C19.868 13.62 20 14.055 20 14.5C20 15.0967 19.7629 15.669 19.341 16.091C18.919 16.5129 18.3467 16.75 17.75 16.75ZM4.25 10.75C3.50832 10.75 2.7833 10.9699 2.16661 11.382C1.54993 11.794 1.06928 12.3797 0.785453 13.0649C0.501625 13.7502 0.427362 14.5042 0.572057 15.2316C0.716751 15.959 1.0739 16.6272 1.59835 17.1517C2.1228 17.6761 2.79098 18.0333 3.51841 18.1779C4.24584 18.3226 4.99984 18.2484 5.68506 17.9645C6.37029 17.6807 6.95596 17.2001 7.36801 16.5834C7.78007 15.9667 8 15.2417 8 14.5C8 14.0075 7.90301 13.5199 7.71455 13.0649C7.52609 12.61 7.24987 12.1966 6.90165 11.8484C6.55343 11.5001 6.14004 11.2239 5.68506 11.0355C5.23009 10.847 4.74246 10.75 4.25 10.75ZM4.25 16.75C3.80499 16.75 3.36998 16.618 2.99997 16.3708C2.62996 16.1236 2.34157 15.7722 2.17127 15.361C2.00098 14.9499 1.95642 14.4975 2.04323 14.061C2.13005 13.6246 2.34434 13.2237 2.65901 12.909C2.97368 12.5943 3.37459 12.38 3.81105 12.2932C4.24751 12.2064 4.69991 12.251 5.11104 12.4213C5.52217 12.5916 5.87358 12.88 6.12081 13.25C6.36804 13.62 6.5 14.055 6.5 14.5C6.5 15.0967 6.26295 15.669 5.84099 16.091C5.41904 16.5129 4.84674 16.75 4.25 16.75ZM17 9.25H13.25C13.1515 9.25008 13.0539 9.23074 12.9629 9.1931C12.8718 9.15546 12.7891 9.10025 12.7194 9.03063L10.25 6.56031L8.31031 8.5L11.5306 11.7194C11.6003 11.7891 11.6555 11.8718 11.6931 11.9629C11.7307 12.0539 11.7501 12.1515 11.75 12.25V16.75C11.75 16.9489 11.671 17.1397 11.5303 17.2803C11.3897 17.421 11.1989 17.5 11 17.5C10.8011 17.5 10.6103 17.421 10.4697 17.2803C10.329 17.1397 10.25 16.9489 10.25 16.75V12.5603L6.71938 9.03063C6.64964 8.96097 6.59433 8.87825 6.55658 8.78721C6.51884 8.69616 6.49941 8.59856 6.49941 8.5C6.49941 8.40144 6.51884 8.30384 6.55658 8.2128C6.59433 8.12175 6.64964 8.03903 6.71938 7.96938L9.71938 4.96938C9.78903 4.89964 9.87175 4.84432 9.9628 4.80658C10.0538 4.76884 10.1514 4.74941 10.25 4.74941C10.3486 4.74941 10.4462 4.76884 10.5372 4.80658C10.6283 4.84432 10.711 4.89964 10.7806 4.96938L13.5603 7.75H17C17.1989 7.75 17.3897 7.82902 17.5303 7.96967C17.671 8.11032 17.75 8.30109 17.75 8.5C17.75 8.69891 17.671 8.88968 17.5303 9.03033C17.3897 9.17098 17.1989 9.25 17 9.25Z"
                fill="white"></path>
            </svg>
            <span>Cycling</span>
          </span>
          <span class="duration-display">0 km</span>
        </div>
        <div>
          <span class="distance-display">0 h 0 m</span>
        </div>
      </div>

      <div class="transportation-div cursor-btn" id="walking-type" onclick="highlightRoute('foot')" data-type="foot">
        <div>
          <span class="transport-type">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
              <path
                d="M11.2503 6.5C11.8436 6.5 12.4237 6.32405 12.917 5.99441C13.4104 5.66477 13.7949 5.19623 14.0219 4.64805C14.249 4.09987 14.3084 3.49667 14.1926 2.91473C14.0769 2.33279 13.7912 1.79824 13.3716 1.37868C12.9521 0.959123 12.4175 0.673401 11.8356 0.557646C11.2536 0.44189 10.6504 0.5013 10.1022 0.728363C9.55407 0.955426 9.08553 1.33994 8.75588 1.83329C8.42624 2.32664 8.25029 2.90666 8.25029 3.5C8.25029 4.29565 8.56636 5.05871 9.12897 5.62132C9.69158 6.18393 10.4546 6.5 11.2503 6.5ZM11.2503 2C11.547 2 11.837 2.08797 12.0836 2.2528C12.3303 2.41762 12.5226 2.65189 12.6361 2.92598C12.7496 3.20007 12.7793 3.50167 12.7215 3.79264C12.6636 4.08361 12.5207 4.35088 12.311 4.56066C12.1012 4.77044 11.8339 4.9133 11.5429 4.97118C11.252 5.02906 10.9504 4.99935 10.6763 4.88582C10.4022 4.77229 10.1679 4.58003 10.0031 4.33336C9.83827 4.08668 9.75029 3.79667 9.75029 3.5C9.75029 3.10218 9.90833 2.72065 10.1896 2.43934C10.4709 2.15804 10.8525 2 11.2503 2ZM17.2503 12.5C17.2503 12.6989 17.1713 12.8897 17.0306 13.0303C16.89 13.171 16.6992 13.25 16.5003 13.25C13.19 13.25 11.5362 11.5803 10.2078 10.2388C9.95092 9.97906 9.70529 9.7325 9.45779 9.50375L8.19873 12.3988L11.6862 14.8897C11.7834 14.9591 11.8626 15.0507 11.9172 15.1568C11.9718 15.263 12.0003 15.3806 12.0003 15.5V20.75C12.0003 20.9489 11.9213 21.1397 11.7806 21.2803C11.64 21.421 11.4492 21.5 11.2503 21.5C11.0514 21.5 10.8606 21.421 10.72 21.2803C10.5793 21.1397 10.5003 20.9489 10.5003 20.75V15.8863L7.58748 13.805L4.43842 21.0491C4.38014 21.1831 4.28396 21.2972 4.1617 21.3773C4.03945 21.4574 3.89646 21.5001 3.75029 21.5C3.64731 21.5002 3.54542 21.4788 3.45123 21.4372C3.26891 21.3579 3.12551 21.2095 3.05256 21.0246C2.97961 20.8397 2.98306 20.6333 3.06217 20.4509L8.13217 8.79125C7.25936 8.63657 6.17092 8.90375 4.87904 9.59563C3.84873 10.1639 2.88711 10.8487 2.01311 11.6366C1.86722 11.7672 1.676 11.8357 1.48033 11.8272C1.28466 11.8188 1.10006 11.7341 0.965982 11.5913C0.831907 11.4486 0.758998 11.259 0.76284 11.0632C0.766682 10.8674 0.84697 10.6808 0.986543 10.5434C1.22092 10.3231 6.76998 5.17813 10.2415 8.19219C10.6006 8.50344 10.9428 8.84844 11.2728 9.18313C12.5806 10.5031 13.8153 11.75 16.5003 11.75C16.6992 11.75 16.89 11.829 17.0306 11.9697C17.1713 12.1103 17.2503 12.3011 17.2503 12.5Z"
                fill="white"></path>
            </svg>
            <span>Walking</span>
          </span>
          <span class="duration-display">0 km</span>
        </div>
        <div>
          <span class="distance-display">0 h 0 m</span>
        </div>
      </div>

      <div class="license">
        <span>©</span><a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a><span>,</span>
        <a href="https://openstreetmap.org/fixthemap" target="_blank" style="color:#3B3CD0">mitmachen/Fehler melden</a>
      </div>
    </div>
  </div>

  <script src='https://unpkg.com/@turf/turf@6/turf.min.js'></script>
  <script src="https://unpkg.com/validator@latest/validator.min.js"></script>
  <script>

    let reearth
    let expanded = false
    let wrapperElm = document.getElementById("wrapper")
    let offsetHeight = wrapperElm.offsetHeight
    let selectedLat, selectedLng
    let startPointLayerId, endPointLayerId
    let isPlacingStartPoint = false
    let isPlacingEndPoint = false
    let searchBtnElm = document.getElementById("search-btn")
    let startPointInputElm = document.getElementById("start-point-input")
    let endPointInputElm = document.getElementById("end-point-input")
    let startPointImage, endPointImage = undefined
    let routeLayerId
    let routeResult=[]
    let server, params
    let transportList = []

    let theme = "dark"
    let backgroundColor = "#141414"
    let selectedRouteTab = ""

    function changeBackgroundColor(color) {
      document.getElementById("content").style.backgroundColor = color
      document.getElementById("header").style.backgroundColor = color
      if (expanded) wrapperElm.style.backgroundColor = color
    }

    function openClosePlugin() {
      expanded = !expanded
      if (expanded) {
        wrapperElm.style.height = "auto"
        wrapperElm.style.backgroundColor = backgroundColor
        document.getElementById("content").style.height = "auto"
      } else {
        offsetHeight = wrapperElm.offsetHeight
        document.getElementById("wrapper").style.height = "44px"
        wrapperElm.style.backgroundColor = "transparent"
      }
      parent.postMessage({ type: "resize", expanded, height: offsetHeight }, "*");
    }

    function resizePlugin() {
      parent.postMessage({ type: "resize", expanded, height: document.getElementById("wrapper").offsetHeight }, "*");
    }

    function openCloseHelp(status) {
      if (status == "open") {
        document.getElementById("help-content").style.display = "block"
      } else if (status == "close") {
        document.getElementById("help-content").style.display = "none"
      }
      resizePlugin()
    }

    window.addEventListener("message", function (e) {
      if (e.source !== parent) return;
      reearth = e.source.reearth
      //console.log(e.data.property)
      if (e.data.property) {
        setValueFromProperties(e.data.property)
      }

      if (e.data.type === 'mousedata' &&
        (isPlacingStartPoint || isPlacingEndPoint)) {

        let latitude = e.data.payload.lat.toFixed(4)
        let longitude = e.data.payload.lng.toFixed(4)
        let markerLayerId
        if (isPlacingStartPoint) {
          startPointLayerId = createMarkerLayer(startPointLayerId, latitude, longitude, startPointImage)
          isPlacingStartPoint = false
          startPointInputElm.value = longitude + "," + latitude
          changeSVGColor("#C7C5C5", "start-point-icon")
        }

        if (isPlacingEndPoint) {
          endPointLayerId = createMarkerLayer(endPointLayerId, latitude, longitude, endPointImage)
          isPlacingEndPoint = false
          endPointInputElm.value = longitude + "," + latitude
          changeSVGColor("#C7C5C5", "end-point-icon")
        }
      }
    })
   
    function setValueFromProperties(properties) {
      if (properties.hasOwnProperty("image")) {
        startPointImage = properties.image.start_thumbnail ?? startPointImage
        endPointImage = properties.image.end_thumbnail ?? endPointImage
      }

      if (properties.hasOwnProperty("api")) {
        server = properties.api.server ?? server
        params = properties.api.parameter ?? params
      }

      if (properties.hasOwnProperty("transportationList")) {
        transportList = properties.transportationList
        //Sort
        let temp = []
        let car = transportList.find(obj => obj.traffic == "car")
        if(car) temp.push(car)
        let bike = transportList.find(obj => obj.traffic == "bike")
        if(bike) temp.push(bike)
        let foot = transportList.find(obj => obj.traffic == "foot")
        if(foot) temp.push(foot)
        transportList = temp
      }

      if (properties.hasOwnProperty("customize")) {

        backgroundColor = properties.customize.background_color ?? backgroundColor
        theme = properties.customize.color_theme ?? theme
        if (theme == "dark")  changeTheme("#FFFFFF")
        if (theme == "light") changeTheme("#000000")

        changeBackgroundColor(backgroundColor)
      }

    }

    function changeSVGColor(color, svgId) {
      var svg = document.getElementById(svgId);
      var elements = svg.getElementsByTagName("path");
      for (var i = 0; i < elements.length; i++) elements[i].style.fill = color;
    }

    function createMarkerLayer(markerLayerId, latitude, longitude, markerIcon) {
      if (markerLayerId) {
        reearth.layers.overrideProperty(markerLayerId, {
          default: {
            location: {
              lat: latitude,
              lng: longitude
            },
            style: markerIcon ? "image" : undefined,
            image: markerIcon,
            labelText: "Lng: " + longitude + ", Lat: " + latitude,
          },
        })
        reearth.layers.show(markerLayerId)
        return markerLayerId
      } else {
        return markerLayerId = reearth.layers.add({
          extensionId: 'marker',
          isVisible: true,
          title: 'place-marker',
          type: 'marker',
          property: {
            default: {
              heightReference: "clamp",
              location: {
                lat: latitude,
                lng: longitude
              },
              style: markerIcon ? "image" : undefined,
              image: markerIcon,
              label: true,
              labelText: "Lng: " + longitude + ", Lat: " + latitude,
              labelTypography: {
                fontSize: 14,
              }
            }
          },
          clampToGround: true
        })
      }
    }

    function placePointOnMap(status) {
      if (status == "startPoint") {
        isPlacingStartPoint = true
        changeSVGColor("red", "start-point-icon")
      }

      if (status == "endPoint") {
        isPlacingEndPoint = true
        changeSVGColor("red", "end-point-icon")
      }
    }

    function resetResultDiv() {
      if (transportList.find(obj => obj.traffic == "car")) {
        document.getElementById("driving-type").style.display = "block"
      } else {
        document.getElementById("driving-type").style.display = "none"
      }

      if (transportList.find(obj => obj.traffic == "bike")) {
        document.getElementById("cycling-type").style.display = "block"
      } else {
        document.getElementById("cycling-type").style.display = "none"
      }

      if (transportList.find(obj => obj.traffic == "foot")) {
        document.getElementById("walking-type").style.display = "block"
      } else {
        document.getElementById("walking-type").style.display = "none"
      }
      resizePlugin()
    }

    //param startPoint = [latitude,longitude] . Ex: [119, 23]
    async function searchByLatLng(startPoint, endPoint) {
      routeResult = []
      await Promise.all(transportList?.map(async (aTransport) => {
        await getRoute(aTransport.traffic, aTransport.color, startPoint, endPoint);
      }));

      routeResult?.map(obj => {
        if(obj.data && selectedRouteTab == "") {
          highlightRoute(obj.type)
          selectedRouteTab = obj.type
        }
      })
    }

    async function getLngLatByLocationName(locationName) {
      let coordinate = []
      if (locationName === "現在地") {
        coordinate = await getCurrentPosition()
      } else {
        let keyword = locationName.replace(/ |,/g, '+');
        let apiUrl = "https://nominatim.openstreetmap.org/search?polygon_geojson=0&format=geojson&q=" + keyword
      
        await fetch(apiUrl)
        .then(response => {
          return response.json()
        }).then(result => {
          if(result.features.length > 0) coordinate = turf.getCoord(result.features[0])
        })
      }
      return coordinate
    }

    function resetDataBeforeSearch() {
      selectedRouteTab = ""
      reearth.layers.hide(routeLayerId)
      let hiddenDivs = ["driving-type", "cycling-type","walking-type"]
      hiddenDivs.map(obj => {
        let divElm =  document.getElementById(obj)
        divElm.style.display = "none"
        divElm.querySelector(".distance-display").innerText = "0 km"
        divElm.querySelector(".duration-display").innerText = "0 h 0 m"
      })

      document.getElementById("export-route-btn").classList.remove("export-btn")
      document.getElementById("export-route-btn").classList.add("export-btn-inactive")
      document.getElementById("export-route-btn").disabled = true
    }
    
    async function search() {
      //Reset 
      resetResultDiv()
      // reearth.layers.hide(routeLayerId)
      searchBtnElm.innerHTML = "Searching..."
      resetDataBeforeSearch()

      if(startPointInputElm.value == "") {    
        alert("Please enter the start point.")
      } else if (endPointInputElm.value == "") {
        alert("Please enter the end point.")
      } else {
        resetResultDiv()
        try {
          let startPointValid = checkIfValidLongitudeLatitude(startPointInputElm.value)
          let endPointValid = checkIfValidLongitudeLatitude(endPointInputElm.value)

          //If user search by location name
          if(!startPointValid) startPointValid = await getLngLatByLocationName(startPointInputElm.value)
          if(!endPointValid) endPointValid = await getLngLatByLocationName(endPointInputElm.value)
        
          await searchByLatLng(startPointValid, endPointValid)
        } catch (error) {
          console.log(error)
        }
      }
      
      searchBtnElm.innerHTML = "Search"
    }

    async function getCurrentPosition() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const curtLocLat = position.coords.latitude;
            const curtLocLng = position.coords.longitude;
            const coord = [curtLocLng, curtLocLat];
            resolve(coord);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }

    async function getRoute(transportType, routeColor, startPoint, endPoint) {
      let transportParam
      if (transportType == "car") transportParam = "routed-car/route/v1/driving/"
      if (transportType == "bike") transportParam = "routed-bike/route/v1/driving/"
      if (transportType == "foot") transportParam = "routed-foot/route/v1/driving/"

      let startPointText = startPoint[0] + "," + startPoint[1]
      let endPointText = endPoint[0] + "," + endPoint[1]

      //Update Start point and End point icon
      startPointLayerId = createMarkerLayer(startPointLayerId, startPointText.split(",")[1], startPointText.split(",")[0], startPointImage)
      endPointLayerId = createMarkerLayer(endPointLayerId, endPointText.split(",")[1], endPointText.split(",")[0], endPointImage)

      let apiUrl = server + transportParam + startPointText + ";" + endPointText + params
      let response = await fetch(apiUrl)
      
      switch (response.status) {
        case 200:
          let data = await response.json();
          // Handle returned data to create route
          let coordinatesData = [];

          // If param geometries=geojson
          let steps = data.routes[0].legs[0].steps
          let features = []
          steps.map(obj => {
            let temp = turf.feature(obj.geometry)
            temp.properties["stroke"] = routeColor
            features.push(temp)
          })
          routeLine = turf.featureCollection(features)
          routeResult.push({ 
            type: transportType,
            data: routeLine,
            duration: data.routes[0].duration,
            distance: data.routes[0].distance
          })


          // Show distance and duration on UI
          let durationData = data.routes[0].duration;
          let distanceData = data.routes[0].distance;
          showResultOnUI(transportType, durationData, distanceData)
          break;
        default:
          showResultOnUI(transportType, 0, 0)
          console.log("Response: ",response)
          //console.log(response)
      }
      
    }

    function showResultOnUI(transportType, duration, distance) {
      let distanceDisplay
      if (distance == 0) {
        distanceDisplay = "No Route"
      } else {
        distanceDisplay = (distance / 1000).toFixed(2) + " km"
      }
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      let durationDisplay = hours + " h " + minutes + " m"
      if (duration < 60) durationDisplay = "0 h 1 m"
      let divElm
      if (transportType == "car") divElm = document.getElementById("driving-type")
      if (transportType == "bike") divElm = document.getElementById("cycling-type")
      if (transportType == "foot") divElm = document.getElementById("walking-type")

      divElm.querySelector(".duration-display").innerText = distanceDisplay
      divElm.querySelector(".distance-display").innerText = durationDisplay
    }

    function showGeojson(geojsonLayerId, geojsonData) {
      if (geojsonLayerId) {
        // override
        reearth.layers.overrideProperty(geojsonLayerId, {
          default: {
            url: geojsonData,
          },
        });
        reearth.layers.show(geojsonLayerId)
      } else {
        geojsonLayerId = reearth.layers.add({
          extensionId: "resource",
          isVisible: true,
          title: "geojson-data",
          property: {
            default: {
              url: geojsonData,
              type: "geojson",
              clampToGround: true
            }
          },
        })
      }
      return geojsonLayerId
    }

    function moveCamera(latitude, longitude, height) {
      reearth.camera.flyTo({
        lat: latitude,
        lng: longitude,
        height: height,
      }, {
        duration: 2
      });
    }

    function highlightRoute(type) {
      //active export btn
      document.getElementById("export-route-btn").classList.remove("export-btn-inactive")
      document.getElementById("export-route-btn").classList.add("export-btn")
      document.getElementById("export-route-btn").disabled = false

      selectedRouteTab = type
      let allTypeElms = document.getElementsByClassName("transportation-div")
      for (let i = 0; i < allTypeElms.length; i++) {
        if (allTypeElms[i].getAttribute("data-type") == type) {
          allTypeElms[i].style.border = "1px solid #3B3CD0"
        } else {
          allTypeElms[i].style.border = "none"
        }
      }
      let route = routeResult.find(obj => obj.type == type)
      routeLayerId = showGeojson(routeLayerId, route.data)

      //Move camera 
      let distanceData = route.distance;
      let centerPoint = turf.getCoord(turf.centerOfMass(route.data))
      moveCamera(centerPoint[1], centerPoint[0], distanceData)
    }

    function deleteAll() {
      startPointInputElm.value = ""
      endPointInputElm.value = ""
      //Hide all layers
      let allLayersId = [routeLayerId, startPointLayerId, endPointLayerId]
      allLayersId.map(obj => {
        reearth.layers.hide(obj)
      })

      let hiddenDivs = ["driving-type", "cycling-type","walking-type"]
      hiddenDivs.map(obj => {
        let divElm = document.getElementById(obj)
        divElm.style.display = "none"
        divElm.querySelector(".distance-display").innerText = "0 km"
        divElm.querySelector(".duration-display").innerText = "0 h 0 m"
        
      })
      //Disable Export btn
      document.getElementById("export-route-btn").classList.remove("export-btn")
      document.getElementById("export-route-btn").classList.add("export-btn-inactive")
      document.getElementById("export-route-btn").disabled = true
      resizePlugin()
    }

    function changeTheme(themeColor) {
      //All text color change to white
      let allTextsElm = document.getElementsByClassName("common-text")
      for (let i=0; i < allTextsElm.length; i++) {
        allTextsElm[i].style.color = themeColor
      }
      document.getElementById("plugin-title").style.color = themeColor
      changeSVGColor(themeColor, "plugin-icon")
    }

    // Download Geojson file
    function downloadObjectAsJson(exportObj, exportName) {
      var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(exportObj));
      var downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".geojson");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }

    function exportRoute() {
      let route = routeResult.find(obj => obj.type == selectedRouteTab)
      downloadObjectAsJson(route.data, route.type + "-route")
      if (!selectedRouteTab) return
    }

    function checkIfValidLongitudeLatitude(str) {
      let convertedLat, convertedLng
      let arr = []
      //Check valid DMS(degrees, minutes, and seconds) latitude-longitude 
      if(validator.isLatLong(str, {checkDMS: true})) {
        arr = str.split(",")
        convertedLat = getDMS2DD(arr[1])
        convertedLng = getDMS2DD(arr[0])
        
        return [convertedLat, convertedLng]
      } else {
        arr = str.split(/[ ,]+/)        
        if(arr.length == 2) {
          arr.map((obj,index) => {
            let direction = obj.slice(-1)
            if(direction == "S" || direction == "W") {
              arr[index] = "-" + obj.slice(0, -1);
            } else if (direction == "N" || direction == "E"){
              arr[index] = obj.slice(0, -1);
            }
          })
          if ((isFinite(arr[0]) && Math.abs(arr[0]) <= 180) && 
          (isFinite(arr[1]) && Math.abs(arr[1]) <= 90)){
            return [parseFloat(arr[0]), parseFloat(arr[1])]
          } else {
            return false
          }
        } else { 
          return false
        }
      }
    }

  </script>
  `,{width: 44, height: 44});

  reearth.ui.postMessage({
  type: "initWidget",
  reearth: reearth
  });

  reearth.on("message", (msg) => {
  if (msg.type === "resize") {
  reearth.ui.resize?.(
  msg.expanded ? 312 : 44,
  msg.expanded ? msg.height : 44,
  msg.expanded ? undefined : true);
  } else if (msg.type === "initWidget") {
  reearth.ui.postMessage({
  type: "initWidget"
  });
  }
  });

  reearth.on("click", (mousedata) => {
  reearth.ui.postMessage(
  {
  type: "mousedata",
  payload: mousedata,
  },
  "*"
  );
  });

  reearth.on("update", send);
  send();

  function send() {
  reearth.ui.postMessage({
  type: "updateWidget",
  property: reearth.widget.property,
  });
  }