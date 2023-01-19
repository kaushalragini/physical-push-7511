import React from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverCloseButton,
    Button,
    Heading,
    Text,
    VStack,
    PinInputField,
    PinInput,
    HStack
} from '@chakra-ui/react'

import { Link } from "react-router-dom";

const Otp = () => {
    return (
        <Popover>

            <PopoverTrigger>
            <Button rounded='none' colorScheme='orange' w='full' >CONTINUE</Button>
            </PopoverTrigger>


            <PopoverContent
                w={['full', 'md']}
                p={[8, 10]}
                mt={[20, '10vh']}
                mx='auto'
                border={['none', '1px']}
                borderColor={['', 'gray.300']}
                borderRadius={10}
            >

                <VStack spacing={4} align='flex-start' w='full' >
                    <VStack spacing={4} align='flex-start' w='full' >

                        <PopoverCloseButton />
                        <Button color='red.300' >Back</Button>

                        <Heading>Sign In with OTP</Heading>
                        <Text>Please enter OTP sent to</Text>
                        <>+91 95XXXXX073</>

                    </VStack>

                    <HStack>
                        <PinInput type='alphanumeric' >
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>

                    <Link to="/" ><Button rounded='none' colorScheme='orange' w='100%'  >START SHOPPING</Button></Link>

                </VStack>

            </PopoverContent>

        </Popover>
    )
}

export default Otp;