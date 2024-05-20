import './review.css'

function Review() {
  return (
    <section id="review">
    <div className="container">
        <div className="section-title">
            <h2>REVIEW CLIENT</h2>
            <span></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur neque dolores
                corrupti numquam magnam temporibus.</p>
        </div>

        <div className="review">
            <div className="review-items">
                <div className="review-header">
                    <img className="client-img" src="../../src/assets/client1.jpg" alt=""/>
                    <div className="client-content">
                        <p>Diet Expert</p>
                        <p>CFO</p>
                    </div>
                </div>
                <div className="reviwe-content">
                    <div className="content-box">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsum repellendus saepe
                            ab ipsa expedita illo eaque! Quibusdam deserunt, alias iusto libero omnis expedita
                            dolores, consectetur iure eius aspernatur?</p>
                    </div>
                </div>
            </div>

            <div className="review-items">
                <div className="review-header">
                    <img className="client-img" src="../../src/assets/client2.jpg" alt=""/>
                    <div className="client-content">
                        <p>Diet Expert</p>
                        <p>CFO</p>
                    </div>
                </div>
                <div className="reviwe-content">
                    <div className="content-box">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsum repellendus saepe
                            ab ipsa expedita illo eaque! Quibusdam deserunt, alias iusto libero omnis expedita
                            dolores, consectetur iure eius aspernatur?</p>

                        <div className="left-triangel"></div>
                        <div className="right-triangel"></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Review