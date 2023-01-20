import { Button, Flex, Heading, Image, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Text, VStack } from "@chakra-ui/react";

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
            <Image src="https://assets.ajio.com/medias/sys_master/root/20211023/slbO/61730bc4f997ddf8f1e33f20/-78Wx98H-460453611-white-MODEL3.jpg" />
        </VStack>
        <VStack textAlign="left" >
            <Heading as="h6" fontSize="15px" >Rs. 392</Heading>
            <Text colorScheme="gray.500" fontWeight="bold" >51% off</Text>
            <Text>Slim Fit Strip....</Text>
            <Heading as="h6" fontSize="14px" >Color: NAVY</Heading>
            <Flex>
            <Text>Total:</Text>   <Heading as="h6" fontSize="18px" >Rs.392.00</Heading>
            </Flex>
        
        </VStack>
       </Flex>
      
      <Button margin="auto" bgColor="#d5a249" color="white" >PROCEED TO BAG</Button>
      
      </PopoverBody>
      <PopoverFooter fontSize="13px" textAlign="center" > Free Shipping & Returns | 100% Handpicked | Assured Quality </PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
      </>
    )
  }

  export default WishList;