import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>

    </BrowserRouter>
  )
}

export default App
