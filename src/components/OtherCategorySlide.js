import React from "react"

const OtherCategorySlide = ({ setOtherSelectedCategory, setselectedTopic }) => {
  return (
    <div className="collect__slide swiper-slide">
      <h3 className="collect__title">قم بادخال مجالك الخاص</h3>
      <div className="collect__data">
        <div className="collect__ContentContainer">
          <input
            className="form__input"
            type="text"
            name="category"
            placeholder="فئة المجال"
            required
            onChange={(e) => setOtherSelectedCategory(e.target.value)}
          ></input>

          <input
            className="form__input"
            type="text"
            name="topicTitle"
            placeholder="اسم المجال"
            required
            onChange={(e) => setselectedTopic(e.target.value)}
          ></input>

          <span className="collect__text">سوف نقوم بحفظ مجالك الخاص</span>
        </div>
      </div>
    </div>
  )
}

export default OtherCategorySlide
