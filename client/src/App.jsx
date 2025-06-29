import './App.css'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login' 
import AddEmployee from './pages/AddEmployee'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </>
  )
}

export default App
