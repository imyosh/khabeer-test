import React from "react"

const TopicChoiceSlide = ({
  frontendData,
  selectedCategory,
  setSelectedTopicClick,
  setselectedTopic,
  topicIcons,
}) => {
  return (
    <div className="collect__slide swiper-slide">
      <h3 className="collect__title">قم بأختيار مجالك</h3>

      <div className="swiperTopicss">
        <div id="parentLableContainer" className="swiper-wrapper">
          {frontendData[selectedCategory]["subcategories"].map((slide, id) => (
            <div key={id} className="swiper-slide">
              <div className="collect__data">
                <div className="collect__cardsContainer">
                  {slide.map((title, id) => (
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
          ))}
        </div>

        <div className="swiperTopic-button-next">
          <svg className="swiper__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z" />
          </svg>
        </div>
        <div className="swiperTopic-button-prev">
          <svg
            className="swiper__icon"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
          >
            <path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" />
          </svg>
        </div>

        {/* <!-- Add Pagination --> */}
        <div className="swiperTopic-pagination"></div>
      </div>
    </div>
  )
}

export default TopicChoiceSlide
