import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
function SeprateCategory() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Select Category</Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Choose Category</ModalHeader>
                    <ModalCloseButton />
                    <div style={{ display: "flex" }}>
                        <ModalBody border="1px solid">
                            <Button>Men</Button>
                            <Button>Women</Button>
                        </ModalBody>
                        <ModalBody border="1px solid">
                            <div>
                                <input type="Checkbox" />
                                <label>clothing</label>
                            </div>
                            <div>
                                <input type="Checkbox" />
                                <label>clothing</label>
                            </div>
                            <div>
                                <input type="Checkbox" />
                                <label>clothing</label>
                            </div>
                            <div>
                                <input type="Checkbox" />
                                <label>clothing</label>
                            </div>

                        </ModalBody>
                    </div>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default SeprateCategory
