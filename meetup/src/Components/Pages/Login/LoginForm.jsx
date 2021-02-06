import React, { useState, useEffect } from 'react'
import Styles from './LoginForm.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginDetails, loginFailure, loginSuccess } from '../../../Redux/AuthRedux/action';

const init = {
    email: "",
    password: "",
    keepSigned: false
}
const LoginForm = () => {
    const [loginData, setLoginData] = React.useState(init)
    const history = useHistory();
    const dispatch = useDispatch();
    const isError = useSelector(state => state.authReducer.isError);
    const loginDetails = useSelector(state => state.authReducer.loginDetails);
    const [wrongCredentials, setWrongCredentials] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let val = type === "checkbox" ? checked : value
        setLoginData({ ...loginData, [name]: val })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getLoginDetails(loginData))
    }

    const handleCheck = () => {
        if (loginDetails.password === loginData.password) {
            dispatch(loginSuccess());
            history.push("/home");
        } else {
            dispatch(loginFailure())
            setWrongCredentials(true);
        }
    }
    useEffect(() => {
        document.title ="Login | Meetup"
    })
    useEffect(() => {
        if (Object.keys(loginDetails).length !== 0) {
            handleCheck()
        }
    }, [loginDetails])


    const { email, password, keepSigned } = loginData;

    return (
        <div className={Styles.Login__loginForm}>
            <h2 className={Styles.loginform__heading}>Login</h2>
            <p className={Styles.loginform__para}>Not registered with us yet? <Link to="/register">Sign up</Link></p>
            <div className={Styles.login_underline}></div>
            {(wrongCredentials || isError) && <div style={{ color: 'red' }}>Email or password is wrong</div>}
            <form onSubmit={handleSubmit}>
                <label className={Styles.login__label}>Email Address</label>
                <input className={Styles.loginform__input} type="text" name="email" value={email} onChange={handleChange} required />
                <label className={Styles.login__label}>Password</label>
                <div style={{ fontSize: "13px", fontWeight: "600", marginTop: "5px", color: "#00a2c7" }}  >Forgot your password ? </div>
                <input className={Styles.loginform__input} type="password" name="password" value={password} onChange={handleChange} required />
                <input type="checkbox" name="keepSigned" checked={keepSigned} onChange={handleChange} />
                <label className={Styles.login__label} style={{ marginLeft: "15px" }}>Keep me signed in</label><br></br>
                <input className={Styles.login__login_button} type="submit" value="Log In" />
                <div className={Styles.login__social_div}>
                    <div className={Styles.login__facebook_div}>
                        <FaFacebookF style={{ color: 'white' }} />
                        <span className={Styles.login__single_span}>
                            Continue with Facebook
                    </span>
                    </div>
                    <div className={Styles.login__single_div}>
                        <FcGoogle />
                        <span className={Styles.login__single_span}>
                            Continue with Google
                    </span>
                    </div>
                    <div className={Styles.login__single_div}>
                        <DiApple style={{ color: "black" }} />
                        <span className={Styles.login__single_span}>
                            Continue with Apple
                    </span>
                    </div>

                </div>
            </form>
        </div>
    )
}

export { LoginForm }
