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
    FormControl,
    FormLabel,
    PinInputField,
    PinInput,
    HStack
} from '@chakra-ui/react'

import { Link } from "@chakra-ui/react";
const Otp = () => {
    return (
        <Popover>

            <PopoverTrigger>
                <Button>Otp</Button>
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

                    <Button rounded='none' colorScheme='orange' w='50%' >START SHOPPING</Button>
                </VStack>

            </PopoverContent>

        </Popover>
    )
}

export default Otp;