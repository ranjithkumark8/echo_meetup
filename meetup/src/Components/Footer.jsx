import React from "react"
import {Link} from "react-router-dom"
import styles from "./Footer.module.css"
import { FaInstagram , FaTwitterSquare , FaFacebookSquare , FaYoutube} from 'react-icons/fa';
import {BiCopyright} from "react-icons/bi"


const Footer = ( ) => {
    return (
            <div className={styles.footer}>
                <div className={styles.footer_box} >
                    <div>
                        <Link to="/" style={{color : "white"  }}>Start a new group</Link>
                        <div style={{height : "0.5px" , backgroundColor :"gray" , margin:"30px 0px" }} ></div>
                    </div>
                    <div style ={{display : "flex"}} > 
                        <div className={styles.footer_left}>
                            <div>
                                <ul>
                                <h4>Your Account</h4>
                                    <li><Link>Settings</Link></li>
                                    <li><Link>Log Out</Link></li>
                                    <li><Link>Help</Link></li>
                                </ul>
                            </div>
                            <div>
                                
                                <ul>
                                <h4>Discover</h4>
                                    <li><Link>Groups</Link></li>
                                    <li><Link>Calender</Link></li>
                                    <li><Link>Topics</Link></li>
                                    <li><Link>Cities</Link></li>
                                </ul>
                            </div>
                            <div>
                                
                                <ul>
                                    <h4>Meetup</h4>
                                    <li><Link>About</Link></li>
                                    <li><Link>Meetup Pro</Link></li>
                                    <li><Link>Careers</Link></li>
                                    <li><Link>Apps</Link></li>
                                    <li><Link>Blogs</Link></li>
                                    <li><Link>Accessibility</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footer_right} >  
                            <h4>Follow us</h4>
                            <span><FaFacebookSquare style={{height:"1.5em" ,width:"1.5em" }}  /></span>
                            <span><FaTwitterSquare style={{height:"1.5em" ,width:"1.5em"}}/></span> 
                            <span><FaYoutube style={{height:"1.5em" ,width:"1.5em"}}/></span>   
                            <span style={{marginRight:"0"}}><FaInstagram style={{height:"1.5em" ,width:"1.5em"}}/></span>
                            <br />
                            <div>
                                <div><img src="https://www.meetup.com/mu_static/en-US/download_en.b85d892d.png" alt="play store"/> </div>      

                                <div><img src="https://www.meetup.com/mu_static/en-US/download_en.cf6dad40.png" alt="goggle play"/></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.clear}></div>
                <div className={styles.footer_bottom} >
                        <div>
                            <h5 style={{color:"white"}} ><BiCopyright />2021 Meetup LLC</h5>
                            <br/>
                            <h5 style={{color:"white"}}>Terms of Service . Private Policy</h5>
                        </div>
                </div>
            </div>

        
    )
}

export {Footer}