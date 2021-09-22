import React from "react"
import Chart from "react-apexcharts"

// var chartData = {
//   avgs: {
//     hotmart: 22363,
//     teachableAndThinkifc: 2143,
//     udemy: 26231,
//     voomly: 2280,
//     voomlyPlusHosting: 2193,
//   },
//   hotmartData: [
//     [1, 18853],
//     [2, 22276],
//     [3, 20848],
//     [4, 22402],
//     [5, 22195],
//     [6, 23981],
//     [7, 22166],
//     [8, 22756],
//     [9, 23966],
//     [10, 21890],
//     [11, 24148],
//     [12, 22873],
//   ],
//   teachableAndThinkifcData: [
//     [1, 21491],
//     [2, 25347],
//     [3, 23630],
//     [4, 25386],
//     [5, 25122],
//     [6, 27139],
//     [7, 25035],
//     [8, 25682],
//     [9, 27038],
//     [10, 24643],
//     [11, 27191],
//     [12, 25713],
//   ],
//   udemyData: [
//     [1, 22381],
//     [2, 26323],
//     [3, 24549],
//     [4, 26345],
//     [5, 26069],
//     [6, 28131],
//     [7, 25970],
//     [8, 26629],
//     [9, 28013],
//     [10, 25556],
//     [11, 28160],
//     [12, 26643],
//   ],
//   voomlyData: [
//     [1, 23036],
//     [2, 27105],
//     [3, 25245],
//     [4, 27101],
//     [5, 26809],
//     [6, 28939],
//     [7, 26693],
//     [8, 27369],
//     [9, 28795],
//     [10, 26244],
//     [11, 28934],
//     [12, 27357],
//   ],
//   voomlyPlusHostingData: [
//     [1, 22057],
//     [2, 25999],
//     [3, 24225],
//     [4, 26021],
//     [5, 25745],
//     [6, 27807],
//     [7, 25646],
//     [8, 26305],
//     [9, 27689],
//     [10, 25232],
//     [11, 27836],
//     [12, 26319],
//   ],
// }

const AChart = ({ chartData, options }) => {
  // console.log(chartData)
  return (
    <Chart
      options={options}
      series={[
        {
          name: "Udemy",
          data: chartData.udemyData,
        },
        {
          name: "Hotmart",
          data: chartData.hotmartData,
        },

        {
          name: "Teachable/Thinkifc",
          data: chartData.teachableAndThinkifcData,
        },

        {
          name: "Voomly",
          data: chartData.voomlyData,
        },
        {
          name: "Voomly+Hosting",
          data: chartData.voomlyPlusHostingData,
        },
      ]}
      type="area"
      width="91%"
      height="400"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        marginBottom: "2rem",
        width: "100%",
      }}
    />
  )
}

export default AChart
