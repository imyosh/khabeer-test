import React from "react"

let server = "https://khabeer-webapp.herokuapp.com"

const Waittwo = () => {
  return (
    <div id="waitingtwo" className="waiting">
      <span className="waitingtwo__head">
        هل تعرف كم يحقق أرديت سولس فقط من خلال كورسات اونلاين ؟
      </span>

      <div className="waitingtwo__content">
        <img src={`${server}/imgs/waitingtwo.png`} alt="person" className="waitingtwo__img"></img>

        <div className="waitingtwo__text">
          <div className="waitingtwo__content waitingtwo__text--second">
            شهريًا
            <span className="waitingtwo__text--money"> 120,000$</span>
          </div>

          <br></br>
          <span className="jos_font">! أكثر من مليون ونصف جنيه مصري</span>
        </div>
      </div>
    </div>
  )
}

export default Waittwo
