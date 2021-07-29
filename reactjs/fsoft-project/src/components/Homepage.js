import React from 'react'
import Table from './Table'
import { useState } from 'react'
import Add from './Add'
import Update from './Update'
import { BrowserRoute as Router, Route } from 'react-router-dom'

const Homepage = ({ user, patients, onLogout, deletePatient, addPatient, updatePatient }) => {
    const [addState, setAddState] = useState(false)
    const [updateState, setUpdateState] = useState(false)
    const [patientToUpdate, setPatientToUpdate] = useState({})
    
    const Adding = (e) => {
        setAddState(true)
    }
    const onCancel = (e) => {
        if(addState) {
            setAddState(false)
        }
        if(updateState) {
            setUpdateState(false)
        }
    }
    
    const Updating = (patient) => {
        setPatientToUpdate(patient)
        setUpdateState(true)
    }

    const isNameRequired = (e) => {
        const errElement = e.target.parentElement
        const msg = errElement.querySelector('.handle-form-msg')
        const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
        if(!e.target.value) {
            msg.innerHTML = 'The field is required'
            errElement.classList.add('invalid')
        } else {
            if (regex.test(e.target.value)) {
                msg.innerHTML = ''
                errElement.classList.remove('invalid')
            } else {
                msg.innerHTML = 'Invalid'
                errElement.classList.add('invalid')
            }
        }
    }
    
    const isEmailRequired = (e) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const errElement = e.target.parentElement
        const msg = errElement.querySelector('.handle-form-msg')
        if(!e.target.value) {
            msg.innerHTML = 'The field is required'
            errElement.classList.add('invalid')
        } else {
            if (regex.test(e.target.value)) {
                msg.innerHTML = ''
                errElement.classList.remove('invalid')
            } else {
                msg.innerHTML = 'Please enter a valid email address'
                errElement.classList.add('invalid')
            }
        }
    }
   
    

    return (
        <div className="homepage">
            <nav className="nav">
                <div className="user-title">
                    {user ? user.username : ''}
                </div>
                <div className="logout" onClick={() => onLogout(user.id)}>
                    Logout
                </div>
            </nav>
            {/* Toi uu hon viec hien banner */}
            <div className="banner-msg"></div>
            {!addState ? (updateState ? <Update onCancel={onCancel} onUpdate={updatePatient} patientToUpdate={patientToUpdate} setUpdateState={setUpdateState} isEmailRequired={isEmailRequired} isNameRequired={isNameRequired}/> : <Table Adding={Adding} Updating={Updating} Deleting={deletePatient} patients={patients}/>) :<Add onCancel={onCancel} onAdd={addPatient} setAddState={setAddState} isEmailRequired={isEmailRequired} isNameRequired={isNameRequired}/>}
            
        </div>
    )
}

export default Homepage
