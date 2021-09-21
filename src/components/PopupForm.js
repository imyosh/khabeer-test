import React, { useEffect, useState } from "react"

import Chart from "./Chart"
import axios from "axios"

let server = "https://khabeer-webapp.herokuapp.com"
// let server = "http://127.0.0.1:8000"

const chartOptions1 = {
  chart: {
    id: "chart1",
    type: "area",
    foreColor: "#999",
    stacked: false,
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06,
    },
  },
  colors: ["#E04E4E", "#053A4A", "#28234A", "#3A8C84", "#2C7BCF"],
  stroke: {
    curve: "smooth",
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  series: [],
  //   noData: {
  //     text: "Loading...",
  //   },
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  xaxis: {
    type: "category",

    // labels: {
    //   show: true,
    // },

    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5,
    },
    tooltip: {
      enabled: true,
    },
  },
  grid: {
    padding: {
      left: 7,
      right: 5,
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
    y: {
      formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
        if (value)
          return ` 
        ج. مصري  ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
      },
    },
  },
  legend:
    window.screen.width <= 580
      ? {
          position: "bottom",
          horizontalAlign: "center",
        }
      : {
          position: "top",
          horizontalAlign: "left",
        },
  fill: {
    type: "solid",
    // fillOpacity: 0.5,
    opacity: 0.6,
  },
}

const chartOptions2 = {
  chart: {
    id: "chart2",
    type: "area",
    foreColor: "#999",
    stacked: false,
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06,
    },
  },
  colors: ["#E04E4E", "#053A4A", "#28234A", "#3A8C84", "#2C7BCF"],
  stroke: {
    curve: "smooth",
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  series: [],
  //   noData: {
  //     text: "Loading...",
  //   },
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  xaxis: {
    type: "category",

    // labels: {
    //   show: true,
    // },

    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5,
    },
    tooltip: {
      enabled: true,
    },
  },
  grid: {
    padding: {
      left: 7,
      right: 5,
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
    y: {
      formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
        if (value)
          return ` 
        ج. مصري  ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
      },
    },
  },
  legend:
    window.screen.width <= 580
      ? {
          position: "bottom",
          horizontalAlign: "center",
        }
      : {
          position: "top",
          horizontalAlign: "left",
        },
  fill: {
    type: "solid",
    // fillOpacity: 0.5,
    opacity: 0.6,
  },
}

function PopupForm() {
  const [rangeMin, setRangeMin] = useState("100")
  const [rangeMax, setRangeMax] = useState("500")

  const [userData, setUserData] = useState({})

  const [calculations, setCalculations] = useState([])

  const [categoryIcons, setCategoryIcons] = useState({})
  const [topicIcons, setTopicIcons] = useState({})

  const [frontendData, setFrontendData] = useState({ Programming: { icon: "", subcategories: [] } })
  const [chartData, setChartData] = useState({})

  const [historyChartData, setHistoryChartData] = useState({ calculatedData: {} })

  const [selectedCategory, setselectedCategory] = useState("Programming")
  const [selectedTopic, setselectedTopic] = useState("Programming Fundamentals")
  const [selectedPrice, setselectedPrice] = useState(0)

  const [otherSelectedCategory, setOtherSelectedCategory] = useState("")

  const handleMin = (event) => {
    setRangeMin(event.target.value)
  }

  const handleMax = (event) => {
    setRangeMax(event.target.value)
  }

  useEffect(() => {
    if (frontendData["Programming"]["subcategories"].length === 0) {
      document.getElementsByClassName("swiper-button-next")[0].classList.add("disable")
    }
  }, [frontendData])

  useEffect(() => {
    axios.get(`${server}/frontend`).then((res) => {
      // console.log(res)

      let data = res.data

      setFrontendData(data.cards)
      setCategoryIcons(data.icons.categoryIcons)
      setTopicIcons(data.icons.topicIcons)
    })

    const script = document.createElement("script")

    script.innerHTML = `

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
    noSwiping: true,
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

  window.swip = swiperCollector
  window.backFirstSlide = () => {
    swiperCollector.allowSlidePrev = true
    swiperCollector.slideTo(0)
    swiperCollector.allowSlidePrev = false
  }

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



window.setUpDoubleRangeSlider = () => {
  var inputLeft = document.getElementById("input-left");
  var inputRight = document.getElementById("input-right");

  var thumbLeft = document.querySelector(".slider > .thumb.left");
  var thumbRight = document.querySelector(".slider > .thumb.right");
  var range = document.querySelector(".slider > .range");

  function setLeftValue() {
    var _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
  }
  setLeftValue();

  function setRightValue() {
    var _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
  }
  setRightValue();

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);

  inputLeft.addEventListener("mouseover", function () {
    thumbLeft.classList.add("hover");
  });
  inputLeft.addEventListener("mouseout", function () {
    thumbLeft.classList.remove("hover");
  });
  inputLeft.addEventListener("mousedown", function () {
    thumbLeft.classList.add("active");
  });
  inputLeft.addEventListener("mouseup", function () {
    thumbLeft.classList.remove("active");
  });

  inputRight.addEventListener("mouseover", function () {
    thumbRight.classList.add("hover");
  });
  inputRight.addEventListener("mouseout", function () {
    thumbRight.classList.remove("hover");
  });
  inputRight.addEventListener("mousedown", function () {
    thumbRight.classList.add("active");
  });
  inputRight.addEventListener("mouseup", function () {
    thumbRight.classList.remove("active");
  });
}
    `
    script.async = true

    document.body.appendChild(script)

    window.setupCollectorSwiper()
    window.setUpDoubleRangeSlider()

    // let form = document.getElementById("swiper")
    // form.style.opacity = "0"
    // form.style.display = "none"

    // let p1 = document.getElementById("waitingone").classList.add("nextPage")
    // let p2 = document.getElementById("waitingtwo").classList.add("nextPage")
    // let p3 = document.getElementById("waitingthree").classList.add("nextPage")
    // let p4 = document.getElementById("waitingfour").classList.add("nextPage")
    // let p5 = document.getElementById("waitingfive").classList.add("nextPage")
  }, [])

  useEffect(() => {
    window.setupTopicSwiper()
  }, [selectedCategory])

  const setSelected = (e) => {
    document.getElementsByClassName("swiper-button-next")[0].classList.remove("disable")

    let element = e.currentTarget.parentElement
    ;[...element.parentElement.children].forEach((sib) => {
      sib.firstChild.classList.remove("collect__card__selected")
    })
    element.firstChild.classList.add("collect__card__selected")

    if (e) e.currentTarget.getElementsByTagName("input")[0].checked = true

    if (document.getElementById("parentLableContainer")) {
      let labels = document.getElementById("parentLableContainer").getElementsByTagName("label")

      ;[...labels].forEach((label) => {
        label.firstChild.classList.remove("collect__card__selected")
        label.getElementsByTagName("input")[0].checked = false
      })
    }
  }

  const setSelectedTopicClick = (e) => {
    let element = e.currentTarget.parentElement

    e.currentTarget.getElementsByTagName("input")[0].checked = true

    let labels = document.getElementById("parentLableContainer").getElementsByTagName("label")

    ;[...labels].forEach((label) => {
      label.firstChild.classList.remove("collect__card__selected")
    })

    element.firstChild.classList.add("collect__card__selected")
  }

  const formSubmit = (e) => {
    e.preventDefault()
    if (navigator.onLine) {
      const formData = new FormData(e.target)
      const formProps = Object.fromEntries(formData)
      // console.log(formProps)

      setselectedTopic(formProps.topicTitle)

      let form = document.getElementById("swiper")
      form.style.opacity = "0"
      form.style.display = "none"

      let p1 = document.getElementById("waitingone")
      let p2 = document.getElementById("waitingtwo")
      let p3 = document.getElementById("waitingthree")

      p1.classList.add("nextPage")

      axios.post(`${server}/data`, formProps).then((res) => {
        // console.log(res)

        setChartData(res.data)

        setTimeout(() => {
          p1.classList.remove("nextPage")
          p2.classList.add("nextPage")

          setTimeout(() => {
            p2.classList.remove("nextPage")

            if (document.getElementById("email").value === "") {
              p3.classList.add("nextPage")
            } else {
              if (navigator.onLine) {
                let datapoint = {
                  date: new Date().toLocaleString(),
                  category: selectedCategory,
                  topicTitle: selectedTopic,
                  coursePrice: selectedPrice,
                  calculatedData: chartData,
                  students: Math.ceil((Number(rangeMin) + Number(rangeMax)) / 2),
                }

                // console.log(datapoint)
                formProps.calculations = [datapoint]

                let p4 = document.getElementById("waitingfour")
                let p3 = document.getElementById("waitingthree")

                p3.classList.remove("nextPage")
                p4.classList.add("nextPage")

                axios.post(`${server}/usersdata`, userData).then((res) => {
                  // console.log(res)

                  if (res.data.exist) {
                    document.getElementById("history").classList.remove("disable")
                    setCalculations([...res.data.calculations, datapoint])
                  }
                })
              } else {
                alert("pleas check your internt connection")
              }
            }
          }, 4000)
        }, 2000)
      })
    } else {
      alert("pleas check your internt connection")
    }
  }

  const submitInfo = (e) => {
    e.preventDefault()

    if (navigator.onLine) {
      const formData = new FormData(e.target)
      const formProps = Object.fromEntries(formData)
      // console.log(formProps)

      setUserData(formProps)

      let datapoint = {
        date: new Date().toLocaleString(),
        category: otherSelectedCategory === "" ? selectedCategory : otherSelectedCategory,
        topicTitle: selectedTopic,
        coursePrice: selectedPrice,
        calculatedData: chartData,
        students: Math.ceil((Number(rangeMin) + Number(rangeMax)) / 2),
      }
      formProps.calculations = [datapoint]

      let p4 = document.getElementById("waitingfour")
      let p3 = document.getElementById("waitingthree")

      p3.classList.remove("nextPage")
      p4.classList.add("nextPage")

      axios.post(`${server}/usersdata`, formProps).then((res) => {
        // console.log(res)

        if (res.data.exist) {
          document.getElementById("history").classList.remove("disable")
          setCalculations([...res.data.calculations, datapoint])
        }
      })
    } else {
      alert("pleas check your internt connection")
    }
  }

  const toHistory = () => {
    document.getElementById("waitingfour").classList.remove("nextPage")
    document.getElementById("waitingfive").classList.add("nextPage")
  }

  const toHistoryFromChart = () => {
    document.getElementById("waitingsix").classList.remove("nextPage")
    document.getElementById("waitingfive").classList.add("nextPage")
    window.ApexCharts.exec("chart2", "resetSeries")
  }

  const toChart = () => {
    document.getElementById("waitingfive").classList.remove("nextPage")
    document.getElementById("waitingfour").classList.add("nextPage")
  }

  const toHistoryChart = () => {
    document.getElementById("waitingfive").classList.remove("nextPage")
    document.getElementById("waitingsix").classList.add("nextPage")
  }

  const again = () => {
    document.getElementById("waitingfour").classList.remove("nextPage")
    let form = document.getElementById("swiper")
    form.style.display = "flex"
    form.style.opacity = "1"
    window.backFirstSlide()

    document.getElementById("submit").style.display = "none"
    document.getElementsByClassName("swiper-button-next")[0].style.display = "flex"

    document.getElementsByClassName("swiper-button-next")[0].classList.add("disable")

    document.getElementById("priceInput").value = ""

    setRangeMin(100)
    document.getElementById("input-left").value = "100"
    setRangeMax(500)
    document.getElementById("input-right").value = "500"

    window.setUpDoubleRangeSlider()

    let labels = document
      .getElementById("parentLableContainerCategory")
      .getElementsByTagName("label")

    ;[...labels].forEach((label) => {
      label.firstChild.classList.remove("collect__card__selected")
      label.getElementsByTagName("input")[0].checked = false
    })

    if (document.getElementById("parentLableContainer")) {
      labels = document.getElementById("parentLableContainer").getElementsByTagName("label")
      ;[...labels].forEach((label) => {
        label.firstChild.classList.remove("collect__card__selected")
        label.getElementsByTagName("input")[0].checked = false
      })
    }

    window.ApexCharts.exec("chart1", "resetSeries")
  }

  return (
    <div className="popup" id="model">
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className="popup__content"
      >
        <form
          onSubmit={formSubmit}
          id="swiper"
          className="form swiper__container swiper-container"
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault()
          }}
        >
          <div className="swiper-wrapper">
            <div className="collect__slide swiper-slide">
              {frontendData["Programming"]["subcategories"].length === 0 ? (
                <div className="loading">
                  <div className="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="collect__title">قم بأختيار فئة</h3>
                  <div className="collect__data">
                    <div id="parentLableContainerCategory" className="collect__cardsContainer">
                      {Object.keys(frontendData).map((title, id) => (
                        <label key={id} htmlFor={title}>
                          <div
                            onClick={(e) => {
                              setSelected(e)
                              setselectedCategory(title)
                            }}
                            htmlFor={title}
                            className="collect__card"
                          >
                            <div
                              className="collect__card__icon"
                              dangerouslySetInnerHTML={{ __html: categoryIcons[title] }}
                            ></div>
                            <span className="collect__card__title">{title}</span>
                            <input
                              className="collect__card__radio"
                              type="radio"
                              name="category"
                              value={title}
                              id={title}
                              required
                            ></input>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {selectedCategory === "فئة أخرى" ? (
              <div className="collect__slide swiper-slide">
                <h3 className="collect__title">قم بادخال مجالك الخاص</h3>
                <div className="collect__data">
                  <div className="collect__ContentContainer">
                    <input
                      className="form__input"
                      type="text"
                      name="category"
                      placeholder="فئة المجال"
                      required
                      onChange={(e) => setOtherSelectedCategory(e.target.value)}
                    ></input>

                    <input
                      className="form__input"
                      type="text"
                      name="topicTitle"
                      placeholder="اسم المجال"
                      required
                      onChange={(e) => setselectedTopic(e.target.value)}
                    ></input>

                    <span className="collect__text">سوف نقوم بحفظ مجالك الخاص</span>
                  </div>
                </div>
              </div>
            ) : window.screen.width <= 703 || window.screen.height <= 644 ? (
              <div className="collect__slide swiper-slide">
                <h3 className="collect__title">قم بأختيار مجالك</h3>

                <div className="collect__data">
                  <div id="parentLableContainer" className="collect__cardsContainer">
                    {frontendData[selectedCategory]["subcategories"].flat().map((title, id) => (
                      <label key={id} htmlFor={title}>
                        <div
                          onClick={(e) => {
                            setSelectedTopicClick(e)
                            setselectedTopic(title)
                          }}
                          htmlFor={title}
                          className="collect__card"
                        >
                          <div
                            className="collect__card__icon"
                            dangerouslySetInnerHTML={{ __html: topicIcons[title] }}
                          ></div>
                          <span className="collect__card__title">{title}</span>
                          <input
                            className="collect__card__radio"
                            type="radio"
                            name="topicTitle"
                            value={title}
                            id={title}
                            required
                          ></input>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="collect__slide swiper-slide">
                <h3 className="collect__title">قم بأختيار مجالك</h3>

                <div className="swiperTopicss">
                  <div id="parentLableContainer" className="swiper-wrapper">
                    {frontendData[selectedCategory]["subcategories"].map((slide, id) => (
                      <div key={id} className="swiper-slide">
                        <div className="collect__data">
                          <div className="collect__cardsContainer">
                            {slide.map((title, id) => (
                              <label key={id} htmlFor={title}>
                                <div
                                  onClick={(e) => {
                                    setSelectedTopicClick(e)
                                    setselectedTopic(title)
                                  }}
                                  htmlFor={title}
                                  className="collect__card"
                                >
                                  <div
                                    className="collect__card__icon"
                                    dangerouslySetInnerHTML={{ __html: topicIcons[title] }}
                                  ></div>
                                  <span className="collect__card__title">{title}</span>
                                  <input
                                    className="collect__card__radio"
                                    type="radio"
                                    name="topicTitle"
                                    value={title}
                                    id={title}
                                    required
                                  ></input>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="swiperTopic-button-next">
                    <svg
                      className="swiper__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z" />
                    </svg>
                  </div>
                  <div className="swiperTopic-button-prev">
                    <svg
                      className="swiper__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" />
                    </svg>
                  </div>

                  {/* <!-- Add Pagination --> */}
                  <div className="swiperTopic-pagination"></div>
                </div>
              </div>
            )}

            {selectedTopic === "مجال آخر" ? (
              <div className="collect__slide swiper-slide">
                <h3 className="collect__title">قم بادخال مجالك الخاص</h3>
                <div className="collect__data">
                  <div className="collect__ContentContainer">
                    <input
                      className="form__input"
                      type="text"
                      name="topicTitle"
                      placeholder="اسم المجال"
                      required
                      onChange={(e) => setselectedTopic(e.target.value)}
                    ></input>

                    <span>سوف نقوم بحفظ مجالك الخاص</span>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="collect__slide swiper-slide">
              <h3 className="collect__title">كم هو سعر الكورس الذي ستقدمه ؟</h3>
              <div className="collect__data">
                <div className="collect__ContentContainer">
                  <input
                    className="form__input"
                    id="priceInput"
                    type="number"
                    name="coursePrice"
                    placeholder="السعر"
                    onChange={(e) => setselectedPrice(e.target.value)}
                    required
                  ></input>
                  <span className="collect__text">
                    إذا لم تحدد سعر الكورس إلى الآن يمكنك اختيار رقم بين 200 و 1500 ج
                  </span>
                </div>
              </div>
            </div>

            <div className="collect__slide swiper-slide">
              <h3 className="collect__title">كم طالب تتوقع ان يشترك معك شهريا ؟</h3>
              <div className="collect__data">
                <div className="collect__ContentContainer">
                  <div className="multi-range-slider">
                    <input type="range"></input>
                    <input
                      name="minStudent"
                      type="range"
                      id="input-left"
                      min="10"
                      max="1000"
                      value={rangeMin}
                      onInput={handleMin}
                    ></input>
                    <input
                      name="maxStudent"
                      type="range"
                      id="input-right"
                      min="10"
                      max="1000"
                      value={rangeMax}
                      onInput={handleMax}
                    ></input>

                    <div className="slider">
                      <div className="track"></div>
                      <div className="range"></div>
                      <div className="thumb left">
                        <div className="tooltip">
                          <span className="tooltiptext">{rangeMin}</span>
                        </div>

                        <svg
                          className="thumb__icon "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z" />
                        </svg>
                      </div>
                      <div className="thumb right">
                        <div className="tooltip">
                          <span className="tooltiptext">{rangeMax}</span>
                        </div>

                        <svg
                          className="thumb__icon "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <span className="collect__text">
                    اختر عدد الطلاب ما بين 10 و 1000 طالب شهريًا وسوف يقوم نظامنا بالتنبؤ بأرباحك
                    لمدة عام قادم وفقًا لبيانات سابقة
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Add Pagination --> */}
          <div className="swiper-pagination"></div>

          <div className="form__btns">
            <div className="swiper-button-prev btn__swip btn__norm--gray">Previous step</div>
            <div className="swiper-button-next btn__swip btn__norm--p">Next step</div>
            <button id="submit" className="btn__swip btn__norm--submit">
              submit
            </button>
          </div>
        </form>
        <div id="waitingone" className="waiting">
          <div className="waiting__head">
            <img src={`${server}/imgs/person.png`} alt="person" className="waiting__img"></img>

            <div className="geers">
              <div className="gear-container">
                <ul className="center-circle">
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                </ul>
                <div className="ring"></div>
              </div>
              <div className="gear-container2">
                <ul className="center-circle2">
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                </ul>
                <div className="ring2"></div>
              </div>
              <div className="gear-container3">
                <ul className="center-circle3">
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                  <li className="tooth"></li>
                </ul>
                <div className="ring3"></div>
              </div>
            </div>
          </div>

          <div className="waiting__content">
            <div className="dot-flashing"></div>

            <span className="waiting__text">جاري تحليل مجالك وأرباحك المتوقعة</span>
          </div>
        </div>
        <div id="waitingtwo" className="waiting">
          <span className="waitingtwo__head">
            هل تعرف كم يحقق أرديت سولس فقط من خلال كورسات اونلاين ؟
          </span>

          <div className="waitingtwo__content">
            <img
              src={`${server}/imgs/waitingtwo.png`}
              alt="person"
              className="waitingtwo__img"
            ></img>

            <div className="waitingtwo__text">
              <div className="waitingtwo__content waitingtwo__text--second">
                شهريًا
                <span className="waitingtwo__text--money"> 120,000$</span>
              </div>

              <br></br>
              <span className="">! أكثر من مليون ونصف جنيه مصري</span>
            </div>
          </div>

          {/* <div className="waiting__head">
            <img src="/person.png" className="waiting__img"></img>
          </div> */}
        </div>
        <div id="waitingthree" className="waiting">
          <div className="card-form">
            <form onSubmit={submitInfo} className="signup">
              <div className="form-title">خبيـــــر أونـــلاين</div>
              <div className="form-body">
                <div className="row">
                  <input id="first" name="lastName" type="text" placeholder="الأسم الأخير" />

                  <input id="second" name="firstName" type="text" placeholder="الأسم الأول" />
                </div>
                <div className="row">
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    name="email"
                    id="email"
                    required
                  ></input>
                </div>
                <div className="row">
                  <input
                    type="tel"
                    pattern="[0-9]+"
                    name="phone"
                    placeholder="رقم تيليجرام / واتساب "
                    id="phone"
                    required
                  ></input>
                </div>

                <div className="row row__check">
                  <div>
                    <label className="check-container">
                      أحب ان يتواصل معي خبير اونلاين عبر الهاتف
                      <input name="callme" type="checkbox" />
                      <span className="checkmark"> </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="rule"></div>
              <div className="form-footer">
                <button className="btn btn--p btn--info btn--round btn__form">
                  <svg
                    className="hero__icon "
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                  </svg>
                  <span className="btn__text">اعرض النتائج</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div id="waitingfour" className="waiting waiting__chart">
          <h3 className="collect__title" style={{ marginTop: "0" }}>
            أرباحك المتوقعة خلال العام المقبل من مجال
          </h3>
          <div className="collect__selected--topic">
            {selectedTopic}

            <div className="tooltipCahartContainer">
              <div className="tooltipChart">
                <svg
                  width="2rem"
                  height="2rem"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="gold"
                    d="M17.09,2.82a8,8,0,0,0-6.68-1.66A8,8,0,0,0,4.14,7.48a8.07,8.07,0,0,0,1.72,6.65A4.54,4.54,0,0,1,7,17v3a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3V17.19A5.17,5.17,0,0,1,18.22,14a8,8,0,0,0-1.13-11.2ZM15,20a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V19h6Zm1.67-7.24A7.13,7.13,0,0,0,15,17H13V14a1,1,0,0,0-2,0v3H9a6.5,6.5,0,0,0-1.6-4.16,6,6,0,0,1,3.39-9.72A6,6,0,0,1,18,9,5.89,5.89,0,0,1,16.67,12.76Z"
                  />
                </svg>
                <span className="tooltipCharttext">
                  اختر المنصات التي تحب أن يكون الكورس الخاص بك عليها
                </span>
              </div>
            </div>
          </div>

          {Object.keys(chartData).length !== 0 ? (
            <Chart id="chart1" chartData={chartData} options={chartOptions1} />
          ) : null}
          {/* <Chart chartData={chartData} /> */}

          <div className="btn__norm btn__norm--p btn__norm--chart-r" onClick={again}>
            كورس آخر
          </div>

          <div className="waiting__chart__btns">
            <a
              target="_blank"
              rel="noreferrer"
              className="btn__norm btn__norm--p btn__norm--chart"
              href="https://khabeer.online/Webinar"
            >
              حول هذه الأرقام إلى حقيقة
            </a>

            <div style={{ width: "23rem", display: "flex", gap: "1rem" }}>
              <div
                id="history"
                onClick={toHistory}
                className="btn__norm btn__norm--p btn__norm--chart disable"
              >
                تاريخ الحسابات
              </div>

              <div
                id="bottom-btn-chart"
                className="btn__norm btn__norm--p btn__norm--chart"
                onClick={again}
              >
                كورس آخر
              </div>
            </div>
          </div>
        </div>

        <div id="waitingfive" className="waiting">
          <div className="history__cardsContainer">
            {calculations.map(
              ({ date, category, topicTitle, calculatedData, coursePrice, students }, id) => (
                <div
                  key={id}
                  onClick={() => {
                    setHistoryChartData({
                      date,
                      category,
                      topicTitle,
                      calculatedData,
                      coursePrice,
                      students,
                    })

                    // console.log("calculatedData", calculatedData)
                    // console.log(s"chartData", chartData)

                    toHistoryChart()
                  }}
                  className="history__card"
                >
                  <span className="history__card__date">{date}</span>
                  <span>Category : {category} </span>
                  <span>Topic : {topicTitle}</span>
                </div>
              )
            )}
          </div>
          <div onClick={toChart} className="btn__norm btn__norm--p btn__back">
            عودة
          </div>
        </div>
        <div id="waitingsix" className="waiting">
          <span className="history__card__date__view">{historyChartData.date}</span>

          <div className="history__head">
            <table className="table table__left table--a1">
              <tbody>
                <tr>
                  <td>Category</td>
                  <td>{historyChartData.category} </td>
                </tr>
                <tr>
                  <td>Topic</td>
                  <td> {historyChartData.topicTitle}</td>
                </tr>
              </tbody>
            </table>
            <table className="table table__right table--a1">
              <tbody>
                <tr>
                  <td>Price</td>
                  <td>{historyChartData.coursePrice}</td>
                </tr>

                <tr>
                  <td>Students</td>
                  <td>{historyChartData.students}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {Object.keys(historyChartData.calculatedData).length !== 0 ? (
            <Chart chartData={historyChartData.calculatedData} options={chartOptions2} />
          ) : null}
          <div onClick={toHistoryFromChart} className="btn__norm btn__norm--p btn__back">
            عودة
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupForm
