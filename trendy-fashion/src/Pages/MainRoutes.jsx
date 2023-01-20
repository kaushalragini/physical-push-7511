import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import Login from './Login'
import ProductPage from './ProductPage'
import MyAccount from './MyAccount/MyAccount'
import MenHomePage from './MenHomePage'
import WomenHomePage from './WomenHomePage'
import WomenProductPage from './WomenProductPage'
import SingleProductPage from './SingleProductPage'
import SingleWomenProductPage from './SingleWomenProductPage'
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/menpage' element={<MenHomePage />} />
            <Route path='/womenpage' element={<WomenHomePage />} />
            <Route path='/payment' element={""} />
            <Route path='/men/:param' element={<ProductPage />} />
            <Route path='/women/:param' element={<WomenProductPage />} />
            <Route path="/men/:param/:param1/:param2/:param3/:param4" element={<SingleProductPage />} />
            <Route path="/women/:param/:param1/:param2/:param3/:param4" element={<SingleWomenProductPage />} />
            <Route path='/myAccount' element={<MyAccount />} />
            <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
    )
}

export default MainRoutes
