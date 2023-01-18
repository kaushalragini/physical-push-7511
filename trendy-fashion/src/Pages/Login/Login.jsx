import React from 'react';
import { Box } from '@chakra-ui/react';
import Join from './Join';
import Otp from './Otp';
  
const login = () => {
  return (
    <Box>
        <Join/>
        <Otp/>
    </Box>
  )
}

export default login
