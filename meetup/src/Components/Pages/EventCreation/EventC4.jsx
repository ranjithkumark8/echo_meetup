import React from "react"
import { CommonTop } from "./CommonTop"
import styles from "./EventCreation.module.css"
import { Link } from "react-router-dom"
import { AppContext } from "../../AppContextProvider"

const EventC4 = () => {
    const { header, setHeader } = React.useContext(AppContext)
    // console.log(header)
    return (

        <div>
            <CommonTop />
            <div style={{ width: "100%", display: "flex" }}>
                <div style={{ backgroundColor: "rgb(0, 130, 148) ", width: "74%", height: "15px" }} ></div>
                <div style={{ backgroundColor: "lightgrey ", width: "26%", height: "15px" }} ></div>
            </div>
            <div className={styles.eve1} >
                <h5>Step 4 of 5</h5>
                <h1>Now describe what your group <br />will be about</h1>
                <h4>People will see this when we promote your group but you’ll be able to add to it later, too.</h4>
                <br />
                <div className={styles.eve3_list} >
                    <li>What's the purpose of the group?</li>
                    <li>Who should join?</li>
                    <li>What will you do at your events?</li>
                </div>

                <textarea style={{ textAlign: "center", padding: "30px" }} cols="90" rows="8" placeholder="PLease write at least 50 characters" >
                </textarea>

                <div style={{ textAlign: "left", margin: "30px auto", width: "650px", height: "100px" }} >
                    <h3>Here's an example:</h3>
                    <h4>
                        “Welcome tech lovers far and wide! We’re an online and in-person tech-enthusiast <br />
                    group hosting live speaking events on a range of tech topics. You can join us in person <br />
                     if possible or on one of our live streams. Look out for our virtual happy hours and other <br />
                      networking events.”
                    </h4>
                </div>
            </div>

            <div className={styles.eve1_button}>
                <Link to="/start/guidelines" ><button>Next</button></Link>
            </div>
            <div style={{ clear: "both" , marginBottom:"30px" }}></div>
        </div>
    )
}

export { EventC4 }