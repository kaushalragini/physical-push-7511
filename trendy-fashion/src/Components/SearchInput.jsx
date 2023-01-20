import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Men.css"
const SearchInput = () => {
  return (
    <Box w="100%" px={5} py={35} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >

      <VStack alignItems="flex-start" className="dropdown" w="400"  >
        <ul>
          <Text fontSize="18px" >Top Searches</Text>
          <Link to="/men/footwear" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px", paddingRight: "200px" }}  >Shoes</li></Link>
          <Link to="#" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px" }}  >Jackets</li></Link>
          <Link to="#" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px" }}  >Jeans</li></Link>
          <Link to="#" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px" }}  >Joggers</li></Link>
          <Link to="#" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px" }}  >Kurti</li></Link>
          <Link to="#" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px" }}  >Boots</li></Link>
          <Link to="#" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px" }}  >Shirts</li></Link>
          <Link to="#" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px" }}  >Top</li></Link>
          <Link to="#" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px" }}  >Heals</li></Link>
          <Link to="#" >  <li style={{ borderBottom: "1px solid gray", fontSize: "20px" }}  >Sneaker</li></Link>

        </ul>

      </VStack>




    </Box>
  );
};

export default SearchInput;