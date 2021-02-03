import React from 'react'
import Styles from './EventInfoHeader.module.css'
import {AiOutlineSearch} from "react-icons/ai";

const EventInfoHeader = () => {
    return (
        <div>
            <div className = {Styles.header}>
                <div className = {Styles.eventInfo_left}>
                    <img src = "https://secure.meetupstatic.com/s/img/5455565085016210254/logo/svg/logo--script.svg" alt = "logo" height = "70px" width = "100px"/>
                    <div className = {Styles.EventInfoHeader__searchBar}>
                        <AiOutlineSearch style = {{color : "grey",marginTop : "5px"}}/>
                        <h3 style = {{color : "#757575" , marginLeft : "20px"}}>Search</h3>
                    </div>
                </div>
                
                <div className = {Styles.eventInfo_right}>
                    <div className = {Styles.eventInfoHeader__startAGroup}>Start a new group</div>
                    <div style = {{color : "grey"}}>Log in</div>
                    <div style = {{color : "grey"}}>Sign up</div>
                </div>
            </div>
        </div>
    )
}

export {EventInfoHeader}
