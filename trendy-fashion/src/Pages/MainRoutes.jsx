import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import Login from './Login'
import ProductPage from './ProductPage'
import MyAccount from './MyAccount/MyAccount'
import MenHomePage from './MenHomePage'
import WomenHomePage from './WomenHomePage'
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/menpage' element={<MenHomePage />} />
            <Route path='/womenpage' element={<WomenHomePage />} />
            <Route path='/payment' element={""} />
            <Route path='/men/:param' element={<ProductPage />} />
            <Route path='/myAccount' element={<MyAccount/>} />
        </Routes>
    )
}

export default MainRoutes
