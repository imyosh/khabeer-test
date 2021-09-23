import React from "react"
import Chart from "./Chart"

const HistoryChart = ({ historyChartData, toHistoryFromChart }) => {
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
  )
}

export default HistoryChart
