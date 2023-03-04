import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"

import ProductPage from './ProductPage'
import MyAccount from './MyAccount/MyAccount'
import MenHomePage from './MenHomePage'
import WomenHomePage from './WomenHomePage'
import Dashboard from '../Components/Dashboard'
// import Login from './Login'
import WomenProductPage from './WomenProductPage'
import SingleProductPage from './SingleProductPage'
import SingleWomenProductPage from './SingleWomenProductPage'
import Customer from '../Components/Customer'
import Checkout from './Checkout'
import Payments from "./Payments"
import CartPage from './CartPage'
// import HomePage1 from './trendyHome/HomePage1'
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/menpage' element={<MenHomePage />} />
            <Route path='/womenpage' element={<WomenHomePage />} />
            <Route path='/payment' element={""} />
            <Route path='/men/:param' element={<ProductPage />} />
            <Route path='/myAccount' element={<MyAccount />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/women/:param' element={<WomenProductPage />} />
            <Route path="/men/:param/:param1/:param2/:param3/:param4" element={<SingleProductPage />} />
            <Route path="/women/:param/:param1/:param2/:param3/:param4" element={<SingleWomenProductPage />} />
            <Route path='/myAccount' element={<MyAccount />} />
            <Route path="/product/:id" element={<CartPage />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/payments' element={<Payments />} />
            <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
    )
}

export default MainRoutes
