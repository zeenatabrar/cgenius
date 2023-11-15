import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {Interview} from "../Components/Interview"
import { InterviewTypes } from '../Components/InterviewTypes'


import { Home } from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'



export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/interviews' element={<InterviewTypes/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/interview/:techStack' element={<Interview/>}/>
        </Routes>
    </div>
  )
}
