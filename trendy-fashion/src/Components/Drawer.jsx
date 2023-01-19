import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Image, Input, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import {useRef, useState} from "react";
// import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import Face4OutlinedIcon from '@mui/icons-material/Face4Outlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import SevereColdOutlinedIcon from '@mui/icons-material/SevereColdOutlined';
import BlenderOutlinedIcon from '@mui/icons-material/BlenderOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import HeadphonesBatteryOutlinedIcon from '@mui/icons-material/HeadphonesBatteryOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
const DrawerExample=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const [clicked,setClicked] = useState(true);
    return (
        
      <>
        <Button ref={btnRef} colorScheme='black' variant='ghost' onClick={onOpen}>
        <i id="bar" style={{position:"relative",top:"-12px",fontSize:"25px"}} className={clicked?'fas fa-bars':'fas fa-bars'} onClick={()=>{setClicked(!clicked)}} ></i> 
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <Image transform="scale(0.5)" padding="20px" src="https://user-images.githubusercontent.com/107903370/212881832-6209377a-42ad-4057-a973-6ecba2dcd60d.png" /> <br/>
                <Text as="h6" fontSize="16px" >Shop By</Text>
            </DrawerHeader>
  
            <DrawerBody  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
            
              <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Men</Text>
                      </Box>
                       <FaceOutlinedIcon fontSize="medium"  /> <Box>
                         </Box></Flex>
                </Link>
                <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Women</Text>
                      </Box>
                       <Face4OutlinedIcon fontSize="large" /> <Box>
                         </Box></Flex>
                </Link>
                <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Kids</Text>
                      </Box>
                       <ChildCareOutlinedIcon fontSize="large" /> <Box>
                         </Box></Flex>
                </Link>
                <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Winter Wear</Text>
                      </Box>
                       <SevereColdOutlinedIcon fontSize="large" /> <Box>
                         </Box></Flex>
                </Link>
                <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Home & Kitchen</Text>
                      </Box>
                       <BlenderOutlinedIcon fontSize="large" /> <Box>
                         </Box></Flex>
                </Link>
                <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Watches</Text>
                      </Box>
                       <WatchOutlinedIcon fontSize="large" /> <Box>
                         </Box></Flex>
                </Link>
                <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Indie</Text>
                      </Box>
                       <BedOutlinedIcon fontSize="large" /> <Box>
                         </Box></Flex>
                </Link>
                <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Jewellery</Text>
                      </Box>
                       <DiamondOutlinedIcon fontSize="large" /> <Box>
                         </Box></Flex>
                </Link>
                <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Accessories</Text>
                      </Box>
                       <HeadphonesBatteryOutlinedIcon fontSize="large" /> <Box>
                         </Box></Flex>
                </Link>
                <Link to="#"> 
                    <Flex  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" margin="8px" ><Box>
                      <Text fontSize="18px" >Beauty</Text>
                      </Box>
                       <BrushOutlinedIcon fontSize="large" /> <Box>
                         </Box></Flex>
                </Link>
            </DrawerBody>
   
            <DrawerFooter>
                
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default DrawerExample