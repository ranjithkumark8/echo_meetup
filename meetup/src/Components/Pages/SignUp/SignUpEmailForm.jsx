import React from 'react'
import Recaptcha from 'react-recaptcha'
import Styles from './SignUpForm.module.css'
import {Link} from 'react-router-dom'

const init = {
    name : "",
    emailAddress : "",
    password : ""
}
const SignUpEmailForm = () => {
    const [signupData , setSignupData] = React.useState(init)

    const handleChange = (e) =>{
        const {name , value} = e.target
        setSignupData({...signupData , [name] : value})
    }

    const {name , password , emailAddress} = signupData 
    return (
        <div>
            
            <form className = {Styles.signup__form}>
                <label className = {Styles.signup__label}>Your name</label>
                <br/>
                <input className = {Styles.signupform__input} type = "text" name = "name" value = {name} onChange = {handleChange}/>
                <br/>
                <label className = {Styles.signup__label}>Email Address</label>
                <br/>
                <input className = {Styles.signupform__input} type = "text" name = "password" value = {password} onChange = {handleChange}/>
                <br/>
                <label className = {Styles.signup__label}>Password</label>
                <br/>
                <input className = {Styles.signupform__input} type = "text" name = "emailAddress" value = {emailAddress} onChange = {handleChange}/>
                {/* <Recaptcha
                    sitekey = "6LfegUYaAAAAAG55SgMUwC3CPM_8MurjOe4GwSCK"
                    render = "explicit"
                        // verifyCallback={}
                        // onloadCallback={}
                /> */}
                <p className = {Styles.signup__para}>Your name is public.We'll use your email address to send you <br/>updates, and your location to find Meetups near you. </p>
                <button className = {Styles.signup__continue_button}>Continue</button>
                <p className = {Styles.signup__para} style = {{color : "rgba(0,0,0,.87)" , marginTop : "20px" , borderBottom : "2px solid silver" , paddingBottom : "20px"}}>When you "Continue", you agree to Meetup's Terms of Service. We<br/> will manage information about you as described in our Privacy<br></br> Policy, and Cookie Policy. </p>
            </form>
            <p className = {Styles.signup__para} style = {{textAlign : 'center' , marginBottom : "50px"}} >Already a member? Log In .</p>
        </div>
    )
}

export {SignUpEmailForm}
