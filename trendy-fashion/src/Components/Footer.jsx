import { Box,  Flex,  SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
   <Box backgroundColor="#2c4152" color="white"fontSize="15px" className="CompleteFooter" >
    
    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing={8}>
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
   </Box>
  )
}

export default Footer