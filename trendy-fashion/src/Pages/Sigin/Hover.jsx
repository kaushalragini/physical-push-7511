import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal, Stack
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
const HoverProfile = () => {
    const navigate = useNavigate();
    const { toggleAuth } = useContext(AuthContext);
    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    <Button style={{backgroundColor:"white",fontWeight:"400"}} className='profilebtn'onClick={() => {
                                    toggleAuth()
                                    navigate("/");
                                }}>Ragini Kaushal</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent width="250px" paddingBottom="10px" >
                        <PopoverArrow />
                        <PopoverHeader>Welcome Ragini !!</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Stack>
                                <Button >Logout</Button>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>
        </div>
    )
}
export default HoverProfile