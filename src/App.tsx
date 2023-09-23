import React from 'react'
import './styles/global.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './styles/global.css'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/password" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
