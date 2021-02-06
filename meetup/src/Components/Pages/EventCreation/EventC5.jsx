import React from "react"
import { CommonTop } from "./CommonTop"
import styles from "./EventCreation.module.css"
import { Link } from "react-router-dom"
import { AppContext } from "../../AppContextProvider"

const EventC5 = () => {
    const { header, setHeader,createEvent } = React.useContext(AppContext)
    // const { createEvent } = React.useContext(AppContext)

    const handleClick = () => {
        // console.log(header)
        // console.log(category)
        createEvent()
    }
    return (

        <div>
            <CommonTop />
            <div style={{ width: "100%", display: "flex" }}>
                <div style={{ backgroundColor: "rgb(0, 130, 148) ", width: "100%", height: "15px" }} ></div>
                <div style={{ backgroundColor: "lightgrey ", height: "15px" }} ></div>
            </div>
            <div className={styles.eve1} >
                <h5>Step 5 of 5</h5>
                <h1>Almost done! Just take a minute to <br /> review our guidelines</h1>
                <br />
                <div>Meetup is all about helping people live fuller, happier lives—with the help of strong communities.
                    <br /> This means that all groups should:</div>
                <br />
                <div className={styles.eve3_list} >
                    <li>Provide growth opportunities for members</li>
                    <li>Encourage real human interactions in person or online</li>
                    <li>Have a host present at all events</li>
                    <li>Be transparent about the group’s intentions</li>
                </div>
                <br />
                <div style={{ textAlign: "left", margin: "1px auto", width: "700px" }}  >You can
                read more about all of this in our <span style={{ color: "blue", fontSize: "larger" }}>community guidelines</span> </div>
                <br />
                <div style={{ textAlign: "left", margin: "1px auto", width: "700px" }} >Once you
                submit your group, a human at Meetup will review it based on these guidelines
                    <br /> and make sure it gets promoted to the right people.</div>
            </div>
            <div className={styles.eve1_button}>
                <button style={{ marginTop: "20px", width: "200px" }} onClick={handleClick}>
                    <Link to="/home" >Agree and Proceed</Link>
                </button>
            </div>
            <div style={{ clear: "both" , marginBottom:"30px" }}></div>
        </div>
    )
}

export { EventC5 }