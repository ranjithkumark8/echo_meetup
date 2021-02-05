import React from "react"
import { AppContext } from "../../AppContextProvider"
import axios from "axios"
import { Link } from "react-router-dom"
const CommonTop = () => {

    const { category, header } = React.useContext(AppContext)
    const handleClick = () => {
        // console.log(header)
        // console.log(category)

        const payload = {
            date: "Fri, Feb 12, 2:00 PM GMT+5:30",
            header: header,
            sub_heading: "Bangalore Apache Airflow Meetup",
            img: "https://secure-content.meetupstatic.com/images/classic-events/484169677/220x124.jpg",
            is_online_event: true,
            category: category,
            date_range: "next_week",
            attendees: [],
            comments: [],
            isStar: false 
        }
        axios.post("https://meetup-project.herokuapp.com/events",
            payload
        )
    }
    return (
        <div>
            <div>
                <div style={{ float: "left", }}>
                    <img style={{ width: "140px", padding: "16px 20px" }} src="https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg" alt="" /></div>
                <Link to="/home"><button onClick={handleClick} style={{ float: "right", padding: "16px 20px", backgroundColor: "white", border: "0" }} >Save and Exit</button></Link>
            </div>
            <div style={{ clear: "both" }} className="clear"></div>

        </div>
    )
}

export { CommonTop }