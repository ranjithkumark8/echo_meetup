import React, { useEffect } from 'react'
import { LoginForm } from './LoginForm'
import { LoginHeader } from './LoginHeader'

const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <LoginHeader />
            <LoginForm />
        </div>
    )
}

export { Login }
