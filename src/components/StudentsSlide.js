import React from "react"

const StudentsSlide = ({ handleMin, handleMax, rangeMin, rangeMax }) => {
  return (
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
            اختر عدد الطلاب ما بين 10 و 1000 طالب شهريًا وسوف يقوم نظامنا بالتنبؤ بأرباحك لمدة عام
            قادم وفقًا لبيانات سابقة
          </span>
        </div>
      </div>
    </div>
  )
}

export default StudentsSlide
