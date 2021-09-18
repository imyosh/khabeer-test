/*==================== FORM SWIPER  ====================*/

window.setupTopicSwiper = () => {
  let swiperTopicss = new Swiper(".swiperTopicss", {
    cssMode: true,
    navigation: {
      nextEl: ".swiperTopic-button-next",
      prevEl: ".swiperTopic-button-prev",
    },

    pagination: {
      el: ".swiperTopic-pagination",
      clickable: true,
      type: "bullets",
    },
  })
}
window.setupCollectorSwiper = () => {
  let swiperCollector = new Swiper(".swiper__container", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar",
    },
  })
  swiperCollector.allowSlideNext = false
  swiperCollector.allowSlidePrev = false

  let nextBtn = document.getElementsByClassName("swiper-button-next")[0]
  let prevBtn = document.getElementsByClassName("swiper-button-prev")[0]
  prevBtn.classList.add("swiper-button-disabled")

  document.getElementById("submit").style.display = "none"

  document.getElementById("submit").onclick = () => {
    if (swiperCollector.activeIndex == 0) prevBtn.classList.remove("swiper-button-disabled")
    else prevBtn.classList.add("swiper-button-disabled")
  }

  document.getElementsByClassName("swiper-button-next")[0].onclick = function (e) {
    // e.preventDefault()
    swiperCollector.allowSlideNext = true
    swiperCollector.slideNext()
    swiperCollector.allowSlideNext = false

    // if (swiperCollector.activeIndex + 1 > 0) prevBtn.classList.remove("swiper-button-disabled")

    if (swiperCollector.isEnd) {
      nextBtn.style.display = "none"
      document.getElementById("submit").style.display = "block"
    }
  }

  document.getElementsByClassName("swiper-button-prev")[0].onclick = function (e) {
    // e.preventDefault()
    swiperCollector.allowSlidePrev = true
    swiperCollector.slidePrev()
    swiperCollector.allowSlidePrev = false

    // if (swiperCollector.activeIndex - 1 == 0) prevBtn.classList.add("swiper-button-disabled")

    if (!swiperCollector.isEnd) {
      nextBtn.style.display = "flex"
      document.getElementById("submit").style.display = "none"
    }
  }
}
