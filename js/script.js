"use strict";
let $ = document;
const megaMenu = $.querySelector(".shop-nav");
const shopMenu = document.querySelector(".shop-menu");
const shopMenuMainItems = $.querySelectorAll(".shop-menu__main-item");
const subLists = document.querySelectorAll(".shop-menu__sublist");
const storySwiperWrapper = document.querySelector(".story .swiper-wrapper");
const specialOfferSwiperWrapper = document.querySelector(".special-offer .swiper-wrapper");
const offerSwiperWrapper = document.querySelector(".offer #productSwiper .swiper-wrapper");
const laptopSwiperWrapper = document.querySelector(".laptop .swiper-wrapper");
const mobileSwiperWrapper = document.querySelector(".mobile .swiper-wrapper");
const testimonialSwiperWrapper = document.querySelector(".testimonial .swiper-wrapper");

const storyModal = $.querySelector("#storyModal");
const storyModalTitle = $.querySelector("#storyModal .modal-title");
const storyVideo = $.querySelector("#storyModal .modal-video");
const modalCloseBtn = $.querySelector("#storyModal .modal-footer .btn");
const modalCloseIcon = $.querySelector("#storyModal .btn-close");

const coundownSec = $.querySelector(".card__countdown-seconds");
const coundownMin = $.querySelector(".card__countdown-minutes");
const coundownHour = $.querySelector(".card__countdown-hours");
const coundownDay = $.querySelector(".card__countdown-days");
let mainData;

const aboutVideoPlayBtn = $.querySelector("#play-icon");
const aboutVideoTag = $.querySelector(".about__video");

// sticky navbar =============

let prevScrollPos = window.scrollY;
function userScroll() {
  let currScrollPos = window.scrollY;
  if (currScrollPos > prevScrollPos) {
    megaMenu.classList.remove("shop-nav__show");
  } else {
    megaMenu.classList.add("shop-nav__show");
  }

  prevScrollPos = currScrollPos;
}

window.addEventListener("scroll", userScroll);

// show sub menu ========================
function showSubMenu() {
  shopMenuMainItems.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      const activeSubListMenu = document.querySelector(".shop-menu__sublist.active");
      activeSubListMenu.classList.remove("active");
      const subListMenu = e.target.querySelector(".shop-menu__sublist");
      subListMenu.classList.add("active");
    });
  });
}

shopMenu.addEventListener("mouseenter", showSubMenu);

// swiper slider ===========================
const storySwiper = new Swiper(".story .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 8,
});

const mainSliderSwiper = new Swiper(".main-slider .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const categorySwiper = new Swiper(".category .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 5,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Breakpoints
  breakpoints: {
    300: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  },
});
const specialOfferSwiper = new Swiper(".special-offer .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },

    830: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  },
});

const OfferSwiper = new Swiper(".offer #productSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  crossFade: true,
  effect: "fade",
});
const productItemSwiper = new Swiper(".offer #productItemSwiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  slidesPerView: 5,
});
const laptopSwiper = new Swiper(".laptop .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 5,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});
const mobileSwiper = new Swiper(".mobile .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});
const brandSwiper = new Swiper(".brand .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  },
});

const testimonialSwiper = new Swiper(".testimonial .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});

const blogSwiper = new Swiper(".blog .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});

// Play Story Video ==========================
function stopVideo() {
  storyVideo.pause();
  storyVideo.currentTime = 0;
}

function showStoryVideo() {
  storyVideo.play();
  window.addEventListener("click", (e) => {
    if (e.target == storyModal) stopVideo();
  });
  modalCloseBtn.addEventListener("click", stopVideo);
  modalCloseIcon.addEventListener("click", stopVideo);
}

// Create Story Elements ============
function createStory(data) {
  data.forEach((item) => {
    const html =
      // html
      `<div class="swiper-slide mx-5 d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#storyModal " data-id="${item.story_id}">
              <div class="swiper-item d-flex flex-column align-items-center justify-content-center " >
                <div class="swiper-item__img-container rounded-circle d-flex align-items-center justify-content-center">
                  <div class="bg-white rounded-circle overflow-hidden d-flex">
                    <div class="rounded-circle overflow-hidden d-flex">
                      <img src="${item.story_img}" alt="${item.story_title}" class="object-fit-cover" />
                    </div>
                  </div>
                </div>
                <span class="mt-2 fs-5 text-center">${item.story_title}</span>
              </div>
            </div>`;
    storySwiperWrapper.insertAdjacentHTML("beforeend", html);
  });
}

function createModalStory(data) {
  const swiperItems = $.querySelectorAll(".swiper-slide");
  swiperItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parentEl = e.target.closest(".swiper-slide");
      const datasetId = Number(parentEl.dataset.id);
      if (datasetId === data[datasetId - 1].story_id) {
        storyModalTitle.innerHTML = data[datasetId - 1].story_title;
        storyVideo.src = data[datasetId - 1].story_video;
        showStoryVideo();
      }
    });
  });
}

// Implement Countdown =============

function updateTimers() {
  const productCards = document.querySelectorAll(".special-offer .card");
  productCards.forEach((card) => {
    const productId = card.dataset.productId;
    const endTime = new Date(card.dataset.endTime).getTime();
    const now = new Date().getTime();
    const timeRemaining = endTime - now;

    if (timeRemaining > 0) {
      let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      seconds = seconds < 10 ? "0" + seconds : seconds;

      const countdownDisplay = card.querySelector(`#countdown-${productId}`);
      countdownDisplay.textContent = `${days} ${hours} ${minutes} ${seconds}`;
    } else {
      const countdownDisplay = card.querySelector(`#countdown-${productId}`);
      countdownDisplay.textContent = "منقضی شد";
    }
  });
}

function updateOfferTimers() {
  const productCards = document.querySelectorAll(".offer .offer__item");
  productCards.forEach((card) => {
    const productId = card.dataset.id;
    const endTime = new Date(card.dataset.endTime).getTime();
    const now = new Date().getTime();
    const timeRemaining = endTime - now;

    if (timeRemaining > 0) {
      let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      seconds = seconds < 10 ? "0" + seconds : seconds;

      const countdownDisplay = card.querySelector(`#countdown-${productId}`);
      const displaySeconds = countdownDisplay.querySelector(".offer__countdown-sec");
      const displayMinutes = countdownDisplay.querySelector(".offer__countdown-min");
      const displayHours = countdownDisplay.querySelector(".offer__countdown-hour");
      const displayDays = countdownDisplay.querySelector(".offer__countdown-day");

      displaySeconds.textContent = seconds;
      displayMinutes.textContent = minutes;
      displayHours.textContent = hours;
      displayDays.textContent = days;
    } else {
      const countdownDisplay = card.querySelector(`#countdown-${productId}`);
      countdownDisplay.textContent = "منقضی شد";
    }
  });
}

// Tooltip ======================
function createTooltip() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
}

// Create Special Offer Elements ============
function createSpecialOffer(data) {
  data.forEach((item) => {
    const html =
      // html
      `
  <div class="swiper-slide">
                <div
                  class="card rounded-3 bg-white position-relative p-3"
                  data-product-id="${item.product_id}"
                  data-end-time="${item.product_timer}"
                >
                  <div class="card__header-btn position-absolute d-flex flex-column z-3">
                    <a
                      href=""
                      class="mb-2 rounded-circle border"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-title="مقایسه"
                      ><i class="bi bi-shuffle"></i
                    ></a>
                    <a
                      href=""
                      class="mb-2 rounded-circle border"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-title="افزودن به علاقه مندی ها"
                      ><i class="bi bi-heart"></i
                    ></a>
                    <a
                      href=""
                      class="mb-2 rounded-circle border"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-title="نمایش سریع"
                      ><i class="bi bi-eye"></i
                    ></a>
                  </div>
                  <a href="">
                    <div class="card__img-container">
                      <img
                        src="${item.product_img_1}"
                        alt="tv"
                        class="img-fluid card__img card__img-visible d-block mx-auto"
                      />
                      <img
                        src="${item.product_img_2}"
                        alt="tv"
                        class="img-fluid card__img card__img-hidden d-block mx-auto"
                      />
                    </div>
                    <div class="card__heading my-5">
                      <h5 class="mb-0 fw-bold lh-lg">
                        ${item.product_title}
                      </h5>
                    </div>
                    <div class="card__price-content rounded-1 border bg-gray p-2">
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="mt-1">
                          <button class="btn btn-primary lh-lg">
                            <i class="bi bi-cart text-white"></i>
                          </button>
                          <div class="card__countdown-container d-flex mt-2" id="countdown-${item.product_id}"></div>
                        </div>
                        <div class="card__price d-flex align-items-end flex-column">
                          <p class="fs-4 fw-bolder lh-lg">
                            ${item.product_offer}
                            <span class="fw-normal">تومان</span>
                          </p>
                          <p class="mt-2 text-decoration-line-through text-light-emphasis fs-4 lh-lg">
                            <span class="badge bg-primary ms-2">${item.product_discount}%</span>
                            ${item.product_price}
                          </p>
                        </div>
                      </div>
                      <div
                        class="progress progress-container my-2"
                        role="progressbar"
                        aria-label="countdown timer progress"
                        aria-valuenow="${item.product_progress}"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div class="progress-bar" style="width:${item.product_progress}%" ></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
  `;
    specialOfferSwiperWrapper.insertAdjacentHTML("beforeend", html);
  });
  // updateTimers();
  setInterval(updateTimers, 1000);
  createTooltip();
}

// Create Offer Slider ================
function createOfferSlider(data) {
  data.forEach((item) => {
    const html =
      // html
      `
      <div class="swiper-slide">
                    <div class="offer__item px-3 fs-4" data-end-time="${item.product_timer}" data-id="${item.product_id}">
                      <div class="row">
                        <div class="col-md-4 pe-0 p-sm-4 p-0">
                          <div class="offer__img border-md-start ps-3 my-3 text-center">
                            <img src="${item.product_img}" alt="mobile" class="img-fluid rounded-3 " />
                          </div>
                        </div>
                        <div class="col-md-8 pe-0 p-sm-4 p-0">
                          <div class="text-container p-xl-5">
                            <h3 class="offer__title mb-2 fw-bold ">${item.product_title}</h3>
                            <p class="fs-4 text-start d-flex align-items-center lh-lg" dir="ltr">
                              <span class="offer__star">
                                <i class="bi bi-star-fill fs-4"></i>
                              </span>
                              <span class="mx-2">${item.product_rating_value}</span>
                              <span class="" dir="rtl">( ${item.product_review} نفر )</span>
                            </p>
                            <div class="offer__product-feature d-flex align-items-center my-5 p-2 rounded-1 bg-gray border">
                              <div class="d-flex flex-column align-items-center justify-content-between border-start border-dark-subtle w-25 lh-lg text-center">
                                <i class="bi bi-battery-full"></i>
                                <p class="fs-4" dir="ltr">${item.product_battery} mAh</p>
                              </div>
                              <div class="d-flex flex-column align-items-center justify-content-between border-start border-dark-subtle w-25 lh-lg">
                                <i class="bi bi-camera"></i>
                                <p class="fs-4" dir="ltr">${item.product_camera} MP</p>
                              </div>
                              <div class="d-flex flex-column align-items-center justify-content-between border-start border-dark-subtle w-25 lh-lg">
                                <i class="bi bi-phone"></i>
                                <p class="fs-4">${item.product_screen}"</p>
                              </div>
                              <div class="d-flex flex-column align-items-center justify-content-between border-dark-subtle w-25 lh-lg">
                                <i class="bi bi-memory"></i>
                                <p class="fs-4" dir="ltr">${item.product_memory} GB</p>
                              </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                              <div class="offer__countdown mt-1 d-flex" id="countdown-${item.product_id}">
                                <div>
                                  <span class="offer__countdown-sec rounded-circle bg-primary text-white"></span>
                                </div>
                                <div><span class="offer__countdown-min rounded-circle"></span></div>
                                <div><span class="offer__countdown-hour rounded-circle"></span></div>
                                <div><span class="offer__countdown-day rounded-circle"></span></div>
                              </div>
                              <div class="d-flex flex-md-column  lh-lg justify-content-md-start justify-content-around  align-items-end">
                                <p class="fs-4 order-0 text-decoration-line-through ms-lg-0 ms-sm-7 ms-5">${item.product_price}</p>
                                <p class="fw-bold fs-3">
                                  ${item.product_offer}
                                  <span class="fw-normal fs-5">تومان</span>
                                </p>
                              </div>
                            </div>
                            <div class="progress my-2" role="progressbar" aria-label="Basic example" aria-valuenow="${item.product_progress}" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" style="width:${item.product_progress}%"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    `;
    offerSwiperWrapper.insertAdjacentHTML("beforeend", html);
  });

  setInterval(updateOfferTimers, 1000);
}

// Create Laptop Slider ================
function createLaptopSlider(data) {
  data.forEach((item) => {
    const html =
      // html
      ` 
      <div class="swiper-slide">
                  <div class="card rounded-3 bg-white position-relative p-3" data-product-id="${item.product_id}" data-end-time="${item.product_timer}">
                    <div class="card__header-btn position-absolute d-flex flex-column z-3">
                      <a href="" class="mb-2 rounded-circle border" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="مقایسه"><i class="bi bi-shuffle"></i></a>
                      <a href="" class="mb-2 rounded-circle border" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="افزودن به علاقه مندی ها"><i class="bi bi-heart"></i></a>
                      <a href="" class="mb-2 rounded-circle border" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="نمایش سریع"><i class="bi bi-eye"></i></a>
                    </div>
                    <a href="">
                      <div class="card__img-container">
                        <img src="${item.product_img_1}" alt="lap top" class="img-fluid card__img card__img-visible d-block mx-auto" />
                        <img src="${item.product_img_2}" alt="lap top" class="img-fluid card__img card__img-hidden d-block mx-auto" />
                      </div>
                      <div class="card__heading ">
                        <h5 class=" fw-bold my-5 lh-lg">${item.product_title}</h5>
                      </div>
                      <div class="card__price-content rounded-1 border bg-gray p-2">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="mt-1">
                            <button class="btn btn-primary lh-lg">
                              <i class="bi bi-cart text-white"></i>
                            </button>
                            <div class="card__countdown-container d-flex mt-2" id="countdown-${item.product_id}"></div>
                          </div>
                          <div class="card__price d-flex align-items-end flex-column">
                            <p class="fs-4 fw-bolder">
                              ${item.product_offer}
                              <span class="fw-normal">تومان</span>
                            </p>
                            <p class="mt-2 text-decoration-line-through text-light-emphasis fs-4">
                              <span class="badge bg-primary ms-2">20%</span>
                              ${item.product_price}
                            </p>
                          </div>
                        </div>
                        
                      </div>
                    </a>
                  </div>
                </div>
    `;
    laptopSwiperWrapper.insertAdjacentHTML("beforeend", html);
    createTooltip();
  });
}
// Create Mobile Slider ================
function createMobileSlider(data) {
  data.forEach((item) => {
    const html =
      // html
      ` 
      <div class="swiper-slide">
                  <div class="card rounded-3 bg-white position-relative p-3" data-product-id="${item.product_id}" data-end-time="${item.product_timer}">
                    <div class="card__header-btn position-absolute d-flex flex-column z-3">
                      <a href="" class="mb-2 rounded-circle border" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="مقایسه"><i class="bi bi-shuffle"></i></a>
                      <a href="" class="mb-2 rounded-circle border" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="افزودن به علاقه مندی ها"><i class="bi bi-heart"></i></a>
                      <a href="" class="mb-2 rounded-circle border" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="نمایش سریع"><i class="bi bi-eye"></i></a>
                    </div>
                    <a href="">
                      <div class="card__img-container">
                        <img src="${item.product_img_1}" alt="tv" class="img-fluid card__img card__img-visible d-block mx-auto" />
                        <img src="${item.product_img_2}" alt="tv" class="img-fluid card__img card__img-hidden d-block mx-auto" />
                      </div>
                      <div class="card__heading ">
                        <h5 class="my-5 fw-bold  lh-lg">${item.product_title}</h5>
                      </div>
                      <div class="card__price-content rounded-1 border bg-gray p-2">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="mt-1">
                            <button class="btn btn-primary lh-lg">
                              <i class="bi bi-cart text-white"></i>
                            </button>
                            
                          </div>
                          <div class="card__price d-flex align-items-end flex-column">
                            <p class="fs-4 fw-bolder">
                              ${item.product_offer}
                              <span class="fw-normal">تومان</span>
                            </p>
                            <p class="mt-2 text-decoration-line-through text-light-emphasis fs-4">
                              <span class="badge bg-primary ms-2">10%</span>
                              ${item.product_price}
                            </p>
                          </div>
                        </div>
                        
                      </div>
                    </a>
                  </div>
                </div>
    `;
    mobileSwiperWrapper.insertAdjacentHTML("beforeend", html);
    createTooltip();
  });
}

// Create Testimonial Slider =============
function createTestimnoialSlider(data) {
  data.forEach((item) => {
    const html =
      // html
      `
      <div class="swiper-slide">
                <div class="card  p-5 rounded-2 bg-white">
                  <div class="d-flex align-items-center">
                    <img src="${item.user_img}" alt="profile image" class="img-thumbnail rounded-1 p-1 user-img" />
                    <div class="user-info me-5">
                      <div class="d-flex align-items-center fs-5">
                        <i class="bi bi-person"></i>
                        <strong class="me-2">${item.user_name}</strong>
                      </div>
                      <div class="mt-2">
                        <p class="fs-6 text-light-emphasis">${item.user_date}</p>
                      </div>
                    </div>
                  </div>
                  <p class="testimonial__text my-2 text-light-emphasis fs-4">
                    ${item.user_text}
                  </p>
                </div>
              </div>
    `;

    testimonialSwiperWrapper.insertAdjacentHTML("beforeend", html);
  });
}

// play about section video =============
aboutVideoPlayBtn.addEventListener("click", () => {
  if (aboutVideoTag.paused == true) {
    aboutVideoTag.play();
    aboutVideoPlayBtn.style.opacity = 0;
  } else {
    aboutVideoTag.pause();
    aboutVideoPlayBtn.style.opacity = 1;
  }
});

// fetch data =============
window.addEventListener("DOMContentLoaded", () => {
  (async () => {
    const getData = async () => {
      const res = await fetch("../data.json");
      const data = await res.json();
      mainData = data;
      return data;
    };
    await getData();
    createStory(mainData.story_groups);
    createModalStory(mainData.story_groups);
    createSpecialOffer(mainData.special_offer);
    createOfferSlider(mainData.offer_slider);
    createLaptopSlider(mainData.laptop_bestSeller);
    createMobileSlider(mainData.mobile_bestSeller);
    createTestimnoialSlider(mainData.testimonial_data);
  })();
});
