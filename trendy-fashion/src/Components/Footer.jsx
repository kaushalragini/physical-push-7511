import { Box,  Flex,  Image,  SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"
const Footer = () => {

  return (
   <Box backgroundColor="#2c4152" color="white"fontSize="15px" className="CompleteFooter" >
    
    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }}  spacing={8}>
        <VStack>
            <ul>
                <li className='headElememt' >Ajio</li>
                <li>Who we Are</li>
                <li>Join Our Team</li>
                <li>Terms & Conditions</li>
                <li>We Respect Your Privacy</li>
                <li>Fees & Payements</li>
                <li>Returns & Refunds Policy</li>
                <li>Promotions Terms & Conditions</li>
            </ul>
        </VStack>
        <VStack>
            <ul>
                <li className='headElememt' >Help</li>
                <li>Track Your Order</li>
                <li>Frequently Asked Questions</li>
                <li>Returns</li>
                <li>Cancellations</li>
                <li>Payements</li>
                <li>Customer Care</li>
                <li>How Do I Redeem My Coupon</li>
            </ul>
        </VStack>
        <VStack>
            <ul>
                <li className='headElememt' >Shop by</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Indie</li>
                <li>Stores</li>
                <li>New Arrivals</li>
                <li>Brand Directory</li>
                <li>Home</li>
                <li>Collections</li>
            </ul>
        </VStack>
        <VStack>
            <ul>
                <li className='headElememt' >Follow us</li>
                <li>Facebook</li>
                <li>Instagram- AJIOlife</li>
                <li>Instagram-AJIO LUXE</li>
                <li>Twitter</li>
                <li>Pinterest</li>
            </ul>
        </VStack>
        </SimpleGrid>
        <hr style={{width:"85%",margin:"auto"}} />
        <Flex>
            
        </Flex>
        <SimpleGrid gap={100} columns={{ base: 1, sm: 1, md: 2, lg: 2 }} style={{padding:"30px 0px"}} >
            <VStack>
                <Image width="70%" src="https://user-images.githubusercontent.com/107903370/213463054-d7bdc9be-d7eb-4129-a57f-e76ca62ec8e0.png" />
                
            </VStack>
            <VStack>
            <Image src="https://user-images.githubusercontent.com/107903370/213464364-e566d91e-60c8-4066-bf18-6edb6758dbed.png" />

            </VStack>
        </SimpleGrid>
   </Box>
  )
}

export default Footer