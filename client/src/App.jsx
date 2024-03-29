import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home,Signin,Signup, Dashboard, About,Projects } from './pages'
import Header from './components/Header'

function App() {


  return (
    <BrowserRouter>
    <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
