import { Box,  Grid,    VStack } from "@chakra-ui/react";
import React from "react";
import "./Men.css"
const Indie = () => {
  return (
    <Box w="100%" px={10} py={35}>
      <Grid templateColumns="repeat(4,1fr)" gap={1} alignItems="start">
        <VStack alignItems="flex-start" className="dropdown" >
        <ul>
        <li className='firstElement' >NEW IN: CLOTHING</li>
        <li className='firstElement'>NEW IN: SAREES</li>
        <li className='firstElement'>NEW IN: FOOTWEAR & ACCS</li>
        <li className='firstElement'>NEW IN: HOME</li>
        <li className='firstElement'>TOP SELLERS</li>
        <li className='firstElement'>CLOTHING</li>
        <li>Sarees</li>
        <li>Kurtas </li>
        <li>Dresses</li>
        <li>Tops & Tunics</li>
        <li>Dupattas</li>
        <li>Dress Materials</li>
        <li>Blouses & Blouse Fabrics</li>
        <li>Pants,Skirts & Palazzos</li>
        <li className='firstElement'>ACCESSORIES</li>
       <li>Bags & Belts</li>
       <li>Shawls & Wraps</li>
       <li>Stoles & Scarves</li>
      </ul>

        </VStack>
        <VStack alignItems="start" className="dropdown" >
        <ul>
        <li className='firstElement' >HOME </li>
        <li>Bedsheets</li>
        <li>Cushions And Covers</li>
        <li>Curtains</li>
        <li>Table Linen</li>
        <li>Rugs, Carpets & Dhurries</li>
        <li className='firstElement'>WINTERWEAR</li>
        <li className='firstElement'>MENSWEAR</li>
        <li>Kurtas</li>
        <li>Shirts</li>
        <li>Ethnic Suits</li>
        <li>Jacket</li>
        <li>Accessories</li>
        
        <li className='firstElement'>FOOTWEAR</li>
      <li>Chappals</li>
      <li>Juttis</li>
      </ul>
        </VStack>
        <VStack alignItems="start" className="dropdown" >
        
        <ul>
        <li className='firstElement' >REGIONAL SPECIALITIES </li>
        
       <li>Ajrak</li>
       <li>Bagru</li>
       <li>Bagh</li>
       <li>Banaras & Brocades</li>
       <li>Chanderi & Maheswari</li>
       <li>Indigo</li>
       <li>Ilkal & Khun</li>
       <li>IKAT</li>
       <li>Kota</li>
        <li>Kalamkari</li>
        <li>Kullu</li>
        <li>Kutch Embroidery</li>
        <li>Kosa & Tussar</li>
        <li>Linen</li>
        <li>Mangalgiri</li>
        <li>Narayanpet</li>
        <li>Pipar & Balotra</li>
        <li>Shibori</li>
        <li>South Cotton</li>
        <li>South Silk</li>
        <li>Tant Tangali & Jamdani</li>
        </ul>
        </VStack>
        <VStack alignItems="start" className="dropdown" >
        <ul>
        <li className='firstElement'>FEATURED BRANDS</li>
       <li>Indie Picks</li>
       <li>Swadesh</li>
       <li>Fabindia</li>
       <li>Qura</li>
       <li>Indethenic</li>
       <li>Pothys</li>
       <li>Banaras Silk Works</li>
       <li>Awesome</li>
       <li>Arteastri</li>
       <li>Sajasajo</li>
       <li>Nakashi</li>
       <li>Angoshobha</li>
       <li>Weaversvilla</li>
       <li>Ankuta</li>
       <li>Rangdeep</li>
        </ul>
        </VStack>
        
      </Grid>
     
    </Box>
  );
};

export default Indie;