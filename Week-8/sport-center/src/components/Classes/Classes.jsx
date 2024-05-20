import { useState } from 'react'
import Class from './Class'
import './classes.css'

function Classes() {
    const [showClass,setShowClass] = useState("yoga");

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
                <button onClick={() => setShowClass("yoga")} id="yoga" className="classes-button">Yoga</button>
                <button onClick={() => setShowClass("group")} id="group" className="classes-button ">Group</button>
                <button onClick={() => setShowClass("solo")} id="solo" className="classes-button">Solo</button>
                <button onClick={() => setShowClass("streching")} id="streching" className="classes-button">Streching</button>
            </div>
            <div className="classes-info">
                <Class showClass = {showClass} />
            </div>
        </div>
    </section>
  )
}

export default Classes