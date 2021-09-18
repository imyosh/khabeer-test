// import "./index.css"
import React from "react"

import PopupForm from "./components/PopupForm"
function App() {
  const openForm = () => {
    if (navigator.onLine) document.getElementById("model").classList.add("open")
    else alert("pleas check your internt connection")
  }

  return (
    <div className="App">
      <div className="hero__img"></div>
      <div className="hero__content">
        <h1 className="hero__header">Khabeer Online</h1>
        <span className="hero__text">توقع ارباحك من الكورسات على الانترنت مجاناً</span>

        <button onClick={openForm} className="btn btn--pink btn--round">
          <svg
            className="hero__icon "
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
          </svg>
          <span className="btn__text">أبدأ الآن</span>
        </button>
      </div>
      <PopupForm />
    </div>
  )
}

export default App
