import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Form = ( { onLogin, onRegister }) => {
    let errElement
    const [isLogin, setLogin] = useState(true)
    const [usernameState, setUsernameState] = useState(false)
    const [passwordState, setPasswordState] = useState(false)
    const [passwordConfirmed, setPasswordConfirmed] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameConstraint = (e) => {
        errElement = e.target.parentElement.querySelector('.form-message');
        if(!e.target.value) {
            errElement.parentNode.classList.add('invalid')
            errElement.innerHTML = "This field is required"
        } else {
            errElement.parentNode.classList.remove('invalid')
            errElement.innerHTML = ''
            setUsernameState(true)
        }
    }

    const superScript = (e) => {
        e.target.placeholder = ''
        e.target.parentElement.querySelector('.form-title').style.display = 'block'
    }

    const passwordConstraint = (e) => {
        let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
        let minLength = 8
        errElement = e.target.parentElement.querySelector('.form-message');
        let currentPassword = e.target.value
        if (!currentPassword) {
            errElement.parentNode.classList.add('invalid')
            errElement.innerHTML = 'This field is required'
        } else {
            if (currentPassword.length >= minLength && regex.test(currentPassword)) {
                errElement.innerHTML = ''
                errElement.parentNode.classList.remove('invalid')
                setPasswordState(true)
            } else {
                errElement.parentNode.classList.add('invalid')
                errElement.innerHTML = 'Password must contain at least 8 characters and include letters, numbers and special characters.'
            }
        }
    }

    const passwordConfirmation = (e) => {
        let targetPassword = document.querySelector('.form #password').value
        let curPassword = e.target.value
        errElement = e.target.parentElement.querySelector('.form-message')
        if (!curPassword) {
            errElement.parentNode.classList.add('invalid')
            errElement.innerHTML = 'This field is required'
        } else {
            if (curPassword !== targetPassword) {            
                errElement.parentNode.classList.add('invalid')
                errElement.innerHTML = 'Passwords are not matching'
            } else {
                errElement.innerHTML = ''
                errElement.parentNode.classList.remove('invalid')
                setPasswordConfirmed(true)
            }
        }
    }

    return (
        <div className="main">
            <div className="form-warning"></div>
            <div className="form">
                <h1 className="form-heading">
                    {isLogin ? 'Login with your account' : 'Register a new account'}
                    </h1>
                <div className="form-group">
                    <label htmlFor="username" className="form-title">Username</label>
                    <input id="username" 
                            type="text"
                            placeholder="Username" 
                            className="form-control"
                            name="username" 
                            onBlur={usernameConstraint} 
                            onChange={(e) => { 
                                                superScript(e)
                                                setUsername(e.target.value)
                                        }}
                    />
                    <div className="form-message">{isLogin ? '' : 'Please create your username'}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-title">Password</label>
                    <input id="password" 
                            type="password" 
                            placeholder="Password" 
                            className="form-control" 
                            name="password" onBlur={passwordConstraint} 
                            onChange={(e) => { 
                                                superScript(e)
                                                setPassword(e.target.value)
                                        }} 
                                    
                    />
                    <div className="form-message">{isLogin ? '' : 'Password must contain at least 8 characters and include letters, numbers and special characters'}
                    </div>
                </div>
                {isLogin ? 
                    (<div className="form-group">
                        <label htmlFor="remember-me" className="form-label">
                            <input id="remember-me" type="checkbox" checked={rememberMe} value={rememberMe} onChange={(e) => setRememberMe(e.currentTarget.checked)} className="form-checkbox" />
                            Remember me
                        </label>
                    </div>) :
                    (<div className="form-group">
                        <label htmlFor="username" className="form-title">Confirm password</label>
                        <input id="comfirm-password" 
                            type="password" placeholder="Confirm password" 
                            className="form-control" 
                            onBlur={passwordConfirmation} 
                            onChange={(e) => {
                                                superScript(e)
                                        }
                        }/>
                        <div className="form-message">Please re-enter your password</div>
                    </div>)
                }
                <Link to='/homepage'>
                    <button className="form-submit" disabled={isLogin ? !(usernameState && passwordState) : !(usernameState && passwordState && passwordConfirmed)} 
                        onClick={isLogin ? 
                        () => {
                            onLogin({ username, password, rememberMe })
                            setUsername('')
                            setPassword('')
                            setRememberMe('')
                        } : 
                        () => { 
                            onRegister({ username, password })
                            setUsername('')
                            setPassword('')
                        }}>
                    {isLogin ? 'Login' : 'Register'}</button>
                </Link>
                <div className="form-option" onClick={() => setLogin(!isLogin)}>
                    {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                </div>
            </div>
        </div>
    )
}

export default Form
