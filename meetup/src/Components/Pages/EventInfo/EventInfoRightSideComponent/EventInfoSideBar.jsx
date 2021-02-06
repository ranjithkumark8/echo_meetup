import React from 'react'
import {BsFillQuestionCircleFill } from "react-icons/bs";
import Styles from './EventInfoSideBar.module.css'
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiVideo } from "react-icons/bi";
import { Calendar, Alert } from 'antd';
import moment from 'moment';


const EventInfoSideBar = ({img , date , header}) => {
   
    return (
        <div className = {Styles.eventInfo__sidebar_container}>
            <div className = {Styles.eventInfo__sidebar_upper_div}>
               <img src = {img} alt = {img} height = "80px" width = "80px" />
               <div style = {{marginLeft : "10px"}}>
                    <h3>{header}</h3>
                    <p>Public group <BsFillQuestionCircleFill style = {{color : "grey"}}/></p>
                </div>
                
            </div>
            <div className = {Styles.eventInfo__sidebar_lower_div}>
                <div style = {{display : "flex",flexDirection : "column"}}>
                    <div style = {{display : "flex" , alignItems : "baseline"}}>
                    <AiOutlineClockCircle style = {{color : "grey"}}/>
                    <p style = {{marginLeft : "10px"}}>{date}</p>
                    </div>
                    <p style = {{color : "#00A2C7" ,marginLeft : "25px", cursor : "pointer"}}>Add to calender</p>
                </div>
                <div style = {{display : "flex" , alignItems : "baseline"}}>
                    <BiVideo style = {{color : "grey"}}/>
                    <p style = {{marginLeft : "10px"}}>Online event</p>
                </div>
               
     
            </div>
        </div>
    )
}

export {EventInfoSideBar}
