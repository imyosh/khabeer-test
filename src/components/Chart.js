import React from "react"
import Chart from "react-apexcharts"

// var chartData = {
//   udemyData: [
//     [1, 128040],
//     [2, 140844],
//     [3, 154928],
//     [4, 170421],
//     [5, 195984],
//     [6, 225382],
//     [7, 259189],
//     [8, 298067],
//     [9, 357681],
//     [10, 429217],
//     [11, 515061],
//     [12, 618073],
//   ],
//   hotmartData: [
//     [1, 116226],
//     [2, 127848],
//     [3, 140633],
//     [4, 154696],
//     [5, 177901],
//     [6, 204586],
//     [7, 235274],
//     [8, 270565],
//     [9, 324678],
//     [10, 389614],
//     [11, 467537],
//     [12, 561044],
//   ],
//   thinkificData: [
//     [1, 125056],
//     [2, 137562],
//     [3, 151318],
//     [4, 166450],
//     [5, 191418],
//     [6, 220130],
//     [7, 253150],
//     [8, 291123],
//     [9, 349347],
//     [10, 419217],
//     [11, 503060],
//     [12, 603672],
//   ],
//   teachableData: [
//     [1, 125056],
//     [2, 137562],
//     [3, 151318],
//     [4, 166450],
//     [5, 191418],
//     [6, 220130],
//     [7, 253150],
//     [8, 291123],
//     [9, 349347],
//     [10, 419217],
//     [11, 503060],
//     [12, 603672],
//   ],
//   voomlyData: [
//     [1, 61643],
//     [2, 67808],
//     [3, 74589],
//     [4, 82048],
//     [5, 94355],
//     [6, 108508],
//     [7, 124785],
//     [8, 143502],
//     [9, 172203],
//     [10, 206643],
//     [11, 247972],
//     [12, 297567],
//   ],
//   voomlyPlusHostingData: [
//     [1, 21109],
//     [2, 23219],
//     [3, 25541],
//     [4, 28096],
//     [5, 32310],
//     [6, 37157],
//     [7, 42730],
//     [8, 49140],
//     [9, 58968],
//     [10, 70761],
//     [11, 84914],
//     [12, 101897],
//   ],
// }

const AChart = ({ chartData, options }) => {
  return (
    <Chart
      options={options}
      series={[
        {
          name: "udemy",
          data: chartData.udemyData,
        },
        {
          name: "hotmart",
          data: chartData.hotmartData,
        },
        {
          name: "thinkific",
          data: chartData.thinkificData,
        },
        {
          name: "teachable",
          data: chartData.teachableData,
        },

        {
          name: "voomly",
          data: chartData.voomlyData,
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
