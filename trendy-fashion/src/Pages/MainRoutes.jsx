import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"

import ProductPage from './ProductPage'
import MyAccount from './MyAccount/MyAccount'
import MenHomePage from './MenHomePage'
import WomenHomePage from './WomenHomePage'
import Dashboard from '../Components/Dashboard'
import Login from './Login'
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            
            <Route path='/menpage' element={<MenHomePage />} />
            <Route path='/womenpage' element={<WomenHomePage />} />
            <Route path='/payment' element={""} />
            <Route path='/men/:param' element={<ProductPage />} />
            <Route path='/myAccount' element={<MyAccount/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    )
}

export default MainRoutes
