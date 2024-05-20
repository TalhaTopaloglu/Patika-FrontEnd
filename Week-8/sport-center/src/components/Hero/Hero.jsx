import './hero.css'

function Hero() {
  return (
    <section id="hero">
    <div className="bg-image">
        <div className="container">
            <div className="hero-items">
                <h4>POWERFULL</h4>
                <div className="hero-titles">
                    <h1>Group</h1>
                    <h1>Practice</h1>
                    <h1>With Trainer</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis natus adipisci optio
                    nulla
                    sequi! Vero modi quod unde, omnis molestias excepturi ex architecto, itaque officia harum
                    recusandae. Ab
                    expedita delectus ut assumenda ducimus illo reprehenderit aperiam quam beatae nobis?</p>
                <div className="hero-buttons">
                    <button id="signUp">Sign Up</button>
                    <button id="details">Details</button>
                </div>
            </div>
        </div>
    </div>
    <div className="hero-info">
        <div className="container">
            <div className="info-items">
                <div className="box-card">
                    <h3>325</h3>
                    <h4>Course</h4>
                </div>
                <div className="box-card">
                    <h3>405</h3>
                    <h4>Work Out</h4>
                </div>
                <div className="box-card">
                    <h3>305</h3>
                    <h4>Working Our</h4>
                </div>
                <div className="box-card">
                    <h3>705</h3>
                    <h4>Happy Client</h4>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero