import React from 'react'
import Styles from './EventNavbar.module.css'
import { AiOutlineStar } from "react-icons/ai";

const EventNavbar = () => {
    return (
        <div className = {Styles.eventInfo__navabar_container}>
            <div >
                <p>Fri, Feb 12 · 2:00 PM GMT+5:30</p>
                <h3>Apache Airflow Virtual Meetup</h3>
            </div>
            <div style = {{display : "flex" ,justifyContent : "space-between"}}>
                <div style = {{fontSize : "18px" , fontWeight : "600"}}>Free</div>
                <div className = {Styles.eventInfo__navbar_star_icon}>
                    <AiOutlineStar style = {{fontSize : "20px",color : "grey" }}/>
                </div>
                <div className = {Styles.eventInfo__navbar_attend_online_button}>
                    Attend Online
                </div>
            </div>
        </div>
    )
}

export {EventNavbar}
