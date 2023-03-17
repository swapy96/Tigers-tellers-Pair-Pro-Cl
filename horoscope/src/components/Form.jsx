import axios from "axios";
import "./Form.scss";
import { useState } from "react";
const URL = "http://localhost:9898";

function Form() {
  const [sign, setSign] = useState();
  const [day, setDay] = useState();

  const params = URLSearchParams;
  console.log("params: ", params);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("e: ", event.target.value);

    axios
      .get(`${URL}?sign=${sign}&day=${day}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  console.log("sign: ", sign);

  return (
    <>
    <h1>Horoscope</h1>
      <div className="form__container">
        <form onClick={handleSubmit} className="form__form">
          <label className="form__label">
            Your name:&nbsp;&nbsp;
            <input type="text" className="form__input" />
          </label>
          <br />
          <label className="form__label">
            Zodiac Sign:
            <select
              name="select"
              className="form__select"
              value={sign}
              onChange={(e) => {
                setSign(e.target.value);
              }}
            >
              <option value="">-- Please select --</option>
              <option value="aries">Aries</option>
              <option value="taurus">Taurus</option>
              <option value="gemini">Gemini</option>
              <option value="cancer">Cancer</option>
              <option value="leo">Leo</option>
              <option value="virgo">Virgo</option>
              <option value="libra">Libra</option>
              <option value="scorpio">Scorpio</option>
              <option value="sagittarius">Sagittarius</option>
              <option value="capricorn">Capricorn</option>
              <option value="aquarius">Aquarius</option>
              <option value="pisces">Pisces</option>
            </select>
          </label>
          <div className="form__radio-group">
            <div className="form__radio">
              <label htmlFor="option1" className="form__radio-label">
                Yesterday
              </label>
              <input
                type="radio"
                id="option1"
                name="option"
                value="option1"
                className="form__radio-input"
              />
            </div>
            <div className="form__radio">
              <label htmlFor="option2" className="form__radio-label">
                Today
              </label>
              <input
                type="radio"
                id="option2"
                name="option"
                value="option2"
                className="form__radio-input"
              />
            </div>
            <div className="form__radio">
              <label htmlFor="option3" className="form__radio-label">
                Tomorrow
              </label>

              <input
                type="radio"
                id="option3"
                name="option"
                value="option3"
                className="form__radio-input"
              />
            </div>
          </div>
          <br />
          <button type="submit" className="form__submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
