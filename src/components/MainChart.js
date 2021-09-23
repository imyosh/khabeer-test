import React from "react"
import Chart from "./Chart"

const MainChart = ({
  chartData,
  selectedTopic,
  avgRevenue,
  setAvgRevenue,
  toHistory,
  again,
  toshow,
}) => {
  let legends = {
    0: "udemy",
    1: "hotmart",
    2: "teachableAndThinkifc",
    3: "voomly",
    4: "voomlyPlusHosting",
  }

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

      events: {
        legendClick: function (chartContext, seriesIndex, config) {
          // console.log(seriesIndex)
          // console.log(toshow)

          if (!(seriesIndex in toshow)) {
            toshow[seriesIndex] = legends[seriesIndex]
          } else {
            delete toshow[seriesIndex]
          }
          let total = 0
          for (let i in toshow) {
            total = total + chartData.avgs[toshow[i]]
          }

          total = Object.keys(toshow).length === 0 ? 0 : total / Object.keys(toshow).length

          // console.log(toshow)
          setAvgRevenue(
            `${Math.round(total)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
          )
        },
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
      window.screen.width <= 920
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
  return (
    <div id="waitingfour" style={{ overflowY: "auto" }} className="waiting waiting__chart">
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
      {/* <Chart options={chartOptions1} chartData={chartData} /> */}

      <div className="chart__total">
        <h3 className=" chart__total--text">متوسط ارباحك السنوية</h3>

        <div className="chart__total--text--price" style={{ fontSize: "4.5rem" }}>
          ج. مصري
          <span id="revenue" className="waitingtwo__text--money">
            {avgRevenue}
          </span>
        </div>
      </div>

      <div className="btn__norm btn__norm--p btn__norm--chart-r" onClick={again}>
        كورس آخر
      </div>

      <div className="waiting__chart__btns">
        <a
          target="_blank"
          rel="noreferrer"
          className="btn__norm btn__norm--p btn__norm--chart btn__norm--submit"
          href="https://khabeer.online/Webinar"
          style={{ width: "30rem", margin: "0" }}
        >
          حول هذه الأرقام إلى حقيقة
        </a>

        <div style={{ display: "flex", gap: "1rem" }}>
          <div
            id="history"
            onClick={toHistory}
            className="btn__norm btn__norm--p btn__norm--chart disable"
            style={{ width: "11rem" }}
          >
            تاريخ الحسابات
          </div>

          <div
            id="bottom-btn-chart"
            className="btn__norm btn__norm--p btn__norm--chart"
            onClick={again}
            style={{ width: "11rem" }}
          >
            كورس آخر
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainChart
