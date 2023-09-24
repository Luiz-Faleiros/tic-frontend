import React from 'react'
import './styles/global.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './styles/global.css'
import Login from './components/Login'
import ForgetPassword from './components/ForgetPassword'

function App() {
  return (
    <Router>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/password" element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
