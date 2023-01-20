import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"

import ProductPage from './ProductPage'
import MyAccount from './MyAccount/MyAccount'
import MenHomePage from './MenHomePage'
import WomenHomePage from './WomenHomePage'
<<<<<<< HEAD
import Dashboard from '../Components/Dashboard'
import Login from './Login'
=======
import WomenProductPage from './WomenProductPage'
import SingleProductPage from './SingleProductPage'
import SingleWomenProductPage from './SingleWomenProductPage'
>>>>>>> aeb60d2e8f6c1de32d06f5860f52d52ed0f5618a
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            
            <Route path='/menpage' element={<MenHomePage />} />
            <Route path='/womenpage' element={<WomenHomePage />} />
            <Route path='/payment' element={""} />
            <Route path='/men/:param' element={<ProductPage />} />
<<<<<<< HEAD
            <Route path='/myAccount' element={<MyAccount/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
=======
            <Route path='/women/:param' element={<WomenProductPage />} />
            <Route path="/men/:param/:param1/:param2/:param3/:param4" element={<SingleProductPage />} />
            <Route path="/women/:param/:param1/:param2/:param3/:param4" element={<SingleWomenProductPage />} />
            <Route path='/myAccount' element={<MyAccount />} />
            <Route path='*' element={<h2>Page Not Found</h2>} />
>>>>>>> aeb60d2e8f6c1de32d06f5860f52d52ed0f5618a
        </Routes>
    )
}

export default MainRoutes
