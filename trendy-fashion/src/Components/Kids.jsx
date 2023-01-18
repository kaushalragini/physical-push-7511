import { Box,  Grid,    VStack } from "@chakra-ui/react";
import React from "react";
import "./Men.css"
const Kids = () => {
  return (
    <Box w="100%" px={10} py={35}>
      <Grid templateColumns="repeat(4,1fr)" gap={1} alignItems="start">
        <VStack alignItems="flex-start" className="dropdown" >
        <ul>
        <li className='firstElement' >NEW IN: CLOTHING</li>
        <li className='firstElement'>NEW IN: FOOTWEAR & ACCS</li>
        <li className='firstElement'>INNERWEAR & SLEEPWEAR</li>
        <li className='firstElement'>BOYS</li>
        <li>Denims & Trousers</li>
        <li>Joggers & Track Pants</li>
        <li>Outwear</li>
        <li>Shirts</li>
        <li>Shorts & 3/4ths</li>
        <li>T-Shirts</li>
        <li className='firstElement'>SHOP BY AGE</li>
       <li>0 To 2 Years</li>
       <li>2 To 5 Years</li>
       <li>5 To 8 Years</li>
       <li>8 To 12 Years</li>
       <li>12 Years And Above</li>
      </ul>

        </VStack>
        <VStack alignItems="start" className="dropdown" >
        <ul>
        <li className='firstElement' >FEATURED </li>
        <li>Denims Under 799</li>
        <li>Shirts Under 599</li>
        <li>T-Shirts Under 399</li>
        <li className='firstElement'>GIRLS</li>
        <li>Dresses & Frocks</li>
        <li>Jeans & Jeggings</li>
        <li>Leggings</li>
        <li>Outwear</li>
        <li>Skirts & Shorts</li>
        <li>Tops & T-Shirts</li>
        <li className='firstElement'>SHOP BY AGE</li>
       <li>0 To 2 Years</li>
       <li>2 To 5 Years</li>
       <li>5 To 8 Years</li>
       <li>8 To 12 Years</li>
       <li>12 Years And Above</li>
      </ul>
        </VStack>
        <VStack alignItems="start" className="dropdown" >
        
        <ul>
        <li className='firstElement' >FEATURED </li>
        <li>Dresses Under 499</li>
        <li>Tops Under 399</li>
        <li className='firstElement'>BABY </li>
       <li>Sets</li>
        <li className='firstElement'>TOYS AND BABYCARE</li>
        <li>Action-Figurine & Collectibles</li>
        <li>Creative & Educational Toys</li>
        <li>Gaming, Robots & Vehicles</li>
        <li>Infants Toys</li>
        <li>Role & Pretend Play</li>
        <li>School,Party Supplies & Books</li>
        <li>Soft Toys</li>
        <li>Toy-Guns & Accessories</li>
        <li className='firstElement'>COLLECTIONS</li>
        <li className='firstElement'>AJIO EXCLUSIVES</li>
        <li className='firstElement'>FOOTWEAR & ACCESSORIES</li>
        </ul>
        </VStack>
        <VStack alignItems="start" className="dropdown" >
        <ul>
        <li className='firstElement'>FEATURED BRANDS</li>
       <li>Crocs</li>
       <li>MINI KLUB</li>
       <li>Gini & Jony</li>
       <li>Hamleys</li>
       <li>Mothercare</li>
       <li>Marks & Spencer</li>
       <li>Pepe Jeans</li>
       <li>Peppermiint</li>
       <li>UCB Kids</li>
       <li>U.S.P.A Kids</li>
       <li>MILA BABY</li>
       <li>Under Armour</li>
       <li>MUJI</li>
       <li>Lee Cooper</li>
        </ul>
        </VStack>
        
      </Grid>
     
    </Box>
  );
};

export default Kids;