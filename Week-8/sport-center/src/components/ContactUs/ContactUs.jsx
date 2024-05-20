import './contactUs.css'

function ContactUs() {
  return (
    <section id="contact-us">
        <div className="container">
            <div className="section-title">
                <h2>CONTACT US</h2>
                <span></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur neque dolores
                    corrupti numquam magnam temporibus.</p>
            </div>
            <div className="contact-us">
                <div className="contact-content">
                    <div className="info">
                        <div className="number">
                            <h4>Mobile Number</h4>
                            <p>+135 775 721 4442</p>
                        </div>
                        <div className="email">
                            <h4>Email Address</h4>
                            <p>demo@demo.com</p>
                        </div>
                    </div>
                    <div className="contact">
                        <h3>Make An Appointment</h3>
                        <input className="contact-item" placeholder="Your Name" type="text" />
                        <input className="contact-item" placeholder="Your Email" type="text" />
                        <textarea className="contact-item" placeholder="Your Message" name="" id="" cols="10"
                            rows="10"></textarea>
                    </div>
                </div>
                <div className="map-content">
                    <iframe width="100%" height="100%"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                            href="https://www.gps.ie/">gps tracker sport</a></iframe>
                </div >
            </div>
        </div>
    </section>
  )
}

export default ContactUs