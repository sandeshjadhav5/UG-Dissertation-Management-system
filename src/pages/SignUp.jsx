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
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
  };

  return (
    <>
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
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="mobileNumber">
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="number"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </FormControl>
              <FormControl id="mobileNumber">
                <FormLabel>Select Your Role</FormLabel>
                <Select onChange={(e) => setMobileNumber(e.target.value)}>
                  <option value="">Select Your Role</option>
                  <option value="guide">Project Guide</option>
                  <option value="student">Student</option>
                </Select>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  w="100%"
                  mt="5"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.700",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </FormControl>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
