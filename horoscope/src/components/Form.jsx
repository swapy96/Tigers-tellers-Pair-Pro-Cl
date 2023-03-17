import './Form.scss';

function signForm () {

  return (
    <div className="form__container">
      <form className="form__form">
        <label className="form__label">
          Nombre
          <input type="text" className="form__input" />
        </label>
        <br />
        <label className="form__label">
          Zodiac Sign:
          <select className="form__select">
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
        <div class="form__radio-group">
          <div className='form__radio'>
      <label for="option1" class="form__radio-label">Yesterday</label>
      <input type="radio" id="option1" name="option" value="option1" class="form__radio-input" />
      </div>
      <div className='form__radio'>
      <label for="option2" class="form__radio-label">Today</label>
      <input type="radio" id="option2" name="option" value="option2" class="form__radio-input" />
      </div>
      <div className='form__radio'>
      <label for="option3" class="form__radio-label">Tomorrow</label>
     
      <input type="radio" id="option3" name="option" value="option3" class="form__radio-input" />
      </div>
    </div>
        <br />
        <button type="submit" class="form__submit-button">Submit</button>
      </form>
    </div>
  );
}

export default signForm;
