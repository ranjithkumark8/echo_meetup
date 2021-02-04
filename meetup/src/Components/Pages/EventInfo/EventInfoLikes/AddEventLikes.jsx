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
       dispatch(putCommentsData(eventInfoData.id,particularComment))

    }
    return (
        <>
        
        <div className = {Styles.addEventLikes__Container}>

            <img className = {Styles.addEventLikes__attendes_image} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjvS45-B5Lc1KFMb-d914IuNypar6wp-H1Q&usqp=CAU" alt = "hoster"/>
            <textarea placeholder = "add your comment" cols = "100" onChange = {(e) => setComment(e.target.value)}/>
            <MdSend onClick = {handleClick} style ={{marginLeft : "30px" , fontSize : "30px",color : "grey"}}/>
        </div>
        </>
    )
}

export {AddEventLikes}
