import React from "react"
import styles from "../../profile.module.css"
import { FaInstagram , FaTwitterSquare , FaFacebookSquare , FaYoutube} from 'react-icons/fa';
import { Footer } from "../../Footer";

import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from "../../NavBar";

const Profile = () => {
    const loginDetails = useSelector(state => state.authReducer.loginDetails);    return (
        <div>
            <NavBar/>
            <div className={styles.profile}>
            <div>
                <div style={{borderBottom:"1px solid lightgray" }}><h1 style={{padding:"7px 15px 4px" , fontWeight:"600"}}>{loginDetails.name}</h1></div>
                <div className={styles.profile_topbar}>
                    <div >
                        <h3>Location:</h3>
                        <p style={{color:"#1f24cc"}}>Banglore</p>
                    </div>
                    <div>
                        <h3>Meetup member since:</h3>
                        <p>February 2, 2021</p>
                    </div>
                    <div>
                        <h3>Networks</h3>
                        <span><FaFacebookSquare style={{height:"1.6em" ,width:"1.6em" , marginRight:"2px" }}  /></span>
                            <span><FaTwitterSquare style={{height:"1.6em" ,width:"1.6em" , marginRight:"2px"}}/></span> 
                            <span><FaYoutube style={{height:"1.6em" ,width:"1.6em" , marginRight:"2px"}}/></span>   
                            <span style={{marginRight:"0"}}><FaInstagram style={{height:"1.6em" ,width:"1.6em"}}/></span> 
                    </div>

                </div>
                <div className={styles.add_bio}>
                        Add a bio
                </div>
                <div className={styles.profile_meetups}>
                    <h1>Member of 0 Meetups</h1>
                </div>
                <div style={{display:"flex" , borderBottom:"1px solid lightgray"}} >
                    <img style={{padding:"15px 20px"}} src="/dummy.jpeg" alt=""/>
                    <h3 style={{padding:"10px"}} >Banglore Shopping Meetup Group <br/> <p style={{color:"#1f24cc" ,textDecoration:"underline" , cursor: "pointer"}}>In Progress</p></h3>
                    
                </div>
                <div style={{padding : "15px 20px"}}>Looking to post a greeting? Start a conversation instead.</div>
            </div>
            <div className={styles.profile_right} >
                <div style={{borderBottom:"1px solid lightgray"}} >
                    <img  style={{margin:" 10px 130px"}} src="/dummy.jpeg" alt=""/>
                    <p style={{color:"#1f24cc", margin:"0px 80px" , cursor: "pointer"}} >Change your photo</p>
                </div>
                <div className={styles.profile_interest}>
                    <p style={{margin:"5px 120px"}}>Photos 1</p>
                    <h2>Interests</h2>
                    <p>hide interests on profile. Edit ?</p>
                </div>
                <div className={styles.interest_h2}>
                    <div><h2>What are your Interests ? </h2></div>
                    <div><h3>TECH </h3></div>   
                    <div><h3>SOCIAL </h3></div>
                    <div><h3>GAMING </h3></div>
                    <div><h3>OUTDOOR </h3></div>
                    <div><h3>CAMPING </h3></div>
                </div>
            </div>
            
        </div>
        <Footer />
        </div>
    )
}   

export {Profile}