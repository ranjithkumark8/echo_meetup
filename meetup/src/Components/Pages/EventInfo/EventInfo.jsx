import React from 'react'
import { EventInfoHeader } from './EventInfoHeader/EventInfoHeader'
import { FiShare } from "react-icons/fi";
import Styles from './EventInfo.module.css'
import EvetInfoDetails from './EventInfoDetails/EvetInfoDetails';
import { EventInfoAttendes } from './Event/EventinfoAttendes/EventInfoAttendes';
import { EventInfoLikes } from './EventInfoLikes/EventInfoLikes';
import { EventNavbar } from './EventNavabar/EventNavbar';
import { EventInfoSideBar } from './EventInfoRightSideComponent/EventInfoSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getEventInfoData } from '../../../Redux/EventInformationRedux/action';
import { useParams, Redirect } from 'react-router-dom';
import { EventInfoContext } from '../../../Context/EventInfoContext';


const EventInfo = () => {
    const dispatch = useDispatch();
    const eventInfoData = useSelector(state => state.eventInfo.eventInfoData)
    const { id } = useParams();
    const isLoggedin = useSelector(state => state.authReducer.isLoggedin);
    const [isGoing, setIsGoing] = React.useContext(EventInfoContext)

    console.log(id)
    React.useEffect(() => {
        dispatch(getEventInfoData(id))
    }, [id, dispatch])

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    console.log(eventInfoData)

    if (!isLoggedin) {
        return <Redirect to="/login" />
    }


    console.log(eventInfoData)

    if (!isLoggedin) {
        return <Redirect to="/login" />
    }



    return (
        <div style={{ position: 'relative' }}>
            <EventInfoHeader />
            {isGoing ? (
                <div className={Styles.isGoingEventDiv}>You are going to this event.</div>
            ) : ""}
            <div style = {{borderBottom : "1px solid silver"}}>
            <div className = {Styles.eventInfo__hosting_header}>
                <span className = {Styles.eventInfo__event_date}>{eventInfoData.date}</span>
                <br/>
                <span className = {Styles.eventInfo__event_name}>{eventInfoData.header}</span>
                <br/>
               <div className = {Styles.eventInfo__hostingInfo}>
                    <img className = {Styles.eventInfo__hostingInfo_image} src = {eventInfoData.img} alt = "hostee"/>
                    <div style = {{marginLeft : "30px" , lineHeight : "32px" , marginTop : "15px"}}>
                        <p style = {{fontSize : "16px",marginTop : "20px"}}>Hosted by</p>
                        <p style = {{fontSize : "16px" , fontWeight : "bolder"}}>Sumit M. and Kaxil N.</p>
                    </div>
                   
                    <div className = {Styles.eventInfo__shareDiv}>
                        <FiShare/>
                        <span style = {{marginLeft : "10px" , fontWeight : "bolder"}}>Share</span>
                    </div>
                </div>
                <div style={{ backgroundColor: "whitesmoke", margin: "0px", padding: "0px" }}>
                    <EvetInfoDetails {...eventInfoData} />
                    <EventInfoAttendes {...eventInfoData} />
                    <EventInfoLikes {...eventInfoData} />
                    <div style={{ borderBottom: "1px solid silver" }}></div>
                </div>
            </div>
            </div>
            <EventNavbar {...eventInfoData} />
        </div>
    )
}

export { EventInfo }
