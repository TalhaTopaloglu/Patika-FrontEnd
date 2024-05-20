import './classes.css'

function Classes() {
  return (
    <section id="classes">
        <div className="container">
            <div className="section-title">
                <h2>OUR CLASSES</h2>
                <span></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur neque dolores
                    corrupti numquam magnam temporibus.</p>
            </div>
            <div className="classes-buttons">
                <button id="yoga" className="classes-button">Yoga</button>
                <button id="group" className="classes-button ">Group</button>
                <button id="solo" className="classes-button">Solo</button>
                <button id="streching" className="classes-button">Streching</button>
            </div>
            <div className="classes-info">
                <div className="class-info">
                    <h4>Why are your Yoga?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam et aliquid eos, modi cum quae
                        maiores ipsam facere magnam sunt iste consectetur eum cumque rerum magni voluptatibus!
                        Quibusdam, cumque similique.</p>
                    <h4>When Comes Yoga Your Tİme</h4>
                    <ul>
                        <li>Saturday-Sunday:8.00am - 10.00am</li>
                        <li>Moday-Tuesday:10.00am - 12.00pm</li>
                        <li>Wednesday-Friday:3.00pm - 6.00pm</li>
                    </ul>
                </div>
                <div className="class-img">
                    <img src="../../src/assets/yoga.jpg" alt="" />
                    {/* <img width="480" src="img/yoga.jpg" alt="Yoga"> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Classes