import React from 'react'
import Styles from './LoginForm.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom';

const init = {
    email: "",
    password: ""
}
const LoginForm = () => {
    const [loginData, setLoginData] = React.useState(init)
    const { email, password } = loginData;
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let val = type === "checkbox" ? checked : value
        setLoginData({ ...loginData, [name]: val })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedLoginData = {
            id: uuid(),
            ...loginData
        }
        let data = JSON.parse(localStorage.getItem("loginInfo")) || []
        data.push(updatedLoginData)
        localStorage.setItem("loginInfo", JSON.stringify(data))
        history.push("/home");
    }

    return (
        <div className={Styles.Login__loginForm}>
            <h2 className={Styles.loginform__heading}>Login</h2>
            <p className={Styles.loginform__para}>Not registered with us yet? Sign up</p>
            <div className={Styles.login_underline}></div>
            <form onSubmit={handleSubmit}>
                <label className={Styles.login__label}>Email Address</label>
                <input className={Styles.loginform__input} type="text" name="email" value={email} onChange={handleChange} />
                <label className={Styles.login__label}>Password</label>
                <div style={{ fontSize: "13px", fontWeight: "600", marginTop: "5px", color: "#00a2c7" }}  >Forgot your password ? </div>
                <input className={Styles.loginform__input} type="password" name="password" value={password} onChange={handleChange} />
                <input type="checkbox" name="keepSigned" checked="keepSigned" />
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
