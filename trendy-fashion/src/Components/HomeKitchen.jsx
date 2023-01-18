import { Box,  Grid,    VStack } from "@chakra-ui/react";
import React from "react";
import "./Men.css"
const HomeKitchen = () => {
  return (
    <Box w="100%" px={5} py={35}>
      <Grid templateColumns="repeat(4,1fr)" gap={1} alignItems="start">
        <VStack alignItems="flex-start" className="dropdown" >
        <ul>
        <li className='firstElement' >BED LINEN</li>
        <li>Bedsheets</li>
        <li>Bedding Sets</li>
        <li>Blankets,Dohras & Quilts</li>
        <li>Comforters</li>
        <li>Bed Covers</li>
        <li>Mattress Protectors</li>
        <li>Quilt & Duvet Covers</li>
        <li className='firstElement'>CUSHIONS & PILLOWS</li>
        <li>Cushions</li>
        <li>Pillows</li>
        <li>Bed Wedges & Neck Pillows</li>
        <li>Bolsters</li>
       
        <li>Cushion Covers </li>
        <li>Pillow Covers</li>
        
        <li className='firstElement'>RUGS, CARPETS & MATS</li>
       
      </ul>

        </VStack>
        <VStack alignItems="start" className="dropdown" >
        <ul>
        <li className='firstElement' >CURTAIN & ACCESSORIES </li>
        <li>Window Curtains</li>
        <li>Door Curtains</li>
        <li>Curtains</li>
      
        <li className='firstElement'>KITCHEN</li>
        <li className='firstElement'>MENSWEAR</li>
        <li>Cookware & Cultery</li>
        <li>Bakeware</li>
        <li>Kitchen Tools</li>
        <li>Kitchen Aprons,Gloves & Towel</li>
        <li>Kitchen Organisers</li>
        
        <li className='firstElement'>DINING</li>
      <li>Serveware & Drinkware</li>
      <li>Table Linen Sets</li>
      <li>Table Covers & Runners</li>
      <li>Table Napkins</li>
      <li>Placemats & Coasters</li>
      <li className='firstElement'>STATIONERY & ORGANISERS</li>
      </ul>
        </VStack>
        <VStack alignItems="start" className="dropdown" >
        
        <ul>
        <li className='firstElement' >HOME DECOR </li>
        
       <li>Wall Decor</li>
       <li>Wall Shelves</li>
       <li>Clocks</li>
       <li>Photo Frames</li>
       <li>Mirrors</li>
       <li>Lamp, Diyas & Candle</li>
       <li>Home Fragrance</li>
       <li>Plants & Flowers</li>
       <li className='firstElement' >FESTIVE GIFTS </li>
       <li>Bells & Wind Chimes</li>
        <li>Decorative Pots,PLates & Jars</li>
        <li>Fengshui</li>
        <li>Indoor Fountains</li>
        <li>Religious Idols</li>
        <li>Vases</li>
        <li className='firstElement' >GARDENING & PLANTERS </li>
        </ul>
        </VStack>
        <VStack alignItems="start" className="dropdown" >
        <ul>
        <li className='firstElement'>BATH</li>
       <li>Bath Towel & Robes</li>
       <li>Hand & Face Towels</li>
       <li>Towel Sets</li>
       <li>Bathing Stools</li>
       <li>Bath Curtains & Mats</li>
       <li>Bathroom Organisers </li>
       <li>Laundry Baskets & Dryers</li>
       <li>Holders & More</li>
       <li className='firstElement' >HOME ESSENTIALS </li>
       <li className='firstElement' >FEATURED STORIES </li>
       <li>GIFT For Everyone Under 999</li>
       <li>Winter Carnival Upto 60</li>
       <li>Kids Room min 40</li>
       <li>Heritage of India</li>
    
        </ul>
        </VStack>
        
      </Grid>
     
    </Box>
  );
};

export default HomeKitchen;