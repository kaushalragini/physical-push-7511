import React from 'react';
import "./Navbar.css"
import { Box, Hide, Image, Input, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Indie from './Indie';
import HomeKitchen from './HomeKitchen';
import Sigin from "../Pages/Sigin/Sigin";
import { Link } from 'react-router-dom';
import DrawerExample from './Drawer';
import SearchInput from './SearchInput';
import WishList from './WishList';
const Navbar = () => {
  return (
    <>
      <Box id='Navbar' >
        <Box id='NavbarTop' >
          <ul>
            <Link to='/myAccount' ><li>MyAccount</li></Link>
            <li><Sigin /></li>
            <Link to="/customer"> <li>Customer Care</li></Link>
            <a target="_blank" href="https://luxe.ajio.com/"><li>Visit AJIOLUXE</li></a>
          </ul>
        </Box>
        <Box id='NavbarBottom'  >
          <Link to="/" ><Box  >
            <img className='project-Logo' src="https://user-images.githubusercontent.com/107903370/212881832-6209377a-42ad-4057-a973-6ecba2dcd60d.png" alt="project-Logo" />
          </Box>
          </Link>
          <Box id='NavBotLi'  >
            <Hide below="md">
              <Popover matchWidth={false} trigger="hover">
                <PopoverTrigger>
                  <Link to='/menpage' > <span>MEN</span></Link>
                </PopoverTrigger>
                <PopoverContent w="100%" mt="10px">
                  <Men />
                </PopoverContent>
              </Popover>
              <Popover matchWidth={false} trigger="hover">
                <PopoverTrigger>
                  <Link to="/womenpage" ><span>WOMEN</span></Link>
                </PopoverTrigger>
                <PopoverContent w="100%" mt="10px">
                  <Women />
                </PopoverContent>
              </Popover>
              <Popover matchWidth={false} trigger="hover">
                <PopoverTrigger>
                  <span>KIDS</span>
                </PopoverTrigger>
                <PopoverContent w="100%" mt="10px">
                  <Kids />
                </PopoverContent>
              </Popover>
              <Popover matchWidth={false} trigger="hover">
                <PopoverTrigger>
                  <span>INDIE</span>
                </PopoverTrigger>
                <PopoverContent w="100%" mt="10px">
                  <Indie />
                </PopoverContent>
              </Popover>
              <Popover matchWidth={false} trigger="hover">
                <PopoverTrigger>
                  <span>KITCHEN&FURNITURE</span>
                </PopoverTrigger>
                <PopoverContent w="100%" mt="10px">
                  <HomeKitchen />
                </PopoverContent>
              </Popover>
              <Popover matchWidth={false} trigger="hover">
                <PopoverTrigger>
                  <Input placeholder='Search AJIO' />
                </PopoverTrigger>
                <PopoverContent w="100%" mt="10px">
                  <SearchInput />
                </PopoverContent>
              </Popover>

              {/* <Image paddingBottom="10px" src="https://assets.ajio.com/static/img/wishlistIcon.svg" /> */}
              <WishList />

              <Image src="https://cdn-icons-png.flaticon.com/512/71/71200.png" style={{ width: "3%", height: "4%" }} />
            </Hide>
            {/* <div  > */}
            {/* <i id="bar" className={clicked?'fas fa-bars':'fas fa-times'} onClick={()=>{setClicked(!clicked)}} ></i>  */}
            <DrawerExample />

            {/* </div> */}

            {/* {<HamburgerIcon boxSize="1.5em" />} */}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
