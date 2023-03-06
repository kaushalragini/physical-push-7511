import {
  PinInputField,
  PinInput,
  HStack,
  Button,
  ModalFooter,
  Input,
  FormLabel,
  FormControl,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  Modal,
  useDisclosure,
  Text,
  Image,
  Box,
  color,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import style from "../../Style/Join.module.css"
import HoverProfile from "./Hover";
function Join() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sendOtp, setSendOtp] = useState(false);
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const phoneNumberHandler = (e) => {
    if (phone.length === 10) {
      return;
    }
    setPhone(e.target.value);
  };
  const otpHandler = (e) => {
    setOtp(e.target.value);
  };
  const clickHandler = () => {
    setSendOtp(true);
    setPhone("");
  };
  const otpSubmitHandler = () => {
    setSendOtp(false);
    toggleAuth(!isAuth);
    onClose();
  };
  if (sendOtp === true) {
    return (
      <>
        {isAuth === false ? (
          <Button onClick={onOpen} className="loginBtn">
            LOGIN/SIGNUP
          </Button>
        ) : (
          <Button style={{ backgroundColor: "red", color: "black" }}>User</Button>
        )}
        <Modal
          className="loginModal"
          // initialFocusRef={initialRef}
          // finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                {/* <FormLabel>Enter OTP</FormLabel> */}
                <FormLabel
                  style={{ color: "black" }}>Please enter the OTP</FormLabel>
                <HStack>
                  <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button style={{ backgroundColor: "#D5A249", color: "white", width: "100px" }} onClick={otpSubmitHandler}>Submit </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        {isAuth === false ? (
          <p className="loginBtn" style={{


          }} onClick={onOpen} >
            Sign In/Join Ajio
          </p>
        ) : (
          <Button>
            {/* add popup here */}
            <HoverProfile />
          </Button>
        )}
        <Modal
          isOpen={isOpen}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div className={style.head} >
                <div >
                  <p>Join/Sign In using</p>
                </div>
              </div>
              <div style={
                {
                  marginTop: "50px"
                }
              }>
                <img src="https://i.imgur.com/sBcekXE.png" alt="" />
              </div>
              <div>
              </div>
              <FormControl>
                <FormLabel style={{ marginTop: "50px" }}>Enter your number to Signup or Login</FormLabel>
                <h1>Welcome to AJIO</h1>
                <Input
                  ref={initialRef}
                  placeholder="Enter Your Phone Number*"
                  onChange={(e) => phoneNumberHandler(e)}
                  type="text"
                  maxlength="10"
                  value={phone}
                />
                <Box fontSize="sm">{phone.length}/10</Box>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                style={{ backgroundColor: "#D5A249", color: "white", width: "100px" }}
                disabled={phone === "" ? "disabled" : ""}
                onClick={clickHandler}
              >
                Continue
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}
export default Join;


