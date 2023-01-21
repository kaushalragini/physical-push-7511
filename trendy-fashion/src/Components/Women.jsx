import { Box, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Men.css"
const Women = () => {
  return (
    <Box w="100%" px={10} py={35}>
      <Grid templateColumns="repeat(4,1fr)" gap={3} alignItems="start">
        <VStack alignItems="flex-start" className="dropdown" >
          <ul>
            <Link to="/women/clothing"><li className='firstElement' >CLOTHING</li></Link>
            <Link to="/women/footwear"><li className='firstElement'>FOOT WEAR</li></Link>
            <Link to="/women/accessories"><li className='firstElement'>ACCESSORIES</li></Link>
            <Link to="/women/clothing"><li className='firstElement'>ALL THATS NEW</li></Link>
            <Link to="/women/footwear"><li className='firstElement'>WINTER WEAR</li></Link>
            <Link to=""><li className='firstElement'>AJIO GLOBAL</li></Link>
            <Link to=""><li className='firstElement'>NIGHT & LOUNGEWEAR</li></Link>
            <Link to=""><li className='firstElement'>BEAUTY</li></Link>
            <Link to=""><li className='firstElement'>ATHLEISURE</li></Link>
            <Link to=""><li className='firstElement'>FUSIONWEAR</li></Link>
            <Link to=""> <li >dresses & Gowns</li></Link>
            <Link to=""> <li>kurtas</li></Link>
            <Link to=""><li>Kurtis & Tunics</li></Link>
            <Link to=""><li>Pants & Shorts</li></Link>
            <Link to=""><li>Jackets & Shrugs</li></Link>
            <Link to=""><li>Shirts,Tops & Tunics</li></Link>
          </ul>
        </VStack>
        <Link to="/women/clothing">
          <VStack alignItems="start" className="dropdown" >
            <ul>
              <li className='firstElement'>ETHNIC WEAR</li>
              <li>Kurtas</li>
              <li>Dress Material</li>
              <li>Salwars & Chudidars</li>
              <li>Kurtis & Tunics</li>
              <li>Sarees</li>
              <li>Dupattas</li>
              <li>Kurtas Suit Sets</li>
              <li>Blouses</li>
              <li>Leggings</li>
              <li>Skirts & Ghagras</li>
              <li>Shawls & Wraps</li>
              <li>Palazzos & Culottes</li>
              <li className='firstElement'>JEWELLERY</li>
              <li>Gold And Silver Coins</li>
              <li>Gold And Diamond Jewellery</li>
              <li>Silver Jewellery</li>
              <li>Fashion Jewellery</li>
            </ul>
          </VStack>
        </Link>
        <VStack alignItems="start" className="dropdown" >
          <li className='firstElement'>LINGERIE & INNERWEAR</li>
          <li>Bras</li>
          <li>Panties</li>
          <li>Camisoles &  Slips</li>
          <li>Maternity Wear</li>
          <li>Thermal Wear</li>
          <li className='firstElement'>ACCESSORIES</li>
          <li>Sunglasses & Frames</li>
          <li>Watches</li>
          <li>Bags,Belts And Wallets</li>
          <li>Stoles And Scarves</li>
          <li>Socks And Stockings</li>
          <li>Caps</li>
          <li>Lagguage & Trolleys</li>
          <ul>
            <li className='firstElement'>FEATURED</li>
            <li>Dresses Under 999</li>
            <li>Footwear Under 799</li>
          </ul>
        </VStack>
        <Link to='/women/footwear'> <VStack alignItems="start" className="dropdown" >
          <ul>
            <li className='firstElement'>FOOTWEAR</li>
            <li>Casual Shoes</li>
            <li>Flat Sandals</li>
            <li>Sports Shoes</li>
            <li>Flip Flop & Slippers</li>
            <li>Heeled Sandals</li>
            <li>Heeled Shoes</li>
            <li>Boots</li>
            <li className='firstElement'>WESTERN WEAR</li>
            <li>Tops</li>
            <li>T-Shirts</li>
            <li>Jeans & Jeggings</li>
            <li>Dresses</li>
            <li>Trousers & Pants</li>
            <li>Shirts</li>
            <li>Track Pants</li>
            <li>Skirts & Shorts</li>
            <li>Jackets & Coats</li>
            <li>Jumpsuits & Playsuits</li>
            <li>Shrugs & Boleros </li>
            <li>Sweatshirts & Hoodies</li>
            <li>Sweaters & Cardigans</li>
          </ul>
        </VStack>
        </Link>
      </Grid>
    </Box>
  );
};

export default Women;