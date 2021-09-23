import React from "react"

const HistoryList = ({ calculations, setHistoryChartData, toHistoryChart, toChart }) => {
  return (
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
  )
}

export default HistoryList
