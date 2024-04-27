import React from 'react'
import Loader from './component/Loader'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from "./component/Login"
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Loader />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      )
}
export default App