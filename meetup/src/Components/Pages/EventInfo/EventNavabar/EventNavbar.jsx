import React from 'react'
import Styles from './EventNavbar.module.css'
import { AiOutlineStar } from "react-icons/ai";
import { Modal, Button } from 'antd';
import {AiFillCheckCircle } from "react-icons/ai";
import { FaFacebookSquare,FaTwitter,FaLinkedin} from "react-icons/fa";

const EventNavbar = () => {
    const [modalVisible , setModalVisible] = React.useState(false)
   

    
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
                <Button className = {Styles.eventInfo__navbar_attend_online_button} onClick={() => setModalVisible(true)}>
                    Attend Online
                </Button>
                <Modal className = {Styles.eventInfo__navbar_modal}
                   
                    centered
                    visible={modalVisible}
                    onOk={() => setModalVisible(false)}
                    onCancel={() => setModalVisible(false)}
                    footer={null}>
                        <div style = {{display : 'flex' , flexDirection : "column" , alignItems : "center" , justifyContent : "center" , lineHeight : "35px",textAlign : "center"}}>
                            <img className = {Styles.eventInfo__host_image} src = "data:image/jpeg;base64,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" alt = "attende"/>
                            <br/>
                            <span style = {{fontSize : "28px" , fontWeight : "700" , padding : "20px 30px"}}>These are your hosts for the event</span>
                        </div>
                        <p style = {{marginLeft : "50px"}}>If anything changes just update your response.</p>
                        <p style = {{marginLeft : "70px"}}>It helps host to prepare and its polite :) .</p>  
                        <div className = {Styles.addToCalenderDiv}>Add To Calender</div>  
                        <div className = {Styles.response_div}>
                            <div style = {{display : "flex",alignItems : "baseline",color : "#00D480"}}>
                                <AiFillCheckCircle style = {{fontSize : "20px",marginTop : "10px"}}/>
                                <p style = {{marginLeft : "10px"}}>Your response : going</p>
                            </div>
                            <h3 style = {{marginLeft : "10px"}}>Event name</h3>
                            <h3 style = {{marginLeft : "10px"}}>Event Date</h3>
                            <div style = {{display : "flex" , justifyContent : "space-evenly",width : "100px",marginTop : "20px" }}>
                                <FaFacebookSquare style = {{fontSize : "20px"}} />
                                <FaTwitter style = {{fontSize : "20px"}}/>
                                <FaLinkedin style = {{fontSize : "20px"}}/>
                            </div>
                        </div>
                </Modal>
            </div>
        </div>
    )
}

export {EventNavbar}
