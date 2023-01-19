import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import "./MyAccount.css"

const MyAccount = () => {
    return (
        <Box >

            <Box id="MyAccount_Box">

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
                   
                </Box>
            </Box>
            <Box className="MyAccount_image" display="flex" justifyContent="space-evenly" >
               
            </Box>
        </Box>
    )
}

export default MyAccount;