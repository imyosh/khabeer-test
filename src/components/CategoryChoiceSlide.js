import React from "react"

const CategoryChoiceSlide = ({ frontendData, setSelected, setselectedCategory, categoryIcons }) => {
  return (
    <>
      <h3 className="collect__title">قم بأختيار فئة</h3>
      <div className="collect__data">
        <div id="parentLableContainerCategory" className="collect__cardsContainer">
          {Object.keys(frontendData).map((title, id) => (
            <label key={id} htmlFor={title}>
              <div
                onClick={(e) => {
                  setSelected(e)
                  setselectedCategory(title)
                }}
                htmlFor={title}
                className="collect__card"
              >
                <div
                  className="collect__card__icon"
                  dangerouslySetInnerHTML={{ __html: categoryIcons[title] }}
                ></div>
                <span className="collect__card__title">{title}</span>
                <input
                  className="collect__card__radio"
                  type="radio"
                  name="category"
                  value={title}
                  id={title}
                  required
                ></input>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoryChoiceSlide
