import { Button, Flex, Heading, Image, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Text, VStack } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
const WishList=()=> {

    return (
      <>
        <Popover>
  <PopoverTrigger>
    <Button colorScheme='teal' variant='link'> <Image paddingBottom="10px" src="https://assets.ajio.com/static/img/wishlistIcon.svg" /></Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader textAlign="center" >
        Item(s) added to your bag
      </PopoverHeader>
      {/* <PopoverCloseButton /> */}
      <PopoverBody>
       <Flex gap={3} >
        <VStack>
            <Image src="https://assets.ajio.com/medias/sys_master/root/20211023/6Qlf/617313e1aeb2690110a3e30e/-286Wx359H-460453611-white-MODEL.jpg" />
        </VStack>
        <VStack textAlign="left" >
            <Heading as="h6" fontSize="15px" >Rs. 1,649</Heading>
            <Text colorScheme="gray.500" fontWeight="bold" >72% off</Text>
            <Text>Slim Fit Strip....</Text>
            <Heading as="h6" fontSize="14px" >Color: NAVY</Heading>
            <Flex>
            <Text>Total:</Text>   <Heading as="h6" fontSize="18px" >Rs.392.00</Heading>
            </Flex>
        
        </VStack>
       </Flex>
      <Link to="/men/clothing/the-indian-garage-co-slim-fit-striped-shirt-with-patch-pocket/p/460453611_white/460453611002">
      <Button margin="auto" bgColor="#d5a249" color="white" >PROCEED TO BAG</Button>
      </Link>
      </PopoverBody>
      <PopoverFooter fontSize="13px" textAlign="center" > Free Shipping & Returns | 100% Handpicked | Assured Quality </PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
      </>
    )
  }

  export default WishList;