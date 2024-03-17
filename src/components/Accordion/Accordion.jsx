import "./Accordion.css";
const Accordion = () => {
  return (
      <section className="accordion accordion--radio">
        <div className="tab">
          <input type="radio" name="accordion-2" id="rd1" />
          <label for="rd1" className="tab__label">
            Best useful links?
          </label>
          <div className="tab__content">
            <p>
              Get the best villa website template in HTML CSS and Bootstrap for
              your business. TemplateMo provides you the best free CSS templates
              in the world. Please tell your friends about it.
            </p>
          </div>
        </div>
        <div className="tab">
          <input type="radio" name="accordion-2" id="rd2" />
          <label for="rd2" className="tab__label">
            How does this work?
          </label>
          <div className="tab__content">
            <p>
              Dolor almesit amet, consectetur adipiscing elit, sed doesn't
              eiusmod tempor incididunt ut labore consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="tab">
          <input type="radio" name="accordion-2" id="rd3" />
          <label for="rd3" className="tab__label">
            How does this work?
          </label>
          <div className="tab__content">
            <p>
              Dolor almesit amet, consectetur adipiscing elit, sed doesn't
              eiusmod tempor incididunt ut labore consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="tab">
          <input type="radio" name="accordion-2" id="rd4" />
          <label for="rd4" className="tab__close">
            Close open tab &times;
          </label>
        </div>
      </section>
  );
};

export default Accordion;
