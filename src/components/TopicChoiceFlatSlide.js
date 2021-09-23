import React from "react"

const TopicChoiceFlatSlide = ({
  frontendData,
  selectedCategory,
  topicIcons,
  setselectedTopic,
  setSelectedTopicClick,
}) => {
  return (
    <div className="collect__slide swiper-slide">
      <h3 className="collect__title">قم بأختيار مجالك</h3>

      <div className="collect__data">
        <div id="parentLableContainer" className="collect__cardsContainer">
          {frontendData[selectedCategory]["subcategories"].flat().map((title, id) => (
            <label key={id} htmlFor={title}>
              <div
                onClick={(e) => {
                  setSelectedTopicClick(e)
                  setselectedTopic(title)
                }}
                htmlFor={title}
                className="collect__card"
              >
                <div
                  className="collect__card__icon"
                  dangerouslySetInnerHTML={{ __html: topicIcons[title] }}
                ></div>
                <span className="collect__card__title">{title}</span>
                <input
                  className="collect__card__radio"
                  type="radio"
                  name="topicTitle"
                  value={title}
                  id={title}
                  required
                ></input>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopicChoiceFlatSlide
