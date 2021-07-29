import React, { useEffect } from 'react'
import Homepage from './components/Homepage'
import Form from './components/Form'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import { useState } from 'react'

const App = () => {
  const [loginState, setLoginState] = useState(false)
  const [users, setUsers] = useState([])
  const [patients, setPatients] = useState([])
  
  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }
    const getPatients = async () => {
      const patientsFromServer = await fetchPatients()
      setPatients(patientsFromServer)
    }
    getUsers()
    getPatients()
  }, [])
  
  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()
    return data
  }
  // Fetch User by Id
  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`)
    const data = await res.json()
    return data
  }
  // Fetch Patients
  const fetchPatients = async () => {
    const res = await fetch('http://localhost:5000/patients')
    const data = await res.json()
    return data
  }

  // Fetch Patient by ID
  // const fetchPatient = async (id) => {
  //   const res = await fetch(`http://localhost:5000/patients/${id}`) 
  //   const data = await res.json()
  //   return data
  // }
 

  const addUser = async (user) => {
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const newUser = await res.json()
    setUsers([...users, newUser])
  }

  const deletePatient = async (id) => {
    await fetch(`http://localhost:5000/patients/${id}`, {
      method: 'DELETE'
    })
    setPatients(patients.filter(patient => patient.id !== id))
  }

  const addPatient = async (patient) => {
    const res = await fetch(`http://localhost:5000/patients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patient)
    })
    const newPatients = await res.json()
    setPatients([...patients, newPatients])
  }

  const updatePatient = async (patientToUpdate) => {
    const res = await fetch(`http://localhost:5000/patients/${patientToUpdate.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patientToUpdate)
    })
    const data = await res.json()
    setPatients(
      patients.map(patient => patient.id === patientToUpdate.id ? data : patient)
    )
  }

  const toggleLogin = async (id) => {
    const userToLogin = await fetchUser(id)
    const updUser = {...userToLogin, isLoggedIn: !userToLogin.isLoggedIn}
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updUser)
    })
    const data = await res.json()

    setUsers(
      users.map((user) => user.id === id ? { ...user, isLoggedIn: data.isLoggedIn} : user)
    )
  }

  const onLogin = ({ username, password, rememberMe }) => {
    const find = users.find((user) => {
      return username === user.username && password === user.password
    })
    console.log(find)
    if (find) {
      toggleLogin(find.id)
      setLoginState(true)
    } else {
      let failMessage = document.querySelector('.form-warning')
      failMessage.style.display = 'block'
      failMessage.innerHTML = "The provided username or password is not correct. Please try again."
    }
  }
  
  const onRegister = (newUser) => {
    const find = users.find((user) => {
      return newUser.username === user.username
    })
    if (find) {
      let failMessage = document.querySelector('.form-warning')
      failMessage.style.display = 'block'
      failMessage.innerHTML = "The username has already existed. Please provide another username."
    } else {
      addUser({...newUser, isLoggedIn: true})
      setLoginState(true)    
    }
  }

  const onLogout = (id) => {
    setLoginState(false)
    toggleLogin(id)
  }


  return (
    <>
      <Router>
        {/* {!loginState ? (<Form onLogin={onLogin} onRegister={onRegister} />): (<Homepage user={users.find(user => user.isLoggedIn === true)} patients={patients} onLogout={onLogout}  deletePatient={deletePatient} addPatient={addPatient} updatePatient={updatePatient}/>)} */}
        {/* <Route path='/login' component={Form}/> */}
        <Switch>
          <Route path='/login'>
            <Form onLogin={onLogin} onRegister={onRegister} />
          </Route>
          <Route path='/homepage'>
           {
            loginState &&
            <Homepage user={users.find(user => user.isLoggedIn === true)} patients={patients} onLogout={onLogout}  deletePatient={deletePatient} addPatient={addPatient} updatePatient={updatePatient}/>
           }
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

