import { Box,  Grid,    VStack } from "@chakra-ui/react";
import React from "react";
import "./Men.css"
const Men = () => {
  return (
    <Box w="100%" px={10} py={35}>
      <Grid templateColumns="repeat(4,1fr)" gap={3} alignItems="start">
        <VStack alignItems="flex-start" className="dropdown" >
        <ul>
                        <li className='firstElement' >CLOTHING</li>
                        <li className='firstElement'>FOOT WEAR</li>
                        <li className='firstElement'>ACCESSORIES</li>
                        <li className='firstElement'>ALL THATS NEW</li>
                        <li>Clothing</li>
                        <li>Footwear</li>
                        <li>Accessories</li>
                        <li className='firstElement'>AJIO GLOBAL</li>
                        <li className='firstElement'>WINTER WEAR</li>
                        <li className='firstElement'>NIGHT & LOUNGEWEAR</li>
                        <li className='firstElement'>GROOMING</li>
                        <li className='firstElement'>ETHNIC & FESTIVE</li>
                        <li>Kurtas And Shirts</li>
                        <li>Nehru Jackets</li>
                      </ul>

        </VStack>
        <VStack alignItems="start" className="dropdown" >
        <ul>
                        <li className='firstElement' >WESTERN WEAR</li>
                        <li>Jackets & Coats</li>
                        <li>Jeans</li>
                        <li>Shirts</li>
                        <li>Shorts & 3/4ths</li>
                        <li>Sweatshirts & Hoodies</li>
                        <li>Track Pants</li>
                        <li>Trousers & Pants</li>
                        <li>T-Shirts</li>
                        <li className='firstElement'>FOOT WEAR</li>
                        <li>Casual Shoes</li>
                        <li>Flip-Flops & Slippers</li>
                        <li>Formal Shoes</li>
                        <li>Sandals</li>
                        <li>Sneakers</li>
                        <li>Sports Shoes</li>
                        
                      </ul>
        </VStack>
        <VStack alignItems="start" className="dropdown" >
        <ul>
                        <li className='firstElement'>ACCESSORIES</li>
                        <li>BAckpacks</li>
                        <li>Bags & Wallets</li>
                        <li>Belts</li>
                        <li>Caps & Hats</li>
                        <li>Fashoin Accessories</li>
                        <li>Lagguage & Trolleys</li>
                        <li>Socks</li>
                        <li>Flip-Flops & Slippers</li>
                        <li>Sunglasses & Frames</li>
                        <li>Watches</li>
                        <li className='firstElement'>PRECIOUS JEWELLERY</li>
                        <li>Gold And Silver Coins</li>
                        <li>Gold And Diamond Jewellery</li>
                        <li>Silver Jewellery</li>
                        <li className='firstElement'>INNERWAER</li>
                        <li>Briefs</li>
                        <li>Trunks & Boxers</li>
                        <li>Vests</li>
                        </ul>
        </VStack>
        <VStack alignItems="start" className="dropdown" >
        <ul>
                        <li className='firstElement'>FEATURED</li>
                        <li>Bags Under 1499</li>
                        <li>Footwear Under 1499</li>
                        <li>Jeans Under 1199</li>
                        <li>Shorts & 3/4ths Under 499</li>
                        <li className='firstElement'>#AJIORECOMMENDS</li>
                        <li>Play Time</li>
                        
                        </ul>
        </VStack>
        
      </Grid>
     
    </Box>
  );
};

export default Men;