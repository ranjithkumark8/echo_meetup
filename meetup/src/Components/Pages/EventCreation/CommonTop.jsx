import React from "react"
import { AppContext } from "../../AppContextProvider"
import { Link, Redirect, useHistory } from "react-router-dom"
const CommonTop = () => {

    const history = useHistory()
    
    const handleRedirect = () => {
        history.push("/home")
    }
    return (
        <div>
            <div>
                <div style={{margin:"10px auto", width:"fit-content"}}>
                    <img style={{ width: "10%", textAlign:"center",  display:"block", margin:"auto"}} src="https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg" alt="meet-up-logo" onClick={ handleRedirect}/>
                </div>
                {/* <Link to="/home"><button onClick={handleClick} style={{ float: "right", padding: "16px 20px", backgroundColor: "white", border: "0" }} >Save and Exit</button></Link> */}
            </div>
            {/* <div style={{ clear: "both" }} className="clear"></div> */}

        </div>
    )
}

export { CommonTop }