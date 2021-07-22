import React from 'react'

const Form = () => {
    let isLogin = true
    return (
        <div className="main">
            <div className="form-warning"></div>
            <div className="form">
                <h1 className="form-heading">
                    {isLogin ? 'Login with your account' : 'Register a new account'}
                    </h1>
                <div className="form-group">
                    <label htmlFor="username" className="form-title">Username</label>
                    <input id="username" type="text" placeholder="Username" className="form-control" autoComplete />
                    <div className="form-message">
                        {isLogin ? '' : 'Please create your username'}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-title">Password</label>
                    <input id="password" type="password" placeholder="Password" className="form-control" />
                    <div className="form-message">
                        {isLogin ? '' : 'Password must contain at least 8 characters and include letters, numbers and special characters'}
                    </div>
                </div>
                {isLogin ? 
                    (<div className="form-group">
                        <label htmlFor="remember-me" className="form-label">
                            <input id="remember-me" type="checkbox" placeholder="Password" className="form-checkbox" />
                            Remember me
                        </label>
                    </div>) :
                    (<div className="form-group">
                        <label htmlFor="username" className="form-title">Confirm password</label>
                        <input id="comfirm-password" type="password" placeholder="Confirm password" className="form-control" />
                        <div className="form-message">Please re-enter your password</div>
                    </div>)
                }
                <button className="form-submit" disabled="true">{isLogin ? 'Login' : 'Register'}</button>
                <div className="form-option">
                    <a href="/" className="form-option-link">{isLogin ? "Don't have an account? Register" : "Already have an account? Login"}</a>
                </div>
            </div>
        </div>
    )
}

export default Form
