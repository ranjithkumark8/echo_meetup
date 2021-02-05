import React, { useEffect } from 'react'
import Styles from './SignUp.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { SignUpEmailForm } from './SignUpEmailForm';
//import {GoogleLogin} from 'react-google-login'


const Signup = () => {
    
    const responseGoogle = (response) => {
        console.log(response)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className={Styles.signup__header}>
                <img className={Styles.signup__meetupLogo} src="https://secure.meetupstatic.com/s/img/642287997414509021596/logo/svg/logo--mSwarm--2color.svg" alt="logo" />
            </div>
            <div className={Styles.logo_underline}></div>
            <div className={Styles.signup__social_div}>
                <h1 className={Styles.signup_heading}>Sign up</h1>
                <div className={Styles.signup__facebook_div}>
                    <FaFacebookF style={{ color: 'white' }} />
                    <span className={Styles.signup__single_span}>
                        Continue with Facebook
                    </span>
                </div>
                <div className={Styles.signup__single_div}>
                    <FcGoogle />
                    <span className={Styles.signup__single_span}>
                        Continue with Google
                    </span>
                </div>
                {/* <GoogleLogin className = {Styles.signup__single_div} clientId = "314996264717-s9mnl2m68nnj38lbpl7lcra9f0agldip.apps.googleusercontent.com" onSuccess = {responseGoogle} onFailure = {responseGoogle} cookiePolicy={'single_host_origin'}  style = {{backgroundColor : "blue"}}/> */}
                <div className={Styles.signup__single_div}>
                    <DiApple style={{ color: "black" }} />
                    <span className={Styles.signup__single_span}>
                        Continue with Apple
                    </span>
                </div>
                <h3 className={Styles.signup__email_text}>or signup with email</h3>
            </div>
            <SignUpEmailForm />
        </div>
    )
}

export { Signup }
