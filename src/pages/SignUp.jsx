import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import Navbar from "../components/Navbar";

import { useState } from "react";
import http from "../configs/http";

import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [groupNumber, setGroupNumber] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      contactNumber,
      groupNumber,
    };
    if (payload) {
      console.log("payload is", payload);
      handleSendRegisterRequest(payload);
    }
  };

  const handleSendRegisterRequest = async (payload) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:8000/users/register`,
        payload
      );
      console.log("group added", response);
      if (response.status == 201) {
        console.log("success");
        toast({
          title: `Registered Successfully`,
          status: "success",
          isClosable: true,
        });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast({
        title: `Failed to Register`,
        status: "error",
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Flex
        minH={"90vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign Up</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Student Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="contactNumber">
                  <FormLabel>Contact Number</FormLabel>
                  <Input
                    type="number"
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <FormControl id="groupNumber">
                  <FormLabel>Group Number</FormLabel>
                  <Input
                    type="number"
                    onChange={(e) => setGroupNumber(e.target.value)}
                  />
                </FormControl>
                <Input
                  value={loading ? "Signing Up..." : "Sign Up"}
                  w="100%"
                  mt="5"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.700",
                  }}
                  type="submit"
                />
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
