import React from "react"

const PriceSlide = ({ setselectedPrice }) => {
  return (
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
  )
}

export default PriceSlide
