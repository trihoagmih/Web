import React, { useState } from 'react'

const Add = ({ onCancel, onAdd, setAddState, isEmailRequired, isNameRequired }) => {
    const [title, setTitle] = useState('')
    const [first_name, setFname] = useState('')
    const [last_name, setLname] = useState('')
    const [email, setEmail] = useState('')

    

    const addSuccess = () => {
        const msg = document.querySelector('.banner-msg')
        msg.innerHTML = 'The new patient has been successfully created.'
        msg.style.display = 'block'
        setTimeout(() => {
            msg.style.display = 'none'
        }, 3000)
        setAddState(false)
    }

    return (
        <>
            <div className="directory" >
                <span onClick={() => setAddState(false)}>List patients</span>
                <span className="sub-directory">/Add new</span>
            </div>
            <div className="handle-form">
                <div className="handle-form-heading">Add New Patient</div>
                <div className="handle-form-group">
                    <label htmlFor="title" className="handle-form-title">Title</label>
                    <input type="text" id="title" className="handle-form-control" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="handle-form-group">
                    <label htmlFor="fname" className="handle-form-title">First Name</label>
                    <input type="text" id="fname" className="handle-form-control" onBlur={isNameRequired} onChange={(e) => {
                        isNameRequired(e)    
                        setFname(e.target.value)
                    }}/>
                    <div className="handle-form-msg"></div>
                </div>
                <div className="handle-form-group">
                    <label htmlFor="lname" className="handle-form-title">Last Name</label>
                    <input type="text" id="lname" className="handle-form-control" onBlur={isNameRequired} onChange={(e) => {
                        isNameRequired(e)
                        setLname(e.target.value)
                    }}/>
                    <div className="handle-form-msg"></div>
                </div>
                <div className="handle-form-group">
                    <label htmlFor="email" className="handle-form-title">Email</label>
                    <input type="email" id="email" className="handle-form-control" onBlur={isEmailRequired} onChange={(e) => {
                        isEmailRequired(e)
                        setEmail(e.target.value)
                    }}/>
                    <div className="handle-form-msg"></div>
                </div>
                <div className="handle-form-submit">
                    <button className="btn btn-save btn-l" onClick={() => {
                        onAdd({ title, first_name, last_name, email})
                        setTitle('')
                        setFname('')
                        setLname('')
                        setEmail('')
                        addSuccess()
                    }}>Save</button>
                    <button className="btn btn-cancel" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default Add
