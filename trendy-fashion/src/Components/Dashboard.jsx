import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminAddProduct from './Admin/AdminAddProduct'

const Dashboard = () => {
  let navigate = useNavigate()
  return (
    <div>
      <h1>
        Welcome to Dashboard
      </h1>
      <Button bgColor="#D5a249" onClick={() => navigate("/login")}>Logout</Button>


      <AdminAddProduct />
    </div>
  )
}

export default Dashboard
