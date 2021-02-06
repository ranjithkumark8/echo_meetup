import React from "react"
import { CommonTop } from "./CommonTop"
import styles from "./EventCreation.module.css"
import { AppContext } from "../../AppContextProvider"
import { Link } from "react-router-dom"

const EventC2 = () => {
    const { setCategory } = React.useContext(AppContext)

    const handleInput = (e) => {
        setCategory(e.target.value)
       

    }
    return (

        <div>
            <CommonTop />
            <div style={{ width: "100%", display: "flex" }}>
                <div style={{ backgroundColor: "rgb(0, 130, 148) ", width: "30%", height: "15px" }} ></div>
                <div style={{ backgroundColor: "lightgrey ", width: "100%", height: "15px" }} ></div>
            </div>
            <div className={styles.eve1} >
                <h5>Step 2 of 5</h5>
                <h1 style={{ fontSize: "40px" }}>Choose a few topics that describe <br /> your group's interests</h1>
                <h4>Be specific! This will help us promote your group to the right people.</h4>

            </div>
            <div className={styles.eve2} >
                <div>
                    <button value={"nearby"} onClick={(e) => handleInput(e, 'value')}>Near-By</button>
                    <button value={"career & Business"} onClick={(e) => handleInput(e, 'value')} >Career & Business</button>
                    <button value={"Outdoors & Adventure"} onClick={(e) => handleInput(e, 'value')} >Outdoors & Adventure</button>

                </div>
                <div>
                    <button value={"Learning Events"} onClick={(e) => handleInput(e, 'value')} >Learning Events  </button>
                    <button value={"Health & Wellness"} onClick={(e) => handleInput(e, 'value')} >Health & Wellness</button>
                    <button value={"Tech"} onClick={(e) => handleInput(e, 'value')} >Tech</button>

                </div>
            </div>
            <div className={styles.eve2_button}>
                <Link to="/start/name" ><button>Next</button></Link>
            </div>
            <div style={{ clear: "both", marginBottom: "30px" }}></div>
        </div>
    )
}

export { EventC2 }