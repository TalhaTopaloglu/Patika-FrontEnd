import './footer.css'

function Footer() {
  return (
    <footer id="footer">
        <div className="container">
            <div className="footer-logo-img">
                <img src="img/logo.png" alt="" />
            </div>
            <div className="footer-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fugiat quia. Debitis repellendus
                    itaque delectus fuga harum explicabo, accusantium exercitationem obcaecati aliquid quas. Ipsam,
                    possimus! Eos odio quam quaerat atque Placeat doloribus maiores sunt minima est.</p>
            </div>
            <div className="footer-content">
                <div className="information">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Classes</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="helpful-links">
                    <h3>Helpful Links</h3>
                    <ul>
                        <li><a href="">Services</a></li>
                        <li><a href="">Supports</a></li>
                        <li><a href="">Terms & Condition</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer