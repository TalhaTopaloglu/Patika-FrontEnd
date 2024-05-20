import "./trainer.css"

function Trainer() {
  return (
    <>
    <section id="trainers">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2>OUR BEST TRAINERS</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur neque dolores
                        corrupti numquam magnam temporibus.</p>
                </div>
                <div className="trainers">
                    <div className="trainer">
                        <div className="bg-hover-line-v"></div>
                        <div className="bg-hover-line-h"></div>
                        <img className="trainer-img" src="../../src/assets/trainer1.jpg" alt="trainer1" />
                        <div className="trainer-content">
                            <h4>Jane Doe</h4>
                            <p>Cardio Trailer</p>
                        </div>
                    </div>
                    <div className="trainer">
                        <div className="bg-hover-line-v"></div>
                        <div className="bg-hover-line-h"></div>
                        <img className="trainer-img" src="../../src/assets/trainer2.jpg" alt="" />
                        <div className="trainer-content">
                            <h4>Jone Doe</h4>
                            <p>Cardio Trailer</p>
                        </div>
                    </div>
                    <div className="trainer">
                        <div className="bg-hover-line-v"></div>
                        <div className="bg-hover-line-h"></div>
                        <img className="trainer-img" src="../../src/assets/trainer3.jpg" alt="" />
                        <div className="trainer-content">
                            <h4>Jale Doe</h4>
                            <p>Cardio Trailer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="purchase">
                <div className="section-title">
                    <h2>PURCHASE FROM</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur neque dolores
                        corrupti numquam magnam temporibus.</p>
                </div>
                <div className="purchase-card">
                    <div className="card">
                        <img src="../../src/assets/purchase1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Kettlebell / 5kg</h5>
                            <p className="card-text"><span>89.99$</span> / 59.99$</p>
                        </div>
                        <div className="card-bottom">
                            <i className="bi bi-cart-fill"></i>
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../../src/assets/purchase2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Treadmill</h5>
                            <p className="card-text"><span>899.99$</span> / 599.99$</p>
                        </div>
                        <div className="card-bottom">
                            <i className="bi bi-cart-fill"></i>
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../../src/assets/purchase3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Adjustable Dumbbell</h5>
                            <p className="card-text"><span>89.99$</span> / 59.99$</p>
                        </div>
                        <div className="card-bottom">
                            <i className="bi bi-cart-fill"></i>
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../../src/assets/purchase4.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Kettlebell / 3kg</h5>
                            <p className="card-text"><span>79.99$</span> / 49.99$</p>
                        </div>
                        <div className="card-bottom">
                            <i className="bi bi-cart-fill"></i>
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Trainer