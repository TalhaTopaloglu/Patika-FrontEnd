import "./classes.css";

// eslint-disable-next-line react/prop-types
function Class({ showClass }) {

  if (showClass == "yoga") {
    return (
      <>
        <div className="class-info">
          <h4>Why are your Yoga?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam et
            aliquid eos, modi cum quae maiores ipsam facere magnam sunt iste
            consectetur eum cumque rerum magni voluptatibus! Quibusdam, cumque
            similique.
          </p>
          <h4>When Comes Yoga Your Tİme</h4>
          <ul>
            <li>Saturday-Sunday:8.00am - 10.00am</li>
            <li>Moday-Tuesday:10.00am - 12.00pm</li>
            <li>Wednesday-Friday:3.00pm - 6.00pm</li>
          </ul>
        </div>
        <div className="class-img">
          <img src="../../src/assets/yoga.jpg" alt="" />
        </div>
      </>
    );
  } else if (showClass == "streching") {
    return (
      <>
        <div className="class-info ">
          <h4>Why are your Streching?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam et
            aliquid eos, modi cum quae Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Velit, laboriosam? Aperiam, inventore. maiores
            ipsam facere magnam{" "}
          </p>
          <h4>When Comes Streching Your Tİme</h4>
          <ul>
            <li>Monday-Sunday:8.00am - 10.00am</li>
            <li>Wednesday-Thursday:10.00am - 12.00pm</li>
            <li>Fridaye-Saturday:3.00pm - 6.00pm</li>
          </ul>
        </div>
        <div className="class-img">
          <img src="../../src/assets/stret.webp" alt="" />
        </div>
      </>
    );
  } else if (showClass == "solo") {
    return (
      <>
        <div className="class-info ">
          <h4>Why are your Solo?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam et
            aliquid eos, modi cum quae maiores ipsam facere magnam.
          </p>
          <h4>When Comes Solo Your Tİme</h4>
          <ul>
            <li>Saturday-Sunday:2.00pm - 4.00pm</li>
            <li>Moday-Tuesday:4.00am - 6.00pm</li>
            <li>Wednesday-Friday:9.00pm - 12.00pm</li>
          </ul>
        </div>
        <div className="class-img">
          <img src="../../src/assets/solo.jpg" alt="" />
        </div>
      </>
    );
  } else if (showClass == "group") {
    return (
      <>
        <div className="class-img">
          <img width="480" src="../../src/assets/group.webp" alt="Yoga" />
        </div>
        <div className="class-info ">
          <h4>Why are your Group?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam et
            aliquid eos, modi cum quae maiores ipsam facere magnam sunt Clicking
            generator on the internet.
          </p>
          <h4>When Comes Group Your Tİme</h4>
          <ul>
            <li>Saturday-Sunday:10.00am - 12.00am</li>
            <li>Moday-Tuesday:12.00am - 02.00am</li>
            <li>Wednesday-Friday:6.00pm - 9.00pm</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Class;
