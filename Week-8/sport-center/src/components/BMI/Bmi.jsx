import './bmi.css'

function Bmi() {
  return (
    <section id="bmi">
      <div className="container">
        <div className="bmi">
          <div className="calculator">
            <h1>BMI Calculator</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              pariatur vero consequuntur ratione quisquam dolor maxime error?
              Aliquam iste veritatis praesentium voluptate dolores, nam eos
              magni necessitatibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              pariatur vero consequuntur ratione quisquam dolor maxime error?
              Aliquam iste veritatis praesentium voluptate dolores, nam eos
              magni.
            </p>
            <div className="inputs">
              <span>
                <input
                  className="input"
                  id="height"
                  type="number"
                  name="height"
                  placeholder="Your Height"
                />
                cm
              </span>
              <span>
                <input
                  className="input"
                  id="weigth"
                  type="number"
                  name="weigth"
                  placeholder="Your Weigth"
                />
                kg
              </span>
            </div>
          </div>
          <div className="bmi-img">
            <p>
              Your BMI: <span className="bmi-value"></span>
            </p>
            <img src="../../src/assets/bmi-index.jpg" alt="bmi-index" />
            <div className="bmi-triangel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bmi;
