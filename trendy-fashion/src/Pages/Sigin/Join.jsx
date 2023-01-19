
import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  Button,
  Heading,
  Input,
  Image,
  Box,
  Text,
  VStack,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

import Otp from "./Otp"

//import { Link } from "react-router-dom"


const Join = () => {
  return (
    <Popover >

      <PopoverTrigger>
        <Button color="black" fontSize="10px" >Sign In / Join AJIO</Button>
      </PopoverTrigger>


      <PopoverContent
        w={['full', 'md']}
        p={[8, 10]}
        mt={[20, '10vh']}
        mx='auto'
        border={['none', '1px']}
        borderColor={['', 'gray.300']}
        borderRadius={10}
      >

        <VStack spacing={4} align='flex-start' w='full' >
          <VStack spacing={4} align='flex-start' w='full' >

            <PopoverCloseButton />

            <Heading>Welcome to AJIO</Heading>
            <Text>Join/Sign In using</Text>

            <Box display={['flex']} justifyContent="space-between" >
                        <Image width="40%" height="60%" src="https://user-images.githubusercontent.com/104529601/213227020-a0068aeb-d98e-4d39-aade-b429df45cce5.png" />
                        <Image width="40%" height="60%" src="https://user-images.githubusercontent.com/104529601/213227043-7971fb62-aff6-428a-ad27-c75e0dc748b5.png" />
                    </Box>

            <Box display="flex" justifyContent="space-between" color="gray.400" >
              <Box marginLeft="175px" ></Box>
              <Box>Or</Box>
              <Box></Box>
            </Box>

          </VStack>

          <FormControl isRequired>
            <FormLabel>Enter Mobile Number/Email</FormLabel>
            <Input rounded='none' variant='filled' type='email' />
          </FormControl>

          {/* <Link to='/otp' > <Button rounded='none' colorScheme='orange' w='full' >CONTINUE</Button></Link> */}
         
          <Otp/>

          <Text color="gray.400" >By Signing In, I agree to Terms and Conditions. </Text>

        
        </VStack>

      </PopoverContent>

    </Popover>

  )
}

export default Join;
