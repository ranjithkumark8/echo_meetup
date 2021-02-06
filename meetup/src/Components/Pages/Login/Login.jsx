import React, { useEffect } from 'react'
import { LoginForm } from './LoginForm'
import { LoginHeader } from './LoginHeader'

const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        document.title ="Login | Meetup"
    })
    return (
        <div>
            <LoginHeader />
            <LoginForm />
        </div>
    )
}

export { Login }
