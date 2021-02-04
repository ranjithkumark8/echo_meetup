import React from 'react'
import {MdSend } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { putCommentsData } from '../../../../Redux/EventInformationRedux/action';
import Styles from './AddEventLikes.module.css'


const AddEventLikes = () => {
  
    const [comment , setComment] = React.useState("")
    const dispatch = useDispatch();
    const eventInfoData = useSelector(state => state.eventInfo.eventInfoData)

    const handleClick = () => {
        const signUp = JSON.parse(localStorage.getItem("signUpInfo"))
        const {name} = signUp[signUp.length -1]
        const particularComment = {
            name,
            comment :comment 
        }
        console.log(eventInfoData.comments)
        let comments = [particularComment ,...eventInfoData.comments]

     dispatch(putCommentsData(eventInfoData.id,comments))
     setComment("")
    }
    return (
        <>
        
        <div className = {Styles.addEventLikes__Container}>

            <img className = {Styles.addEventLikes__attendes_image} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoP-psXAgWJMmi1nSIcNhatyx9cTQ35OZuZdeIAxcaYcIc67zilptMKg8u9eHLAu_fIGDuBA&usqp=CAU&ec=45771803" alt = "hoster"/>
            <textarea placeholder = "add your comment" cols = "100" value = {comment} onChange = {(e) => setComment(e.target.value)}/>
            <MdSend onClick = {handleClick} style ={{marginLeft : "30px" , fontSize : "30px",color : "grey"}}/>
        </div>
        </>
    )
}

export {AddEventLikes}
