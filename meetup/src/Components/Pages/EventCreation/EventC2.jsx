import React from "react"
import { CommonTop } from "./CommonTop"
import styles from "../../EventCreation.module.css"
import { AppContext } from "../../AppContextProvider"
import {Link} from "react-router-dom"

const EventC2 = () => {
    const {category,setCategory} = React.useContext(AppContext)

    const handleInput = (e) => {
        setCategory(e.target.value)
        // console.log(category)
    }
    return (
        
        <div>
            <CommonTop />
            <div style={{width:"100%" , display:"flex"}}>
                    <div style={{backgroundColor : "rgb(0, 130, 148) " , width : "30%" , height :"15px"}} ></div>
                    <div style={{backgroundColor : "lightgrey " , width : "59%" , height :"15px"}} ></div>
            </div>
            <div className={styles.eve1} >
                <h5>Step 2 out of six</h5>
                <h1 style={{fontSize:"40px"}}>Choose a few topics that describe <br /> your group's interests</h1>
                <h4>Be specific! This will help us promote your group to the right people. You can choose up to <br/> 15 topics.</h4>
                
            </div>
            <div className ={styles.eve2} >
                <div>
                    <button value={"nearby"} onClick={(e) => handleInput(e,'value')}>Near-By</button>
                    <button value={"Carrer & Business"} onClick={(e) => handleInput(e,'value')} >Carrer and Business</button>
                    <button value={"Outdoors & Adventure"} onClick={(e) => handleInput(e,'value')} >Outdoors and Adventure</button>

                </div>
                <div>
                    <button value={"Learning Events"} onClick={(e) => handleInput(e,'value')} >Learning Events  </button>
                    <button value={"Health & Wellness"} onClick={(e) => handleInput(e,'value')} >Health and Wellness</button>
                    <button value={"Tech"} onClick={(e) => handleInput(e,'value')} >Tech</button>

                </div>
            </div>
            <div className={styles.eve2_button}>
                <Link to="/eventC3" ><button>Next</button></Link>
            </div>
        </div>
    )
}

export {EventC2}