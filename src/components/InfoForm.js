import React from "react"

const InfoForm = ({ submitInfo }) => {
  return (
    <div id="waitingthree" className="waiting">
      <div className="card-form">
        <form onSubmit={submitInfo} className="signup">
          <div className="form-title">خبيـــــر أونـــلاين</div>
          <div className="form-body">
            <div className="row">
              <input id="first" name="lastName" type="text" placeholder="الأسم الأخير" />

              <input id="second" name="firstName" type="text" placeholder="الأسم الأول" />
            </div>
            <div className="row">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                name="email"
                id="email"
                required
              ></input>
            </div>
            <div className="row">
              <input
                type="tel"
                pattern="[0-9]+"
                name="phone"
                placeholder="رقم تيليجرام / واتساب "
                id="phone"
                required
              ></input>
            </div>

            <div className="row row__check">
              <div>
                <label className="check-container">
                  أحب ان يتواصل معي خبير اونلاين عبر الهاتف
                  <input name="callme" type="checkbox" />
                  <span className="checkmark"> </span>
                </label>
              </div>
            </div>
          </div>
          <div className="rule"></div>
          <div className="form-footer">
            <button className="btn btn--p btn--info btn--round btn__form">
              <svg
                className="hero__icon "
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
              </svg>
              <span className="btn__text">اعرض النتائج</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InfoForm
