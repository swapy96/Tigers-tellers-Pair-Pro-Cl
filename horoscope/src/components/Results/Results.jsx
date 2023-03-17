import "./Results.scss";
import aries from "../../images/aries-02.svg";
// import aquarius from "../../images/aquarius-02.svg";
// import cancer from "../../images/cancer-02.svg";
// import capricorn from "../../images/capricorn-02.svg";
// import gemini from "../../images/gemini-02.svg";
// import leo from "../../images/leo-02.svg";
// import libra from "../../images/libra-02.svg";
// import pisces from "../../images/pisces-02.svg";
// import sagitarius from "../../images/sagitarius-02.svg";
// import scorpio from "../../images/scorpio-02.svg";
// import taurus from "../../images/taurus-02.svg";
// import virgo from "../../images/virgo-02.svg";

function Results({ result }) {
  console.log(Results);
  return (
    <div className="result__container">
      <form className="result__form">
        <div>
          <img src={aries} alt="aries" />
        </div>
        <div>
          <p>
            {/* Sign: {result.sign} <br />
            Day: {result.day} <br /> */}
            <b>Date:</b> {result.date_range} <br />
            <b>Current Date:</b> {result.current_date} <br />
            <b>Description:</b> {result.description} <br />
            <b>Compatibility:</b> {result.compatibility} <br />
            <b>Mood:</b> {result.mood} <br />
            <b>Color:</b> {result.color} <br />
            <b>Lucky Number:</b> {result.lucky_number} <br />
            <b>Lucky Time:</b> {result.lucky_time} <br />
          </p>
        </div>
      </form>
    </div>
  );
}

export default Results;
