import React from "react"
import Gears from "./Gears"

let server = "https://khabeer-webapp.herokuapp.com"

const Waitone = () => {
  return (
    <div id="waitingone" className="waiting">
      <div className="waiting__head">
        <img src={`${server}/imgs/person.png`} alt="person" className="waiting__img"></img>
        <Gears />
      </div>

      <div className="waiting__content">
        <div className="dot-flashing"></div>
        <span className="waiting__text">جاري تحليل مجالك وأرباحك المتوقعة</span>
      </div>
    </div>
  )
}

export default Waitone
