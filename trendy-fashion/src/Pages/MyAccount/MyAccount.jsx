import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import "./MyAccount.css"

const MyAccount = () => {
    return (
        <Box >
            <Box id="MyAccount_Box" >

                <Box className="MyAccount_left" >
                    <Heading size="md" marginBottom="15px" >My Account</Heading>
                    <Text color="gray.500" >Orders & Credits</Text>
                    <Text color='blue' >Orders</Text>
                    <Box>
                        <Box className="MyAccount_list" ><Link href="#" >AJIO Wallet<sub style={{ color: "red" }}>New</sub></Link></Box>
                        <Box className="MyAccount_list" ><Link href="#" >Invite Friens<sub style={{ color: "red" }} >New</sub></Link></Box>
                        <Text className="MyAccount_list" ><sub>Earn $100 AJIO Points every friend</sub></Text>
                        <Box className="MyAccount_list" ><Link>My Rewards</Link></Box>
                        <Box className="MyAccount_list" ><Link>Customer Care</Link></Box>
                    </Box>
                    <Text color='blue'>Proile</Text>
                    <Box className="MyAccount_list" ><Link href="#" >Personal Information</Link></Box>
                    <Box className="MyAccount_list" ><Link href="#" >Address Book</Link></Box>
                    <Box className="MyAccount_list" ><Link href="#" >Payments</Link></Box>
                </Box>

                <Box className=" MyAccount_right">
                    <Heading marginTop="18px" >My Orders</Heading>
                    <Text marginTop="150px" marginBottom="30px" color="gray" >Oops! We are unable to load your orders at the moment. Please try again in sometime</Text>
                    <Button rounded='none' colorScheme='orange' w="35%" >REFRESH PAGE</Button>
                </Box>
            </Box>
            <Box className="MyAccount_image" display="flex" justifyContent="space-evenly" >
                <Box><Image width="60%" src="https://user-images.githubusercontent.com/104529601/213252015-dc9a210f-c31f-402e-a0bc-93f2f266d7b0.png" alt="Exchange" /></Box>
                <Box><Image width="60%" src="https://user-images.githubusercontent.com/104529601/213252028-6f144382-ba27-4e6d-aedd-7629dc6c735d.png" alt="HandPi" /></Box>
                <Box><Image width="60%" src="https://user-images.githubusercontent.com/104529601/213252031-55aa2de1-91dc-451f-8d2a-8901e1bd52c3.png" alt="Assured" /></Box>
            </Box>
        </Box>
    )
}

export default MyAccount;