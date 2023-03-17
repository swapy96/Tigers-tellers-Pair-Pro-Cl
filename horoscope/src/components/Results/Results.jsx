import "./Results.scss";
import aries from "../../images/aries-02.svg";
import aquarius from "../../images/aquarius-02.svg";
import cancer from "../../images/cancer-02.svg";
import capricorn from "../../images/capricorn-02.svg";
import gemini from "../../images/gemini-02.svg";
import leo from "../../images/leo-02.svg";
import libra from "../../images/libra-02.svg";
import pisces from "../../images/pisces-02.svg";
import sagitarius from "../../images/sagitarius-02.svg";
import scorpio from "../../images/scorpio-02.svg";
import taurus from "../../images/taurus-02.svg";
import virgo from "../../images/virgo-02.svg";

function Results() {
   return (
      <div className="result__container">
         <h1>Aries</h1>
         <form className="result__form">
            <div>
               <img src={aries} alt="aries" />
            </div>
            <p>
               Every day is taco ipsum tuesday. Does guac cost extra? CARNITAS!!
               It’s taco time all the time. Ooh, with diced onions and a pinch
               of cilantro. Yeah, apparently the taco shack was robbed. They
               left the money but took the tacos. Carne asada on corn tortillas.
               Yeah, apparently the taco shack was robbed. They left the money
               but took the tacos. I’ve been following that taco truck around
               all day. It’s raining tacos, from out of the sky, tacos, don’t
               even ask why. Pico de gallo, on the side please.
            </p>
            {/* <div>
                  Current Date: {this.state.json.current_date} <br />
                  Compatibility: {this.state.json.compatibility} <br />
                  Lucky Number: {this.state.json.lucky_number} <br />
                  Lucky Time: {this.state.json.lucky_time} <br />
                  Color: {this.state.json.color} <br />
                  Date Range: {this.state.json.date_range} <br />
                  Mood: {this.state.json.mood} <br />
                  Description: {this.state.json.description} <br />
               </div> */}
            <button type="submit" className="result__submit-button">
               Return
            </button>
         </form>
      </div>
   );
}

export default Results;
