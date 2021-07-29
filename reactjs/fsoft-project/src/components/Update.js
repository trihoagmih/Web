import React, { useState } from 'react'

const Update =  ({ onCancel, onUpdate, patientToUpdate, setUpdateState, isEmailRequired, isNameRequired }) => {
    const [title, setTitle] = useState(patientToUpdate.title)
    const [first_name, setFname] = useState(patientToUpdate.first_name)
    const [last_name, setLname] = useState(patientToUpdate.last_name)
    const [email, setEmail] = useState(patientToUpdate.email)
    const [id, setId] = useState(patientToUpdate.id)

    

    const updateSuccess = () => {
        const msg = document.querySelector('.banner-msg')
        msg.innerHTML = 'TThe patient has been successfully updated.'
        msg.style.display = 'block'
        setTimeout(() => {
            msg.style.display = 'none'
        }, 3000)
        setUpdateState(false)
    }
    return (
        <>
            <div className="directory" >
                <span onClick={() => setUpdateState(false)}>List patients</span>
                <span className="sub-directory">/Update Patient</span>
            </div>
            <div className="handle-form">
                <div className="handle-form-heading">Add New Patient</div>
                <div className="handle-form-group">
                    <label htmlFor="title" className="handle-form-title">Title</label>
                    <input type="text" id="title" className="handle-form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="handle-form-group">
                    <label htmlFor="fname" className="handle-form-title">First Name</label>
                    <input type="text" id="fname" className="handle-form-control" placeholder={first_name} onBlur={isNameRequired} onChange={(e) => {
                        isNameRequired(e)    
                        setFname(e.target.value)
                    }}/>
                    <div className="handle-form-msg"></div>
                </div>
                <div className="handle-form-group">
                    <label htmlFor="lname" className="handle-form-title">Last Name</label>
                    <input type="text" id="lname" className="handle-form-control" value={last_name} onBlur={isNameRequired} onChange={(e) => {
                        isNameRequired(e)
                        setLname(e.target.value)
                    }}/>
                    <div className="handle-form-msg"></div>
                </div>
                <div className="handle-form-group">
                    <label htmlFor="email" className="handle-form-title">Email</label>
                    <input type="email" id="email" className="handle-form-control" value={email} onBlur={isEmailRequired} onChange={(e) => {
                        isEmailRequired(e)
                        setEmail(e.target.value)
                    }}/>
                    <div className="handle-form-msg"></div>
                </div>
                <div className="handle-form-submit">
                    <button className="btn btn-save btn-l" onClick={() => {
                        onUpdate({ id, title, first_name, last_name, email })
                        setId()
                        setTitle('')
                        setFname('')
                        setLname('')
                        setEmail('')
                        updateSuccess()
                    }}>Save</button>
                    <button className="btn btn-cancel" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default Update
