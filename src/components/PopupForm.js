import React, { useEffect, useState } from "react"
import axios from "axios"

import Waitone from "./Waitone"
import Waittwo from "./Waittwo"
import InfoForm from "./InfoForm"
import MainChart from "./MainChart"
import HistoryList from "./HistoryList"
import HistoryChart from "./HistoryChart"
import PriceSlide from "./PriceSlide"
import StudentsSlide from "./StudentsSlide"
import TopicChoiceSlide from "./TopicChoiceSlide"
import TopicChoiceFlatSlide from "./TopicChoiceFlatSlide"
import OtherCategorySlide from "./OtherCategorySlide"
import CategoryChoiceSlide from "./CategoryChoiceSlide"

let server = "https://khabeer-webapp.herokuapp.com"
// let server = "http://127.0.0.1:8000"

function PopupForm() {
  const [rangeMin, setRangeMin] = useState("100")
  const [rangeMax, setRangeMax] = useState("500")

  const [userData, setUserData] = useState({})

  const [calculations, setCalculations] = useState([])

  const [categoryIcons, setCategoryIcons] = useState({})
  const [topicIcons, setTopicIcons] = useState({})

  const [frontendData, setFrontendData] = useState({ Programming: { icon: "", subcategories: [] } })
  const [chartData, setChartData] = useState({})

  const [avgRevenue, setAvgRevenue] = useState(0)

  const [historyChartData, setHistoryChartData] = useState({ calculatedData: {} })

  const [selectedCategory, setselectedCategory] = useState("Programming")
  const [selectedTopic, setselectedTopic] = useState("Programming Fundamentals")
  const [selectedPrice, setselectedPrice] = useState(0)

  const [otherSelectedCategory, setOtherSelectedCategory] = useState("")

  const [toshow] = useState({ 0: "udemy" })

  const handleMin = (event) => {
    setRangeMin(event.target.value)
  }

  const handleMax = (event) => {
    setRangeMax(event.target.value)
  }

  useEffect(() => {
    if (Object.keys(chartData).length !== 0) {
      window.ApexCharts.exec("chart1", "hideSeries", "Hotmart")
      window.ApexCharts.exec("chart1", "hideSeries", "Teachable/Thinkifc")
      window.ApexCharts.exec("chart1", "hideSeries", "Voomly")
      window.ApexCharts.exec("chart1", "hideSeries", "Voomly+Hosting")
    }
  }, [chartData])

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
    onlyExternal: true,
    noSwiping: true,
    noSwipingClass: 'swiper-slide',

    allowTouchMove: false,
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
        setAvgRevenue(res.data.avgs["udemy"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        // console.log("chart data :", res.data)

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
                  calculatedData: res.data,
                  students: Math.ceil((Number(rangeMin) + Number(rangeMax)) / 2),
                }

                let toSubmit = userData
                toSubmit.calculations = [datapoint]

                // console.log(datapoint)
                formProps.calculations = [datapoint]

                let p4 = document.getElementById("waitingfour")
                let p3 = document.getElementById("waitingthree")

                p3.classList.remove("nextPage")
                p4.classList.add("nextPage")

                axios.post(`${server}/usersdata`, toSubmit).then((res) => {
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
                <CategoryChoiceSlide
                  frontendData={frontendData}
                  setSelected={setSelected}
                  setselectedCategory={setselectedCategory}
                  categoryIcons={categoryIcons}
                />
              )}
            </div>

            {selectedCategory === "فئة أخرى" ? (
              <OtherCategorySlide
                setOtherSelectedCategory={setOtherSelectedCategory}
                setselectedTopic={setselectedTopic}
              />
            ) : window.screen.width <= 703 || window.screen.height <= 644 ? (
              <TopicChoiceFlatSlide
                frontendData={frontendData}
                selectedCategory={selectedCategory}
                topicIcons={topicIcons}
                setSelectedTopicClick={setSelectedTopicClick}
                setselectedTopic={setselectedTopic}
              />
            ) : (
              <TopicChoiceSlide
                frontendData={frontendData}
                selectedCategory={selectedCategory}
                topicIcons={topicIcons}
                setSelectedTopicClick={setSelectedTopicClick}
                setselectedTopic={setselectedTopic}
              />
            )}

            <PriceSlide setselectedPrice={setselectedPrice} />

            <StudentsSlide
              handleMin={handleMin}
              handleMax={handleMax}
              rangeMin={rangeMin}
              rangeMax={rangeMax}
            />
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

        <Waitone />

        <Waittwo />

        <InfoForm submitInfo={submitInfo} />

        <MainChart
          chartData={chartData}
          selectedTopic={selectedTopic}
          avgRevenue={avgRevenue}
          toshow={toshow}
          setAvgRevenue={setAvgRevenue}
          toHistory={toHistory}
          again={again}
        />

        <HistoryList
          calculations={calculations}
          setHistoryChartData={setHistoryChartData}
          toHistoryChart={toHistoryChart}
          toChart={toChart}
        />

        <HistoryChart historyChartData={historyChartData} toHistoryFromChart={toHistoryFromChart} />
      </div>
    </div>
  )
}

export default PopupForm
