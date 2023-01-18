import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"

const BasicUsage=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box background="white"  padding="0px">
      <Button onClick={onOpen} fontSize="10px" >Sign In / Join AJIO</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to AJIO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Join/Sign In using</Text>
            <Box>
              <Button>FACEBOOK</Button>
            </Box>
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </Box>
  )
}
export default BasicUsage