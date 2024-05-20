import "./header.css";

function Header() {

  


  return (
    <section id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img
              src="\src\assets\logo.png"
              alt=""
            />
          </div>
          <div className="navbar">
            <ul className="navbar-items">
              <li className="navbar-item">
                <a className="close-menu" href="#hero">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a className="close-menu" href="#classes">
                  Classes
                </a>
              </li>
              <li className="navbar-item">
                <a className="close-menu" href="#trainers">
                  Trainers
                </a>
              </li>
              <li className="navbar-item">
                <a className="close-menu" href="#review">
                  Review
                </a>
              </li>
              <li className="navbar-item">
                <a className="close-menu" href="#contact-us">
                  Contact
                </a>
              </li>
              <li className="navbar-item">
                <button type="button" className="joinBtn close-menu">
                  JOIN US
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
